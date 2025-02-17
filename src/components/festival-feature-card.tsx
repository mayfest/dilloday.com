import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

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

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #d8b4fe;
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
`;

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCardItem({ feature }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FeatureCard>
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
        <AnimatePresence mode="wait">
          <FeatureDescription
            key={isExpanded ? 'expanded' : 'collapsed'}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: {
                type: 'spring',
                stiffness: 500,
                damping: 30,
                duration: 0.3,
              },
              opacity: { duration: 0.2 },
            }}
          >
            {isExpanded
              ? feature.description
              : `${feature.description.slice(0, 100)}...`}
          </FeatureDescription>
        </AnimatePresence>
        <ShowMoreButton onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? 'SHOW LESS -' : 'SHOW MORE +'}
        </ShowMoreButton>
      </ContentContainer>
    </FeatureCard>
  );
}
