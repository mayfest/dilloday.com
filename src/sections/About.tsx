'use client';

import { Section, mobile } from '@/components';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Title = styled(motion.div)`
  font-weight: 600;
  text-align: center;
  font-size: 48px;
  margin: 32px 0;
`;

const TitleText1 = styled.p`
  font-weight: 500;
  font-size: 32px;

  ${mobile} {
    font-size: 24px;
  }
`;

const TitleText1Highlight = styled.span`
  color: #e59baf;
`;

const TitleText2 = styled.p`
  font-weight: 700;
  font-size: 64px;
  color: #d8b4fe;

  ${mobile} {
    font-size: 32px;
  }
`;

const TitleText2Item = styled(motion.span)`
  display: inline-block;
  margin: 0 8px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 32px 0;
  ${mobile} {
    flex-direction: column;
  }
`;

const Text = styled(motion.p)`
  flex: 1;
  font-size: 20px;

  ${mobile} {
    font-size: 16px;
  }
`;

const TextHighlight = styled.span`
  color: #d8b4fe;
  font-weight: 500;
`;

const Video = styled(motion.iframe)`
  width: 480px;
  height: 270px;
  border: none;
  border-radius: 16px;

  ${mobile} {
    width: 320px;
    height: 180px;
  }
`;

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      staggerChildren: 0.15,
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

const textVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
    },
  },
};

const videoContainerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.25,
      delayChildren: 0.5,
    },
  },
};

const videoVariants = {
  initial: { x: 25, y: 25, boxShadow: 'none' },
  animate: {
    x: 0,
    y: 0,
    boxShadow:
      'rgba(192, 132, 252, 0.4) 5px 5px, rgba(192, 132, 252, 0.3) 10px 10px, rgba(192, 132, 252, 0.2) 15px 15px, rgba(192, 132, 252, 0.1) 20px 20px, rgba(192, 132, 252, 0.05) 25px 25px',
    transition: {
      delay: 1.75,
      ease: [0, 0.5, 0.2, 1.0],
    },
  },
};

export default function About() {
  return (
    <Section
      id="id-about"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Title>
        <TitleText1>
          At <TitleText1Highlight>Mayfest Productions</TitleText1Highlight>,
        </TitleText1>
        <TitleText2>
          <TitleText2Item variants={titleVariants}>WE</TitleText2Item>
          <TitleText2Item variants={titleVariants}>DO</TitleText2Item>
          <TitleText2Item variants={titleVariants}>DILLO</TitleText2Item>
          <TitleText2Item variants={titleVariants}>DAY.</TitleText2Item>
        </TitleText2>
      </Title>

      <Contents>
        <Text variants={textVariants}>
          <TextHighlight>Mayfest Productions</TextHighlight> is a student
          organization at Northwestern University that plans and produces the
          nation's largest student-run music festival —{' '}
          <TextHighlight>Dillo Day</TextHighlight>, with over 12,000 festival
          attendees. In addition to the festival, Mayfest hosts and promotes a
          number of other programming events including Battle of the Bands and
          Battle of the DJs.
        </Text>

        <motion.div variants={videoContainerVariants}>
          <Video
            variants={videoVariants}
            title="We Do Dillo Day"
            src="https://player.vimeo.com/video/291397953"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></Video>
        </motion.div>
      </Contents>
    </Section>
  );
}
