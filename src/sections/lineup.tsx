'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { Artist, Stage } from '@/types/festival';
import ArtistDetails from '@/components/artist-details';
import { stages, headliner } from '@/constants/lineup';

interface TabListProps {
  $activeStage: string;
}

const TabsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const TabList = styled.div<TabListProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 24px;
  position: relative;
  max-width: 90%;
  margin: 0 auto 24px auto;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 4px;
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    background: white;
    border-radius: 4px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(
      ${(props) => (props.$activeStage === 'Main Stage' ? '0' : '100%')}
    );
  }
`;

const Note = styled.p`
  padding-top: 1.5rem;
  text-align: center;
  margin: 16px 0;
  font-size: 14px;
  opacity: 0.5;
`;

const TabTrigger = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: ${(props) => (props.isActive ? 'black' : 'white')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  position: relative;
  z-index: 2;
  transition: color 0.15s ease;
`;

const TabContent = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  animation: ${(props) => (props.isActive ? 'fadeIn 1s ease' : 'none')};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 2px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease;
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding-top: 6rem;
`;

const InnerContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const HeroSection = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  > div {
    margin-top: 0.5rem;
  }
`;

const TitleText = motion(styled.h1`
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  @media (min-width: 640px) {
    font-size: 7rem;
  }
  text-shadow:
    0 0 16px rgba(126, 87, 194, 0.4),
    0 0 60px rgba(94, 53, 177, 0.5);
`);

const ScheduleContainer = styled(motion.div)`
  max-width: 42rem;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const StageTitle = styled.h4`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.1em;
`;

const ArtistButton = styled.button`
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const ArtistRow = motion(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(255, 255, 255);
  padding: 1.5rem 0;
`);

const ArtistInfo = styled.div`
  text-align: left;
  > p:first-child {
    font-size: 1.125rem;
    font-weight: 500;
  }
  > p:last-child {
    font-size: 0.875rem;
    color: rgb(156, 163, 175);
  }
`;

const TimeText = styled.p`
  text-align: right;
  font-size: 1.125rem;
  font-weight: 300;
`;

const HeadlinerSection = motion(styled.div`
  margin-top: 10rem;
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
    padding-bottom: 10rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow:
      0 0 16px rgba(126, 87, 194, 0.4),
      0 0 60px rgba(94, 53, 177, 0.5);

    @media (min-width: 640px) {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }
`);

const HeadlinerImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 95%;

  @media (min-width: 640px) {
    max-width: 90%;
  }
`;

const HeadlinerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeadlinerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadlinerContent = styled.div`
  text-align: center;
  width: 90%;
  max-width: 100%;
  padding: 1rem;

  > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 640px) {
      font-size: 1.75rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.25rem;
      white-space: normal;
    }
  }

  > p {
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 640px) {
      font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.25rem;
    }
  }
`;

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const scheduleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const artistRowVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
    },
  },
};

const headlinerVariants = {
  initial: { opacity: 0, scale: 0.85 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export default function FestivalSchedule() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [activeTab, setActiveTab] = useState('Main Stage');

  return (
    <Container id="lineup">
      <InnerContainer>
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <HeroSection>
            <motion.div variants={titleVariants}>
              <TitleText>ARTIST LINEUP</TitleText>
            </motion.div>
          </HeroSection>

          <motion.div
            variants={scheduleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <ScheduleContainer>
              <TabsContainer>
                <TabList $activeStage={activeTab}>
                  {stages.map((stage) => (
                    <TabTrigger
                      key={stage.name}
                      isActive={activeTab === stage.name}
                      onClick={() => setActiveTab(stage.name)}
                    >
                      {stage.name}
                    </TabTrigger>
                  ))}
                </TabList>
                {stages.map((stage) => (
                  <TabContent
                    key={stage.name}
                    isActive={activeTab === stage.name}
                  >
                    <div>
                      <StageTitle>
                        {stage.name.toUpperCase()} SCHEDULE
                      </StageTitle>
                      <motion.div
                        variants={scheduleVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {stage.schedule.map((act, index) => (
                          <ArtistButton
                            key={index}
                            onClick={() => setSelectedArtist(act)}
                          >
                            <ArtistRow
                              variants={artistRowVariants}
                              whileHover="hover"
                              custom={index}
                            >
                              <ArtistInfo>
                                <p>{act.artist}</p>
                                <p>{act.duration}</p>
                              </ArtistInfo>
                              <TimeText>{act.time}</TimeText>
                            </ArtistRow>
                          </ArtistButton>
                        ))}
                      </motion.div>
                    </div>
                  </TabContent>
                ))}
              </TabsContainer>
              <Note>click on an artist to learn more</Note>
            </ScheduleContainer>
          </motion.div>

          <motion.div
            variants={headlinerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <HeadlinerSection>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                WITH SPECIAL GUEST AND HEADLINER
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <HeadlinerImageContainer>
                  <HeadlinerImage
                    src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/c9f7/live/84762960-556c-11ef-83e3-9df5ffa02a25.jpg.webp" // need an image for natasha, filled with generic for now
                    alt={headliner.artist}
                  />
                  <HeadlinerOverlay>
                    <HeadlinerContent>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {headliner.artist}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {headliner.time} | {headliner.duration}
                      </motion.p>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <StyledButton
                          onClick={() => setSelectedArtist(headliner)}
                        >
                          Learn More
                        </StyledButton>
                      </motion.div>
                    </HeadlinerContent>
                  </HeadlinerOverlay>
                </HeadlinerImageContainer>
              </motion.div>
            </HeadlinerSection>
          </motion.div>
        </motion.div>

        {selectedArtist && (
          <ArtistDetails
            artist={selectedArtist}
            isOpen={!!selectedArtist}
            onClose={() => setSelectedArtist(null)}
          />
        )}
      </InnerContainer>
    </Container>
  );
}
