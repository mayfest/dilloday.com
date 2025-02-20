'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import styled from 'styled-components';
import { useCarousel } from '@/hooks/useCarousel';
import { carouselItems } from '@/constants/features';

type ButtonProps = {
  isIcon?: boolean;
  variant?: 'outline' | 'default';
};

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  color: #d8b4fe;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

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

const CarouselContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CarouselItemsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CardDescription = styled.div`
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const DescriptionText = styled.span`
  display: inline;
`;

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 500;
  padding: ${(props) => (props.isIcon ? '0.75rem' : '0.75rem 1.5rem')};
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;
  font-size: 1rem;

  ${(props) =>
    props.variant === 'outline' &&
    `
    background-color: transparent;
    border: 1.5px solid #8b5cf6;
    color: #d8b4fe;
    
    &:hover {
      background-color: rgba(139, 92, 246, 0.2);
    }
  `}
`;

const ShowMoreButton = styled(Button)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  font-weight: 600;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const IconWrapper = styled.div`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d8b4fe;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: rgba(139, 92, 246, 0.3);
  border: 2px solid #8b5cf6;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(139, 92, 246, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    fill: #d8b4fe;
    width: 20px;
    height: 20px;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  align-items: center;
`;

const Dot = styled.button<{ $active: boolean }>`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  transition: all 0.2s;
  border: ${(props) => (props.$active ? '2px solid #a855f7' : 'none')};
  background-color: ${(props) =>
    props.$active ? '#8b5cf6' : 'rgba(255, 255, 255, 0.3)'};
  box-shadow: ${(props) =>
    props.$active ? '0 0 5px #a855f7' : '0 0 0 transparent'};

  &:hover {
    background-color: ${(props) =>
      props.$active ? '#8b5cf6' : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.1);
  }
`;

const Section = styled.section`
  padding: 4rem 1rem 6rem;
  /* No background color needed - using site's black background */
  @media (min-width: 768px) {
    padding: 6rem 2rem 8rem;
  }
  @media (min-width: 1024px) {
    padding: 8rem 2rem 10rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export default function FestivalCarousel() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const itemsPerPage = isMobile ? 1 : isTabletOrMobile ? 2 : 3;

  const {
    currentItems,
    nextPage,
    prevPage,
    goToPage,
    currentPage,
    totalPages,
    isAnimating,
    onAnimationComplete,
  } = useCarousel(carouselItems, itemsPerPage);

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const animationKey = `page-${currentPage}-items-${itemsPerPage}`;

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
              <Title>What to Expect: Dillo Day</Title>
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
            <AnimatePresence mode="wait" onExitComplete={onAnimationComplete}>
              <CarouselItemsContainer
                key={animationKey}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onAnimationStart={() => {}}
              >
                {currentItems.map((item) => {
                  const isExpanded = expandedItems.includes(item.id);
                  return (
                    <StyledCard key={item.id}>
                      <CardImage
                        src={item.image || '/img/tech-team.jpg'}
                        alt={item.title}
                        width={600}
                        height={400}
                        priority
                      />
                      <CardContent>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>
                          <DescriptionText>
                            {isExpanded
                              ? item.description
                              : `${item.description.slice(0, 100)}${item.description.length > 100 ? '...' : ''}`}
                          </DescriptionText>

                          {item.description.length > 100 && (
                            <div>
                              <ShowMoreButton
                                onClick={() => toggleExpand(item.id)}
                                variant="outline"
                              >
                                {isExpanded ? 'Show Less' : 'Show More +'}
                              </ShowMoreButton>
                            </div>
                          )}
                        </CardDescription>
                      </CardContent>
                    </StyledCard>
                  );
                })}
              </CarouselItemsContainer>
            </AnimatePresence>

            <motion.div variants={carouselVariants}>
              <NavigationContainer>
                <NavButton
                  onClick={prevPage}
                  aria-label="previous slide"
                  disabled={isAnimating}
                >
                  <IconWrapper>
                    <ChevronLeft />
                  </IconWrapper>
                </NavButton>

                <DotContainer>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Dot
                      key={index}
                      $active={index === currentPage}
                      onClick={() => goToPage(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      disabled={isAnimating}
                    />
                  ))}
                </DotContainer>

                <NavButton
                  onClick={nextPage}
                  aria-label="Next slide"
                  disabled={isAnimating}
                >
                  <IconWrapper>
                    <ChevronRight />
                  </IconWrapper>
                </NavButton>
              </NavigationContainer>
            </motion.div>
          </CarouselContainer>
        </motion.div>
      </Container>
    </Section>
  );
}
