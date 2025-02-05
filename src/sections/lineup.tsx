'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import type { Artist, Stage } from '@/types/festival';
import ArtistDetails from '@/components/artist-details';

const TabsContainer = styled.div`
  width: 100%;
`;

const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const TabTrigger = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${(props) => (props.isActive ? 'white' : 'transparent')};
  color: ${(props) => (props.isActive ? 'black' : 'white')};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: ${(props) =>
      props.isActive ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const TabContent = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

// Custom Button Component
const StyledButton = styled.button`
  padding: 8px 16px;
  border: 2px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
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

const DateText = styled.h2`
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.1em;
`;

const TitleText = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  @media (min-width: 640px) {
    font-size: 8rem;
  }
`;

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
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const ArtistRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(31, 41, 55);
  padding: 1rem 0;
`;

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

const HeadlinerSection = styled.div`
  margin-top: 5rem;
  > h2 {
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const HeadlinerImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.5rem;
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
  > h3 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export default function FestivalSchedule() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Main Stage');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stages: Stage[] = [
    {
      name: 'Main Stage',
      schedule: [
        {
          time: '2:00 PM',
          artist: 'Opening Act',
          duration: '45 min',
          genre: 'Indie Rock',
          description:
            'An emerging indie rock band known for their energetic performances and catchy melodies.',
          image: '/placeholder.svg?height=400&width=400',
          socialLinks: {
            spotify: 'https://spotify.com',
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
          },
        },
        {
          time: '3:00 PM',
          artist: 'Rising Star',
          duration: '45 min',
          genre: 'Pop',
          description:
            'A breakthrough artist of the year with multiple chart-topping singles.',
          image: '/placeholder.svg?height=400&width=400',
          socialLinks: {
            spotify: 'https://spotify.com',
            instagram: 'https://instagram.com',
          },
        },
      ],
    },
    {
      name: 'FMO Stage',
      schedule: [
        {
          time: '2:30 PM',
          artist: 'Local Talent',
          duration: '45 min',
          genre: 'Folk',
          description:
            'A beloved local artist bringing soulful folk tunes to the FMO stage.',
          image: '/placeholder.svg?height=400&width=400',
          socialLinks: {
            spotify: 'https://spotify.com',
            instagram: 'https://instagram.com',
          },
        },
        {
          time: '3:30 PM',
          artist: 'Electronic Duo',
          duration: '45 min',
          genre: 'Electronic',
          description:
            'A dynamic duo pushing the boundaries of electronic music.',
          image: '/placeholder.svg?height=400&width=400',
          socialLinks: {
            spotify: 'https://spotify.com',
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
          },
        },
      ],
    },
  ];

  const headliner: Artist = {
    time: '9:30 PM',
    artist: 'HEADLINER',
    duration: '90 min',
    genre: 'Multi-Genre',
    description:
      'The most anticipated act of the night, known for their groundbreaking performances.',
    image: '/placeholder.svg?height=800&width=1200',
    socialLinks: {
      spotify: 'https://spotify.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  };

  return (
    <Container>
      <InnerContainer>
        <HeroSection>
          <div>
            <DateText>05.17.25</DateText>
            <TitleText>DILLO DAY</TitleText>
          </div>
        </HeroSection>

        <AnimatePresence>
          {isVisible && (
            <ScheduleContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <TabsContainer>
                <TabList>
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
                      <div>
                        {stage.schedule.map((act, index) => (
                          <ArtistButton
                            key={index}
                            onClick={() => setSelectedArtist(act)}
                          >
                            <ArtistRow>
                              <ArtistInfo>
                                <p>{act.artist}</p>
                                <p>{act.duration}</p>
                              </ArtistInfo>
                              <TimeText>{act.time}</TimeText>
                            </ArtistRow>
                          </ArtistButton>
                        ))}
                      </div>
                    </div>
                  </TabContent>
                ))}
              </TabsContainer>
            </ScheduleContainer>
          )}
        </AnimatePresence>

        <HeadlinerSection>
          <h2>Headliner Spotlight</h2>
          <HeadlinerImageContainer>
            <HeadlinerImage
              src={headliner.image || '/placeholder.svg'}
              alt={headliner.artist}
            />
            <HeadlinerOverlay>
              <HeadlinerContent>
                <h3>{headliner.artist}</h3>
                <p>
                  {headliner.time} | {headliner.duration}
                </p>
                <StyledButton onClick={() => setSelectedArtist(headliner)}>
                  Learn More
                </StyledButton>
              </HeadlinerContent>
            </HeadlinerOverlay>
          </HeadlinerImageContainer>
        </HeadlinerSection>

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
