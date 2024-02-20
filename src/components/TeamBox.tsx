//  components/TeamBox.tsx
'use client';
import styled from 'styled-components';

// Team box
const TB = styled.div<{ backgroundImage: string }>`
  text-align: center;
  aspect-ratio: 1/1;
  border: 2px solid white;
  padding: 0px;
  margin: 0px;
  background-image: ${(props) => props.backgroundImage ? `url(${props.backgroundImage})` : 'image not found'};
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border-color: purple;
  }
`;

// Image alt text
const AT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* You can adjust the color to contrast with your background */
`;

// Text
const Text = styled.h1`
  text-shadow: -1px 1px 0 #000,
               1px 1px 0 #000,
               1px -1px 0 #000,
               -1px -1px 0 #000;
`

interface TeamBoxProp {
  name: string;
  image: string;
}

const TeamBox: React.FC<TeamBoxProp> = ({ name, image }) => {
  return (
    <TB backgroundImage={image}>
      {image ? (
        <Text>{name}</Text>
      ) : (
        <AT>{name} background</AT>
      )}
    </TB>
  );
};

export default TeamBox;
