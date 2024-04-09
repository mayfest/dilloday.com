// components/TeamBox.tsx
'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mobile } from '.';

const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Team box
const TB = styled(motion.button)<{
  backgroundImage: string;
  $selected?: boolean;
}>`
  text-align: center;
  aspect-ratio: 1/1;
  padding: 0px;
  border: none;
  margin: 0px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  cursor: pointer;
  outline: 2px solid transparent;
  position: relative;

  transition: outline-color 150ms;
  &:hover {
    outline-color: #ffffff;
  }

  ${(props) =>
    props.$selected &&
    `
    outline-color: #ffffff;
  `}

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px;
`;

const TextContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  padding: 4px 8px;
  border-radius: 8px;
`;

// Text
const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  color: white;

  ${mobile} {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 16px;
  background: #ffffff;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

interface TeamBoxProp {
  name: string;
  image: string;
  selected?: boolean;
  onClick: () => void;
}

export function TeamBox({ name, image, selected, onClick }: TeamBoxProp) {
  return (
    <TB
      backgroundImage={image}
      $selected={selected}
      onClick={onClick}
      variants={variants}
    >
      <TextContainer>
        <Text>{name}</Text>
      </TextContainer>
      {selected && <Line />}
    </TB>
  );
}

export default TeamBox;
