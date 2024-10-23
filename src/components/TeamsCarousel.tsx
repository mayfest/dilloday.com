import { XMarkIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Contents = styled.div`
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  margin: 0;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Add this line to stack items vertically */
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  gap: 8px;
`;

// Close the info box
const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #323232;
  }

  &:active {
    background-color: #484848;
  }

  svg {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
  }
`;

interface TeamsCarouselProp {
  onClose: () => void;
  
}

function TeamsCarousel({ onClose }: TeamsCarouselProp) {
  return (
    <Container>
      <Carousel className="w-full h-full">
        <CarouselContent>
          <CarouselItem className="border border-green-500">...</CarouselItem>
          <CarouselItem className="border border-purple-500">...</CarouselItem>
          <CarouselItem className="border border-orange-500">...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CloseButton onClick={() => onClose()}>
        <XMarkIcon />
      </CloseButton>
    </Container>
  );
}

export default TeamsCarousel;
