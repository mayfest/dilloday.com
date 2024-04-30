import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobile } from '.';
import { useEffect, useRef } from 'react';

const Button = styled(motion.button)<{ $selected: boolean }>`
  font-size: 24px;
  padding: 4px;
  font-weight: 700;

  color: #c084fc;

  &:hover {
    color: #e9d5ff;
  }

  &:active {
    color: #f3e8ff;
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

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

interface SlideButtonProps {
  listRef: React.RefObject<HTMLDivElement>;
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function SlideButton({
  listRef,
  selected,
  onClick,
  children,
}: SlideButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected && listRef.current && ref.current) {
      const list = listRef.current;
      const selected = ref.current;
      list.scrollTo({
        behavior: 'smooth',
        left:
          selected.offsetLeft + selected.offsetWidth / 2 - list.offsetWidth / 2,
      });
    }
  }, [selected, ref, listRef]);

  return (
    <Button
      ref={ref}
      $selected={selected}
      onClick={onClick}
      variants={variants}
    >
      {children}
    </Button>
  );
}
