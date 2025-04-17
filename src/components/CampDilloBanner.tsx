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
}>`
  height: ${({ $size }) => $size}px;
  transform: ${({ $flip }) => ($flip ? 'scaleX(-1)' : 'none')};

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

export default function CampDilloBanner() {
  return (
    <Container>
      <Contents>
        <Trees>
          <TreeImage
            src="/carnival-icons/popcorn.png"
            alt="Tree"
            $size={90}
            $flip={true}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/carnival-icons/cottoncandy.png"
            alt="Tree"
            $size={80}
            $flip={true}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/carnival-icons/apples.png"
            alt="Tree"
            $size={70}
            $flip={true}
            $hideOnMobile={true}
          />
        </Trees>
        <Campfire>
          <CampfireImage
            src="/carnival-icons/ferriswheel.png"
            alt="Ferris Wheel Icon"
          />
        </Campfire>
        <Trees>
          <TreeImage
            src="/carnival-icons/apples.png"
            alt="Tree"
            $size={70}
            $flip={false}
            $hideOnMobile={true}
          />
          <TreeImage
            src="/carnival-icons/cottoncandy.png"
            alt="Tree"
            $size={80}
            $flip={false}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/carnival-icons/popcorn.png"
            alt="Tree"
            $size={90}
            $flip={false}
            $hideOnMobile={false}
          />
        </Trees>
      </Contents>
    </Container>
  );
}
