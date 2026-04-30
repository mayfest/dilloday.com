'use client';

import styled from 'styled-components';
import { Section } from '@/components';
import { sponsors2025 } from '@/lib/sponsors';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #e9d5ff;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background-color 150ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ArrowIcon = styled(ChevronRightIcon)`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
`;

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <Title>Dillo Day 2025 Sponsors</Title>
      <TextContainer>
        Dillo Day is the largest student-run music festival in the country.
        Carnival Dillo 2025 wouldn’t be possible without our incredible
        sponsors. Check them out below!
      </TextContainer>
      <Grid>
        {sponsors2025.map((sponsor) => (
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
      <ButtonContainer>
        <Button href="/past-sponsors/">
          <span>View Full Historical Sponsor List</span>
          <ArrowIcon />
        </Button>
      </ButtonContainer>
    </Section>
  );
}
