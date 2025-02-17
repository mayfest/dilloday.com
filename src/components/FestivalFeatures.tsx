'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import { features } from '@/constants/features';
import { FeatureCardItem } from '@/components/festival-feature-card';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureContentProps {
  feature: Feature;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

interface FeatureGroupComponentProps {
  features: Feature[];
}

interface CarouselGroupProps {
  groupIndex: number;
  features: Feature[];
  getItemsPerGroup: () => number;
  direction: number;
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
}

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
  max-width: 90rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = motion(styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
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
`);

const Subtitle = motion(styled.p`
  font-size: 1.125rem;
  color: #d8b4fe;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`);

const CarouselContainer = motion(styled.div`
  position: relative;
  overflow: hidden;
`);

const CarouselTrack = styled.div`
  position: relative;
  height: 40rem;
  @media (min-width: 768px) {
    height: 42rem;
  }
  @media (min-width: 1024px) {
    height: 44rem;
  }
`;

const FeatureGrid = styled(motion.div)<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 1rem;
  width: 100%;
  position: absolute;
  inset: 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    gap: 3rem;
    padding: 0 5rem;
  }
`;

const FeatureCard = styled.div`
  display: grid;
  grid-template-rows: 20rem 1fr;
  background-color: #1a1a1a;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.2);
  height: 100%;

  @media (min-width: 768px) {
    grid-template-rows: 20rem 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-rows: 24rem 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 1.25rem;
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const FeatureDescription = styled(motion.p)`
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #d8b4fe;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ShowMoreButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.375rem;
  color: #d8b4fe;
  width: fit-content;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(139, 92, 246, 0.2);
  }
  @media (min-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
`;

const NavigationContainer = styled.div`
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

const NavButton = styled.button<{ $disabled?: boolean }>`
  padding: 0.5rem;
  border-radius: 9999px;
  color: #d8b4fe;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  &:hover:not(:disabled) {
    background-color: rgba(139, 92, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

const DotButton = styled.button<{ $active: boolean }>`
  height: 0.375rem;
  width: 0.375rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.$active ? '#8b5cf6' : 'rgba(139, 92, 246, 0.2)'};
  @media (min-width: 768px) {
    height: 0.5rem;
    width: 0.5rem;
  }
`;

const gridVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
      delay: index * 0.15,
    },
  }),
};

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const carouselVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const StaticGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 1rem;
  width: 100%;
  position: absolute;
  inset: 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    gap: 3rem;
    padding: 0 5rem;
  }
`;

export default function FestivalCarousel() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [expandedIndices, setExpandedIndices] = useState<
    Record<number, number>
  >({});

  const [direction, setDirection] = useState(0);
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

  const getFeatureGroup = (groupIndex: number) => {
    const startIndex = groupIndex * getItemsPerGroup();
    return features.slice(startIndex, startIndex + getItemsPerGroup());
  };

  const nextGroup = () => {
    setDirection(1);
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setDirection(-1);
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const FeatureContent: React.FC<FeatureContentProps> = ({
    feature,
    index,
    isExpanded,
    onToggle,
  }) => (
    <ContentContainer>
      <FeatureTitle>{feature.title}</FeatureTitle>
      <FeatureDescription>
        {isExpanded
          ? feature.description
          : `${feature.description.slice(0, 100)}...`}
      </FeatureDescription>
      <ShowMoreButton onClick={onToggle}>
        {isExpanded ? 'SHOW LESS -' : 'SHOW MORE +'}
      </ShowMoreButton>
    </ContentContainer>
  );

  const FeatureGroupComponent: React.FC<FeatureGroupComponentProps> = ({
    features,
  }) => {
    const itemsPerGroup = getItemsPerGroup();

    return (
      <motion.div
        initial={{ x: direction > 0 ? 1000 : -1000 }}
        animate={{ x: 0 }}
        exit={{ x: direction < 0 ? 1000 : -1000 }}
        transition={{
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <StaticGrid $columns={itemsPerGroup}>
          {features.map((feature, index) => (
            <FeatureCard key={`${feature.title}-${index}`}>
              <ImageContainer>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
              <ContentContainer>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>
                  {expandedIndices[index] === index
                    ? feature.description
                    : `${feature.description.slice(0, 100)}...`}
                </FeatureDescription>
                <ShowMoreButton
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setExpandedIndices((prev) => ({
                      ...prev,
                      [index]: prev[index] === index ? -1 : index,
                    }));
                  }}
                >
                  {expandedIndices[index] === index
                    ? 'SHOW LESS -'
                    : 'SHOW MORE +'}
                </ShowMoreButton>
              </ContentContainer>
            </FeatureCard>
          ))}
        </StaticGrid>
      </motion.div>
    );
  };

  const CarouselGroup: React.FC<CarouselGroupProps> = ({
    groupIndex,
    features,
    getItemsPerGroup,
    direction,
    expandedIndex,
    setExpandedIndex,
  }) => {
    return (
      <FeatureGrid
        $columns={getItemsPerGroup()}
        key={groupIndex}
        variants={gridVariants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition={{
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={`${feature.title}-${index}`}>
            <ImageContainer>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageContainer>
            <ContentContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>
                {expandedIndex === index
                  ? feature.description
                  : `${feature.description.slice(0, 100)}...`}
              </FeatureDescription>
              <ShowMoreButton
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setExpandedIndex(expandedIndex === index ? null : index);
                }}
              >
                {expandedIndex === index ? 'SHOW LESS -' : 'SHOW MORE +'}
              </ShowMoreButton>
            </ContentContainer>
          </FeatureCard>
        ))}
      </FeatureGrid>
    );
  };

  return (
    <Section>
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Header>
            <motion.div variants={titleVariants}>
              <Title>Dillo Day At A Glance</Title>
            </motion.div>
            <motion.div variants={titleVariants}>
              <Subtitle>
                We&apos;re dedicated to making the Dillo Day experience
                unforgettable for all attendees with a variety of features and
                attractions.
              </Subtitle>
            </motion.div>
          </Header>

          <CarouselContainer variants={carouselVariants}>
            <CarouselTrack>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentGroup}
                  initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction < 0 ? '100%' : '-100%', opacity: 0 }}
                  transition={{
                    x: {
                      type: 'tween',
                      duration: 0.85,
                      ease: [0.32, 0.72, 0, 1],
                    },
                    opacity: { duration: 0.5 },
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <StaticGrid $columns={getItemsPerGroup()}>
                    {getFeatureGroup(currentGroup).map((feature, index) => (
                      <FeatureCardItem
                        key={`${feature.title}-${index}`}
                        feature={feature}
                      />
                    ))}
                  </StaticGrid>
                </motion.div>
              </AnimatePresence>
            </CarouselTrack>
          </CarouselContainer>

          <motion.div variants={carouselVariants}>
            <NavigationContainer>
              <NavButton onClick={prevGroup}>
                <ChevronLeft />
              </NavButton>
              <DotContainer>
                {Array.from({ length: totalGroups }).map((_, index) => (
                  <DotButton
                    key={index}
                    $active={index === currentGroup}
                    onClick={() => {
                      setDirection(index > currentGroup ? 1 : -1);
                      setCurrentGroup(index);
                    }}
                  />
                ))}
              </DotContainer>
              <NavButton onClick={nextGroup}>
                <ChevronRight />
              </NavButton>
            </NavigationContainer>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
