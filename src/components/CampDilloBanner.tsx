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
  height: 80px;
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
            src="/img/tree-1.png"
            alt="Tree"
            $size={120}
            $flip={false}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/img/tree-2.png"
            alt="Tree"
            $size={100}
            $flip={false}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/img/tree-1.png"
            alt="Tree"
            $size={80}
            $flip={false}
            $hideOnMobile={true}
          />
        </Trees>
        <Campfire>
          <CampfireImage src="/img/campfire.png" alt="Campfire" />
        </Campfire>
        <Trees>
          <TreeImage
            src="/img/tree-1.png"
            alt="Tree"
            $size={80}
            $flip={true}
            $hideOnMobile={true}
          />
          <TreeImage
            src="/img/tree-2.png"
            alt="Tree"
            $size={100}
            $flip={true}
            $hideOnMobile={false}
          />
          <TreeImage
            src="/img/tree-1.png"
            alt="Tree"
            $size={120}
            $flip={true}
            $hideOnMobile={false}
          />
        </Trees>
      </Contents>
    </Container>
  );
}
