'use client';

import { Section } from '@/components';
import { sponsors } from '@/lib/sponsors';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

const SponsorBox = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;

const Image = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin: 5px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Sponsors() {
  // const images = [
  //   'https://i.imgur.com/1XX6br4.png',
  //   'https://i.imgur.com/7kqelSa.png',
  //   'https://i.imgur.com/cP2Pcpr.jpeg',
  //   'https://i.imgur.com/DRCdVqT.png',
  //   // uss
  //   'https://i.imgur.com/tFmJ0w0.png',
  //   'https://i.imgur.com/K3En3pq.jpeg',
  //   'https://i.imgur.com/CWFdNWW.jpeg',
  //   'https://i.imgur.com/90428WT.png',
  //   'https://i.imgur.com/1jRadUc.jpeg',
  //   // army,
  //   'https://i.imgur.com/mUpjDFB.jpeg',
  //   // intern queen
  //   'https://i.imgur.com/tUILGZR.png',
  //   'https://i.imgur.com/5I9AVEq.png',
  //   'https://i.imgur.com/TywQUD9.jpeg',
  //   'https://i.imgur.com/AHWjwxU.jpeg',
  //   'https://i.imgur.com/oa3x9S3.png',
  //   'https://i.imgur.com/i30HHTe.png',
  //   'https://i.imgur.com/p6WX1o5.png',
  //   'https://i.imgur.com/jO958p0.png',
  //   // mustard's
  // ];

  return (
    <Section>
      <Title> SPONSORS</Title>
      <Text>
        {' '}
        The Dillo Day festival experience not only consists of the main stage,
        where major acts such as Kendrick Lamar, Steve Aoki, and Chance the
        Rapper have performed in the past​, but also features the Dillo Village.
        ​The Dillo Village​ ​is ​an immersive ​section of the​ festival grounds
        on the shore of Lake Michigan consisting of a second stage featuring
        local Chicago artists as well as food trucks, interactive art exhibits,
        and additional programming. This space allows our corporate partners and
        sponsors to meaningfully and directly engage with our 12,000 largely
        millennial festival attendees. The Dillo Village is the heartbeat of our
        festival, a thriving space full of energy and excitement where
        festivalgoers truly come together as a community and celebrate the start
        of summer in Chicago. We’d love to work with you in creating a standout,
        custom experience. Please reach out to us at
        corporatedilloday@northwestern.edu to have your company be a part of
        Dillo Day 2024.
      </Text>
      <ImagesContainer>
        {sponsors.map((sponsor, index) => (
          <SponsorBox key={index} color={sponsor.color}>
            <Image src={sponsor.logo} alt={`Sponsor ${index + 1}`} />
          </SponsorBox>
        ))}
      </ImagesContainer>
    </Section>
  );
}
