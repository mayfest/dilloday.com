import { history } from '@/lib/history';
import { useRef } from 'react';
import styled from 'styled-components';
import SlideButton from './SlideButton';

const Container = styled.div`
  flex: 1;
  display: flex;
  background: #6b21a8;
  overflow-x: auto;
  gap: 8px;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const GradientLeft = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-width: 16px;
  max-width: 16px;
  height: 100%;
  background: linear-gradient(to right, #6b21a8, transparent);
  z-index: 1;
`;

const GradientRight = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  min-width: 16px;
  max-width: 16px;
  height: 100%;
  background: linear-gradient(to left, #6b21a8, transparent);
  z-index: 1;
`;

interface SlideListProps {
  slide: number;
  setSlide: (slide: number) => void;
}

export default function SlideList({ slide, setSlide }: SlideListProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Container ref={ref}>
      <GradientLeft />
      {history.map((dillo, i) => (
        <SlideButton
          key={`slide-list-${i}`}
          listRef={ref}
          selected={slide === i}
          onClick={() => setSlide(i)}
        >
          {dillo.year}
        </SlideButton>
      ))}
      <GradientRight />
    </Container>
  );
}
