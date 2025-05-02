'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { smartDilloImages } from '@/constants/smart-dillo-links';

interface CarouselSlideProps {
  offset: number;
}

interface DotProps {
  active: boolean;
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: '#ffffff';
  margin-bottom: 1.5rem;
  max-width: 700px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin: 2rem 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CarouselSlide = styled.div<CarouselSlideProps>`
  flex: 0 0 100%;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.offset}%);
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(78, 42, 132, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  z-index: 10;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(78, 42, 132, 0.9);
  }

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Dot = styled.button<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? '#4e2a84' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#4e2a84' : '#aaa')};
  }

  &:focus {
    outline: none;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkText = styled.span`
  color: #d8b4fe;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export default function SmartDilloBanner(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % smartDilloImages.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handlePrev = (): void => {
    setAutoplay(false);
    setCurrentSlide((prev) =>
      prev === 0 ? smartDilloImages.length - 1 : prev - 1
    );
  };

  const handleNext = (): void => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % smartDilloImages.length);
  };

  const goToSlide = (index: number): void => {
    setAutoplay(false);
    setCurrentSlide(index);
  };

  return (
    <BannerContainer id="smart-dillo">
      <ContentWrapper>
        <Header>
          <SectionTitle>Smart Dillo</SectionTitle>
          <HeaderText>Be Smart. Be Safe. Be Responsible.</HeaderText>
        </Header>

        <CarouselContainer>
          <PrevButton onClick={handlePrev}>&lt;</PrevButton>

          <CarouselTrack>
            {smartDilloImages.map((image, index) => (
              <CarouselSlide key={index} offset={-100 * currentSlide}>
                <SlideImage src={image.src} alt={image.alt} />
              </CarouselSlide>
            ))}
          </CarouselTrack>

          <NextButton onClick={handleNext}>&gt;</NextButton>

          <DotsContainer>
            {smartDilloImages.map((_, index) => (
              <Dot
                key={index}
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </CarouselContainer>

        <Description>
          In conjunction with Northwestern's student-run end of year music
          festival, Dillo Day, the Smart Dillo campaign provides guidance on
          creating a safe community and enjoyable experience for everyone
          throughout the day. If you would like to learn more about the Smart
          Dillo campaign, please visit the{' '}
          <Link
            href="https://www.northwestern.edu/wellness/hpaw/campaigns/smart-dillo/index.html"
            target="_blank"
          >
            <LinkText>Smart Dillo website</LinkText>
          </Link>
        </Description>
      </ContentWrapper>
    </BannerContainer>
  );
}
