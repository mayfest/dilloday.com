'use client';

import styled from 'styled-components';
import { Section } from '@/components';
import { sponsors } from '@/lib/sponsors';

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
`;

const TextContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto 32px auto;
  font-size: 14px;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  text-align: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    width: 220px;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  background-color: white;
  padding: 16px;
`;

const Name = styled.div`
  margin-top: 12px;
  font-weight: 600;
`;

const Link = styled.a`
  display: block;
  font-size: 12px;
  margin-top: 4px;
  color: #d8b4fe;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default function PastSponsorsPage() {
  return (
    <Section id="past-sponsors">
      <Title>Past Dillo Day Sponsors</Title>
      <TextContainer>
        We are incredibly grateful for the brands who have supported Dillo Day
        in past years. These sponsors have helped us build the nation's largest
        student-run music festival — thank you!
      </TextContainer>
      <Grid>
        {sponsors.map((sponsor) => (
          <CardWrapper key={sponsor.name}>
            <Card>
              <Link
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo src={sponsor.logo} alt={sponsor.name} />
              </Link>
              <Name>{sponsor.name}</Name>
              <Link
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website →
              </Link>
            </Card>
          </CardWrapper>
        ))}
      </Grid>
    </Section>
  );
}
