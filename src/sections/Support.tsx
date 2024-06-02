'use client';
import { Section, mobile } from '@/components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled(motion.div)`
  font-weight: 700;
  text-align: left;
  font-size: 48px;
  margin: 32px 0;
  display: flex;
  gap: 8px;
  justify-content: center;

  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleTextLeft = styled(motion.p)`
  font-size: 48px;
  text-align: left;
  color: #ffffff;

  ${mobile} {
    font-size: 28px;
  }
`;

const TitleTextRight = styled(motion.p)`
  font-size: 44px;
  text-align: left;

  a {
    color: #c084fc;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -8px;
      left: -4px;
      width: calc(100% + 8px);
      height: calc(100% + 16px);
      z-index: -1;
      background-color: #ffffff;
      transition:
        transform 300ms ease,
        opacity 300ms ease;
      transform: scaleX(0);
      transform-origin: 100% 50%;
      border-radius: 8px;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }

    &:active::after {
      opacity: 0.8;
    }
  }

  ${mobile} {
    font-size: 28px;
  }
`;

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Contact() {
  return (
    <Section
      id="id-contact"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Title>
        <TitleTextLeft variants={titleVariants}>Questions?</TitleTextLeft>
        <TitleTextRight variants={titleVariants}>
          <Link
            href="https://support.dilloday.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us.
          </Link>
        </TitleTextRight>
      </Title>
    </Section>
  );
}
