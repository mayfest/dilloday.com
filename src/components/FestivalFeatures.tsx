'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import styled from 'styled-components';
import { features } from '@/constants/features';

const Section = styled.section`
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    padding: 3rem 1rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: rgb(216, 180, 254);
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  position: relative;
  height: 32rem;
  @media (min-width: 768px) {
    height: 40rem;
  }
  @media (min-width: 1024px) {
    height: 48rem;
  }
`;

const FeatureGroupWrapper = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  position: absolute;
  inset: 0;
  padding: 0 1rem;
  transition: transform 500ms ease-in-out;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    gap: 2rem;
    padding: 0 5rem;
  }

  ${({ $columns }) => {
    switch ($columns) {
      case 1:
        return 'grid-template-columns: 1fr;';
      case 2:
        return 'grid-template-columns: 1fr 1fr;';
      case 3:
        return 'grid-template-columns: 1fr 1fr 1fr;';
      default:
        return 'grid-template-columns: 1fr;';
    }
  }}

  ${({ $animationClass }) => {
    if ($animationClass === 'translate-x-0 animate-slide-out-left') {
      return `
        transform: translateX(0);
        animation: slideOutLeft 500ms ease-in-out forwards;
        @keyframes slideOutLeft {
          to {
            transform: translateX(-100%);
          }
        }
      `;
    }
    if ($animationClass === 'translate-x-0 animate-slide-out-right') {
      return `
        transform: translateX(0);
        animation: slideOutRight 500ms ease-in-out forwards;
        @keyframes slideOutRight {
          to {
            transform: translateX(100%);
          }
        }
      `;
    }
    if ($animationClass === 'translate-x-full animate-slide-in-right') {
      return `
        transform: translateX(100%);
        animation: slideInRight 500ms ease-in-out forwards;
        @keyframes slideInRight {
          to {
            transform: translateX(0);
          }
        }
      `;
    }
    if ($animationClass === '-translate-x-full animate-slide-in-left') {
      return `
        transform: translateX(-100%);
        animation: slideInLeft 500ms ease-in-out forwards;
        @keyframes slideInLeft {
          to {
            transform: translateX(0);
          }
        }
      `;
    }
    return 'transform: translateX(0);';
  }}
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 20rem;
  @media (min-width: 768px) {
    height: 23.5rem;
  }
  @media (min-width: 1024px) {
    height: 50rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: rgb(216, 180, 254);
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: rgb(209, 213, 219);
  margin-bottom: 1rem;
  flex: 1;
  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

const ShowMoreButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.375rem;
  color: rgb(216, 180, 254);
  width: fit-content;
  transition: background-color 150ms;

  &:hover {
    background-color: rgba(139, 92, 246, 0.2);
  }

  @media (min-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const NavButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  color: rgb(216, 180, 254);
  transition: background-color 150ms;

  &:hover:not(:disabled) {
    background-color: rgba(139, 92, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

const DotButton = styled.button`
  height: 0.375rem;
  width: 0.375rem;
  border-radius: 9999px;
  transition: background-color 150ms;
  background-color: ${({ $active }) =>
    $active ? 'rgb(139, 92, 246)' : 'rgba(139, 92, 246, 0.2)'};

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    height: 0.5rem;
    width: 0.5rem;
  }
`;

const ChevronIcon = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  @media (min-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`;

export default function FestivalCarousel() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const [previousGroup, setPreviousGroup] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerGroup = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const totalGroups = Math.ceil(features.length / getItemsPerGroup());

  const getFeatureGroup = (groupIndex) => {
    const startIndex = groupIndex * getItemsPerGroup();
    return features.slice(startIndex, startIndex + getItemsPerGroup());
  };

  const nextGroup = () => {
    if (isAnimating) return;
    setPreviousGroup(currentGroup);
    setDirection('right');
    setIsAnimating(true);
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    if (isAnimating) return;
    setPreviousGroup(currentGroup);
    setDirection('left');
    setIsAnimating(true);
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const FeatureGroup = ({ features, isActive, animationClass }) => (
    <FeatureGroupWrapper
      $columns={getItemsPerGroup()}
      $animationClass={animationClass}
    >
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <ImageWrapper>
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </ImageWrapper>
          <ContentWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>
              {expandedIndex === index
                ? feature.description
                : `${feature.description.slice(0, 100)}...`}
            </FeatureDescription>
            <ShowMoreButton
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              {expandedIndex === index ? 'SHOW LESS -' : 'SHOW MORE +'}
            </ShowMoreButton>
          </ContentWrapper>
        </FeatureCard>
      ))}
    </FeatureGroupWrapper>
  );

  return (
    <Section>
      <Container>
        <HeaderWrapper>
          <Title>Dillo Day At A Glance</Title>
          <Subtitle>
            We&apos;re dedicated to making the Dillo Day experience
            unforgettable for all attendees with a variety of features and
            attractions.
          </Subtitle>
        </HeaderWrapper>

        <CarouselWrapper>
          <CarouselContent>
            {isAnimating && (
              <FeatureGroup
                features={getFeatureGroup(previousGroup)}
                isActive={false}
                animationClass={
                  direction === 'right'
                    ? 'translate-x-0 animate-slide-out-left'
                    : 'translate-x-0 animate-slide-out-right'
                }
              />
            )}

            <FeatureGroup
              features={getFeatureGroup(currentGroup)}
              isActive={true}
              animationClass={
                isAnimating
                  ? direction === 'right'
                    ? 'translate-x-full animate-slide-in-right'
                    : '-translate-x-full animate-slide-in-left'
                  : 'translate-x-0'
              }
            />
          </CarouselContent>
        </CarouselWrapper>

        <ControlsWrapper>
          <NavButton onClick={prevGroup} disabled={isAnimating}>
            <ChevronIcon as={ChevronLeft} />
          </NavButton>

          <DotsWrapper>
            {Array.from({ length: totalGroups }).map((_, index) => (
              <DotButton
                key={index}
                $active={index === currentGroup}
                onClick={() => {
                  if (!isAnimating) {
                    setDirection(index > currentGroup ? 'right' : 'left');
                    setPreviousGroup(currentGroup);
                    setIsAnimating(true);
                    setCurrentGroup(index);
                  }
                }}
                disabled={isAnimating}
              />
            ))}
          </DotsWrapper>

          <NavButton onClick={nextGroup} disabled={isAnimating}>
            <ChevronIcon as={ChevronRight} />
          </NavButton>
        </ControlsWrapper>
      </Container>
    </Section>
  );
}
