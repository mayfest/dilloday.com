import { Fragment } from 'react';
import { HistoricalEvent } from '@/lib/history';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobile } from '.';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
  z-index: 100;
`;

const Container = styled(motion.div)`
  position: fixed;
  inset: 64px;

  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  z-index: 101;

  ${mobile} {
    flex-direction: column;
    width: 90%;
    inset: unset;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;

  ${mobile} {
    width: 100%;
  }
`;

const Information = styled(motion.div)`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 16px;
  background: rgba(50, 50, 50, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 8px;

  ${mobile} {
    bottom: calc(100% + 16px);
    top: unset;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;

  ${mobile} {
    font-size: 18px;
  }
`;

const Description = styled.p`
  color: #f0f0f0;
  font-size: 16px;
  max-width: 480px;

  ${mobile} {
    font-size: 12px;
    max-width: 240px;
  }
`;

const Featured = styled(motion.div)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 8px 16px;
  background: rgba(50, 50, 50, 0.5);
  color: #ffffff;
  backdrop-filter: blur(12px);
  border-radius: 8px;
  text-align: right;

  ${mobile} {
    top: calc(100% + 16px);
    bottom: unset;
  }
`;

const FeaturedTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  opacity: 0.75;

  ${mobile} {
    font-size: 12px;
  }
`;

const FeaturedItem = styled.p`
  font-size: 18px;
  font-weight: 700;

  ${mobile} {
    font-size: 14px;
  }
`;

const CloseButton = styled(motion.button)`
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
    background-color: #202020;
  }

  &:active {
    background-color: #323232;
  }

  svg {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
  }
`;

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.5,
  },
};

const slideLeftVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    },
  },
};

const slideRightvariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    },
  },
};

const closeButtonVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
    },
  },
};

interface PastDilloInfoProps {
  i: number;
  item: HistoricalEvent;
  onClose: () => void;
}

export default function PastDilloInfo({
  i,
  item,
  onClose,
}: PastDilloInfoProps) {
  return (
    <>
      <Backdrop
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="initial"
        onClick={() => onClose()}
      />
      <Container
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <Image
          layoutId={`history-slide-${i}`}
          src={item.image}
          alt={`Dillo Day ${item.year}`}
        />
        <Information
          variants={slideLeftVariants}
          initial="initial"
          animate="animate"
        >
          <Title>Dillo Day {item.year}</Title>
          <Description>{item.description}</Description>
        </Information>
        <Featured
          variants={slideRightvariants}
          initial="initial"
          animate="animate"
        >
          <FeaturedTitle>EVENT DATE</FeaturedTitle>
          <FeaturedItem>{item.date}</FeaturedItem>
          {item.artists?.map((stage, i) => (
            <Fragment key={`stage-${i}`}>
              <FeaturedTitle>{stage.stage}</FeaturedTitle>
              {stage.names.map((name, j) => (
                <FeaturedItem key={`stage-${i}-${j}`}>{name}</FeaturedItem>
              ))}
            </Fragment>
          ))}
        </Featured>
        <CloseButton
          variants={closeButtonVariants}
          initial="initial"
          animate="animate"
          onClick={() => onClose()}
        >
          <XMarkIcon />
        </CloseButton>
      </Container>
    </>
  );
}
