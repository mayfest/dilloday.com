'use client';

import styled from 'styled-components';
import { Section, mobile } from '@/components';
import { Space_Grotesk } from 'next/font/google';
import PastDillosCarousel from './PastDillosCarousel';
import { useEffect, useRef, useState } from 'react';
import { history } from '@/lib/history';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PastDilloInfo from './PastDilloInfo';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

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

const SlideController = styled.div`
  display: flex;
  background: #431407;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideChangeButton = styled.button`
  padding: 8px;
  background-color: #431407;
  opacity: 1;
  color: #ffffff;

  &:hover,
  &:active {
    background-color: #7c2d12;
  }

  &:active {
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
  }

  &:disabled {
    color: #808080;
    background-color: #431407;
    opacity: 1;
    cursor: not-allowed;
  }
`;

const SlideList = styled.div`
  flex: 1;
  display: flex;
  background: #9a3412;
  overflow-x: auto;
  gap: 8px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SlideListGradientLeft = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-width: 16px;
  max-width: 16px;
  height: 100%;
  background: linear-gradient(to right, #9a3412, transparent);
  z-index: 1;
`;

const SlideListGradientRight = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  min-width: 16px;
  max-width: 16px;
  height: 100%;
  background: linear-gradient(to left, #9a3412, transparent);
  z-index: 1;
`;

const SlideButton = styled.button<{ $selected: boolean }>`
  font-size: 24px;
  padding: 4px;
  font-weight: 700;

  color: #fb923c;

  &:hover {
    color: #fed7aa;
  }

  &:active {
    color: #ffedd5;
  }

  ${(props) =>
    props.$selected &&
    `
    color: #ffffff;
  `}

  ${mobile} {
    font-size: 16px;
  }
`;

export default function PastDillos() {
  const [slide, setSlide] = useState(history.length - 1);
  const [view, setView] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (listRef.current && selectedRef.current) {
      const list = listRef.current;
      const selected = selectedRef.current;
      list.scrollTo({
        behavior: 'smooth',
        left:
          selected.offsetLeft + selected.offsetWidth / 2 - list.offsetWidth / 2,
      });
    }
  }, [slide]);

  return (
    <Section>
      <LayoutGroup>
        <Title className={spaceGrotesk.className}>Relive Past Dillos</Title>
        <Text>
          Take a trip into the past with these past Dillo Day lineups.
        </Text>
        <SlideController className={spaceGrotesk.className}>
          <SlideChangeButton
            disabled={slide <= 0}
            onClick={() => {
              setSlide(slide - 1);
            }}
          >
            <ChevronLeftIcon />
          </SlideChangeButton>
          <SlideList ref={listRef}>
            <SlideListGradientLeft />
            {history.map((dillo, i) => (
              <SlideButton
                key={`slide-list-${i}`}
                $selected={slide === i}
                ref={slide === i ? selectedRef : null}
                onClick={() => {
                  setSlide(i);
                }}
              >
                {dillo.year}
              </SlideButton>
            ))}
            <SlideListGradientRight />
          </SlideList>
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
