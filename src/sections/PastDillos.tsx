'use client';

import styled from 'styled-components';
import { Section, mobile } from '@/components';
import { Space_Grotesk } from 'next/font/google';
import PastDillosCarousel from '../components/PastDillosCarousel';
import { useEffect, useRef, useState } from 'react';
import { history } from '@/lib/history';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PastDilloInfo from '../components/PastDilloInfo';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import SlideList from '@/components/SlideList';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
`;

const Text = styled.p`
  margin: 16px 0;
  text-align: center;
`;

const SlideController = styled(motion.div)`
  display: flex;
  background: #431407;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideChangeButton = styled.button`
  padding: 8px;
  background-color: #3b0764;
  opacity: 1;
  color: #ffffff;

  &:hover,
  &:active {
    background-color: #581c87;
  }

  &:active {
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 3px;
  }

  &:disabled {
    color: #808080;
    background-color: #3b0764;
    opacity: 1;
    cursor: not-allowed;
  }
`;

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      staggerChildren: 0.5,
      when: 'beforeChildren',
    },
  },
};

const slideControllerVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: 'beforeChildren',
    },
  },
};

export default function PastDillos() {
  const [slide, setSlide] = useState(history.length - 1);
  const [view, setView] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  return (
    <Section
      id="id-past-dillos"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <LayoutGroup>
        <Title className={spaceGrotesk.className}>Relive Past Dillos</Title>
        <Text>Take a trip into the past with these old Dillo Day lineups.</Text>
        <SlideController
          className={spaceGrotesk.className}
          variants={slideControllerVariants}
        >
          <SlideChangeButton
            disabled={slide <= 0}
            onClick={() => {
              setSlide(slide - 1);
            }}
          >
            <ChevronLeftIcon />
          </SlideChangeButton>
          <SlideList slide={slide} setSlide={setSlide} />
          <SlideChangeButton
            disabled={slide >= history.length - 1}
            onClick={() => {
              setSlide(slide + 1);
            }}
          >
            <ChevronRightIcon />
          </SlideChangeButton>
        </SlideController>
        <PastDillosCarousel
          slide={slide}
          setSlide={setSlide}
          viewSlide={setView}
        />
        <AnimatePresence>
          {view !== null && (
            <PastDilloInfo
              i={view}
              item={history[view]}
              onClose={() => setView(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Section>
  );
}
