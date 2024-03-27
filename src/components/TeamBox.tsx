// components/TeamBox.tsx
'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Team box
const TB = styled(motion.button)<{ backgroundImage: string }>`
  text-align: center;
  aspect-ratio: 1/1;
  padding: 0px;
  border: none;
  margin: 0px;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'image not found'};
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.98);
  }
  width: 100%;
  height: 100%;
`;

// Text
const Text = styled.h1`
  color: white;
  text-shadow:
    -1px 1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

interface TeamBoxProp {
  name: string;
  image: string;
  onClick: () => void;
}

const TeamBox: React.FC<TeamBoxProp> = ({ name, image, onClick }) => {
  return (
    <TB backgroundImage={image} onClick={onClick}>
      {image ? <Text>{name}</Text> : <Text>{name} background</Text>}
    </TB>
  );
};

export default TeamBox;
