'use client';

import { Section, mobile } from '@/components';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;

  ${mobile} {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  --width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  background-color: #000000;
  height: 100%;

  ${mobile} {
    position: relative;
    --width: 256px;
  }
`;

const Image = styled(motion.img)`
  width: 196px;
`;

const ImagePadding = styled.div`
  min-width: 256px;
  width: 256px;
  height: 100%;
`;

const TextContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile} {
    text-align: center;
  }
`;

const AboveTitle = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.75;

  ${mobile} {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  color: #ffffff;

  ${mobile} {
    font-size: 32px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin: 16px 0;
`;

const Highlight = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 500;
`;

const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 8px;

  ${mobile} {
    flex-direction: column;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    outline: 1px solid #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const DownloadImageApple = styled.img`
  padding: 10px;
  height: 64px;
`;

const DownloadImageGoogle = styled.img`
  height: 64px;
`;

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const imageContainerVariants = {
  initial: {
    width: 'var(--width)',
  },
  animate: {
    width: '256px',
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function MobileApp() {
  return (
    <Section id="app" style={{ maxWidth: '1000px' }}>
      <Container>
        <ImageContainer
          variants={imageContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 'all' }}
        >
          <Image
            variants={imageVariants}
            src="/img/mobile-app.png"
            alt="Mobile App"
          />
        </ImageContainer>
        <ImagePadding />
        <TextContainer>
          <AboveTitle>Download the official</AboveTitle>
          <Title>Dillo Day 2025 App</Title>
          <Text>
            Get{' '}
            <Highlight color="#F6F2A3">
              important security notifications
            </Highlight>
            ,{' '}
            <Highlight color="#FFB1CD">
              view the full lineup and schedule with upcoming artist
              notifications
            </Highlight>
            , <Highlight color="#FFFFFF">explore the event map</Highlight>, and{' '}
            <Highlight color="#93c5fd">
              easily access Dillo Day resources
            </Highlight>{' '}
            right from your mobile device! This app is for all attendees and is
            highly recommend for everyone, as important information will be
            shared.
          </Text>
          <DownloadContainer>
            <DownloadButton
              href="https://apps.apple.com/us/app/dillo-day-2025/id6745717280"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadImageApple
                src="/img/app-store.svg"
                alt="Apple App Store"
              />
            </DownloadButton>
            <DownloadButton
              href="https://play.google.com/store/apps/details?id=com.dilloday.app2024"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadImageGoogle
                src="/img/google-play.png"
                alt="Google Play"
              />
            </DownloadButton>
          </DownloadContainer>
        </TextContainer>
      </Container>
    </Section>
  );
}
