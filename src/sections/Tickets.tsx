'use client';
import { Section, mobile } from '@/components';
import CampDilloBanner from '@/components/CampDilloBanner';
import Step from '@/components/Step';
import { wristbandDistribution } from '@/lib/wristband';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';

const Container = styled.div`
  background: #f0e9d3;
  box-shadow: 0 4px 20px #f0e9d3;
  border-radius: 16px;
  padding: 16px;
  color: #13381f;
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: #d1555a;
`;

const Contents = styled.div`
  padding: 16px;
`;

const Text = styled.p``;

const Bold = styled.span`
  font-weight: 600;
`;

const Link = styled.a`
  color: #459eca;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Times = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin: 32px 0;
  font-size: 16px;
`;

const TimesTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #d1555a;
`;

const TimesLocation = styled(Link)`
  text-align: center;
  display: block;
`;

const TimesLocationName = styled.p`
  font-size: 16px;
`;

const TimesLocationAddress = styled.p`
  font-size: 14px;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;

  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const TimeDate = styled.p`
  text-align: left;
  font-weight: 600;
`;

const TimeTime = styled.p`
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  gap: 8px;

  ${mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  background-color: #13381f;
  border: 2px solid #13381f;
  border-radius: 8px;
  color: #f0e9d3;
  padding: 4px 16px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  gap: 8px;
  transition: all 200ms;

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 3px;
    transition: transform 200ms;
  }

  &:hover {
    background-color: #f0e9d3;
    color: #13381f;

    svg {
      transform: translateX(4px);
    }
  }
`;

export default function Tickets() {
  return (
    <Section id="tickets">
      <Container>
        <Title>🏕️ Dillo Day 52 tickets now available! 🏕️</Title>
        <Contents>
          <Step
            step="1"
            title="Acknowledge the Dillo Day event terms and conditions."
            line
          >
            <Text>
              Read the <Link href="#terms">Dillo Day Terms and Conditions</Link>{' '}
              before purchasing your tickets. Failure to abide by the terms may
              result in ticket revocation or removal from the event.
            </Text>
            <ButtonContainer>
              <Button href="#terms">
                <span>Read Terms and Conditions</span>
                <ArrowRightIcon />
              </Button>
            </ButtonContainer>
          </Step>
          <Step step="2" title="Register for your wristbands." line>
            <Text>
              Visit the{' '}
              <Link
                href="https://nbo.universitytickets.com/w/event.aspx?id=2240"
                target="_blank"
                rel="noreferrer"
              >
                Dillo Day 2024 event on NBO
              </Link>{' '}
              to register for your wristband by <Bold>May 13, 2024</Bold>.
              Northwestern undergraduate students may register for free.
              Northwestern undergraduate students can also choose to purchase 1
              guest wristband. Northwestern graduate students, Evanston
              community members, and Northwestern alumni can choose to purchase
              a wristband.{' '}
              <Bold>
                Please save the 6-character confirmation code from the order for
                distribution.
              </Bold>
            </Text>
            <ButtonContainer>
              <Button
                href="https://nbo.universitytickets.com/w/event.aspx?id=2240"
                target="_blank"
                rel="noreferrer"
              >
                <span>Order Wristbands</span>
                <ArrowRightIcon />
              </Button>
            </ButtonContainer>
          </Step>
          <Step step="3" title="Pick up your wristbands before Dillo Day." line>
            <Text>
              Northwestern undergraduate students, graduate students, faculty,
              staff, and Evanston residents must pick up their wristbands in
              person by <Bold>May 17, 2024</Bold>.{' '}
              <Bold>
                A valid Wildcard or government-issued ID matching the name on
                the order must be presented along with your 6-character
                confirmation code.
              </Bold>{' '}
              Northwestern undergraduate students and graduate students are also
              responsible for picking up their registered guest's wristband
              during distribution and must have a photo of the guest's
              government-issued ID available. See wristband distribution terms
              in the <Link href="#terms">Dillo Day Terms and Conditions</Link>{' '}
              for more information.
            </Text>
            <Times>
              <TimesTitle>Distribution Times</TimesTitle>
              <TimesLocation
                href={wristbandDistribution.location.directions}
                target="_blank"
                rel="noreferrer"
              >
                <TimesLocationName>
                  {wristbandDistribution.location.name}
                </TimesLocationName>
                <TimesLocationAddress>
                  {wristbandDistribution.location.address}
                </TimesLocationAddress>
              </TimesLocation>
              {wristbandDistribution.times.map(({ date, time }, i) => (
                <Time key={`wd-${i}`}>
                  <TimeDate>{date}</TimeDate>
                  <TimeTime>{time}</TimeTime>
                </Time>
              ))}
            </Times>
            <ButtonContainer>
              <Button
                href={wristbandDistribution.location.directions}
                target="_blank"
                rel="noreferrer"
              >
                <span>Directions to Pickup</span>
                <ArrowRightIcon />
              </Button>
            </ButtonContainer>
          </Step>
          <Step step="4" title="See you at Camp Dillo!">
            <Text>
              See you at the Northwestern Lakefill on <Bold>May 18, 2024</Bold>!
              Until then, grab some of our official merchandise for you and your
              friends at{' '}
              <Link href="https://store.dilloday.com">store.dilloday.com</Link>!
            </Text>
          </Step>
        </Contents>
        <CampDilloBanner />
      </Container>
    </Section>
  );
}
