import styled from 'styled-components';
import { mobile } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
`;

const Trees = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  transform: rotate(-15deg);
`;

const Trees2 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  transform: rotate(15deg);
`;

const Campfire = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const TreeImage = styled.img<{
  $size: number;
  $flip: boolean;
  $hideOnMobile: boolean;
  $rotation?: number;
  $offsetX?: number;
  $offsetY?: number;
}>`
  height: ${({ $size }) => $size}px;
  transform: ${({ $flip, $rotation }) =>
    `${$flip ? 'scaleX(-1)' : ''} rotate(${$rotation || 0}deg)`};
  margin-left: ${({ $offsetX }) => $offsetX || 0}px;
  margin-bottom: ${({ $offsetY }) => $offsetY || 0}px;
  ${mobile} {
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? 'none' : 'block')};
  }
`;

const CampfireImage = styled.img`
  height: 170px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #d1555a;
  text-transform: uppercase;
  text-align: center;
`;

export default function CarnivalDilloBanner() {
  const rotations = [12, -8, 22, -15, 5, -25];
  const offsetsX = [5, -7, 3, -4, 8, -2];
  const offsetsY = [-3, 6, -8, 4, -5, 7];

  return (
    <Container>
      <Contents>
        <Trees>
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={90}
            $flip={false}
            $hideOnMobile={false}
            $rotation={rotations[0]}
            $offsetX={offsetsX[0]}
            $offsetY={offsetsY[0]}
          />
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={80}
            $flip={false}
            $hideOnMobile={false}
            $rotation={rotations[1]}
            $offsetX={offsetsX[1]}
            $offsetY={offsetsY[1]}
          />
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={70}
            $flip={false}
            $hideOnMobile={true}
            $rotation={rotations[2]}
            $offsetX={offsetsX[2]}
            $offsetY={offsetsY[2]}
          />
        </Trees>
        <Campfire>
          <CampfireImage src="/carnival-icons/lottery.png" alt="Lottery Icon" />
        </Campfire>
        <Trees2>
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={70}
            $flip={false}
            $hideOnMobile={true}
            $rotation={rotations[3]}
            $offsetX={offsetsX[3]}
            $offsetY={offsetsY[3]}
          />
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={80}
            $flip={false}
            $hideOnMobile={false}
            $rotation={rotations[4]}
            $offsetX={offsetsX[4]}
            $offsetY={offsetsY[4]}
          />
          <TreeImage
            src="/carnival-icons/blueticket.png"
            alt="Ticket"
            $size={90}
            $flip={false}
            $hideOnMobile={false}
            $rotation={rotations[5]}
            $offsetX={offsetsX[5]}
            $offsetY={offsetsY[5]}
          />
        </Trees2>
      </Contents>
    </Container>
  );
}
