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

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 32px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const SponsorBox = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;

const Image = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  margin: 5px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Sponsors() {
  return (
    <Section>
      <Title>Our Sponsors</Title>
      <TextContainer>
        <Text>
          Dillo Day is the largest student-run music festival in the country,
          bringing together over 12,000 college students for a day of live
          music, food, and immersive experiences on the shore of Lake Michigan.
          Beyond our main stage—where past artists like Kendrick Lamar, Steve
          Aoki, and Chance the Rapper have performed—the festival features Dillo
          Village.
          <br />
          <br />
          Dillo Village is a dynamic space with a second stage showcasing local
          Chicago artists, interactive art installations, and a variety of food
          vendors. It offers sponsors and corporate partners a unique
          opportunity to engage directly with a vibrant, college-aged audience
          (18-22 years old) through activations, giveaways, and brand
          experiences.
          <br />
          <br />
          We'd love to collaborate with you to create an engaging, standout
          presence at Dillo Day 2024. To explore sponsorship opportunities,
          please reach out to us at <strong>corporate@dilloday.com</strong>.
        </Text>
      </TextContainer>
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
