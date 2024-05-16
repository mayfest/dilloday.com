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
  width: 256px;
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

const SocialAboveTitle = styled.p`
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 0.75;
  margin-top: 16px;

  ${mobile} {
    font-size: 12px;
  }
`;

const SocialTitle = styled.p`
  font-size: 28px;
  color: #ffffff;

  ${mobile} {
    font-size: 20px;
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
  opacity: 0.5;
`;

const DownloadPending = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DownloadPendingText = styled.p`
  opacity: 0.75;
  font-size: 12px;
`;

const DownloadPendingSubtext = styled.p`
  opacity: 0.5;
  font-size: 10px;
`;

const Link = styled.a`
  color: #e9d5ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TermsLink = styled.a`
  color: #ffffff;
  opacity: 0.5;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 12px;
    height: 12px;
    stroke-width: 4px;
  }
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
          <Title>Dillo Day 2024 App</Title>
          <Text>
            Get{' '}
            <Highlight color="#fca5a5">
              important security notifications
            </Highlight>
            ,{' '}
            <Highlight color="#86efac">
              view the full lineup and schedule with upcoming artist
              notifications
            </Highlight>
            , <Highlight color="#fde047">explore the event map</Highlight>, and{' '}
            <Highlight color="#93c5fd">
              easily access Dillo Day resources
            </Highlight>{' '}
            right from your mobile device! This app is for all attendees and is
            highly recommend for everyone, as important information will be
            shared.
          </Text>
          <DownloadContainer>
            <DownloadButton href="https://apps.apple.com/us/app/dillo-day-2024/id6502626702">
              <DownloadImageApple
                src="/img/app-store.svg"
                alt="Apple App Store"
              />
            </DownloadButton>
            <DownloadButton>
              <DownloadImageGoogle
                src="/img/google-play.png"
                alt="Google Play"
              />
            </DownloadButton>
            <DownloadPending>
              <DownloadPendingText>
                Google Play Store download is currently pending.
              </DownloadPendingText>
              <DownloadPendingSubtext>
                In the meantime, you can download the app officially from our
                servers.
              </DownloadPendingSubtext>
              <DownloadButton href="https://cdn.dilanxd.net/dillo-day-app-2024-android.apk">
                <DownloadPendingText>Download for Android</DownloadPendingText>
                <ChevronRightIcon />
              </DownloadButton>
            </DownloadPending>
          </DownloadContainer>
          <SocialAboveTitle>
            Don't miss out on this year's social feature
          </SocialAboveTitle>
          <SocialTitle>Dillo Cabin Mates!</SocialTitle>
          <Text>
            Let us analyze your music taste by connecting your Spotify or Apple
            Music account before Dillo Day. In the morning of Dillo Day, we'll
            use your music vibes to match you with another compatible attendee!
          </Text>
          <Text>
            The first 100 people to register will get 15% off their next{' '}
            <Link
              href="https://store.dilloday.com"
              target="_blank"
              rel="noreferrer"
            >
              Dillo Day Store
            </Link>{' '}
            order!{' '}
          </Text>
          <TermsLink href="#terms/dillo-day-mobile-app">
            <span>
              View all details and terms for the Dillo Cabin Mates feature and
              the store giveaway
            </span>
            <ChevronRightIcon />
          </TermsLink>
        </TextContainer>
      </Container>
    </Section>
  );
}
