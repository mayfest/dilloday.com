'use client';
import { Section, mobile } from '@/components';
import CampDilloBanner from '@/components/CampDilloBanner';
import FAQSection from '@/components/FAQSection';
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

const FAQ = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

const FAQContents = styled.div``;

const FAQTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #d1555a;
`;

const FAQText = styled.p`
  margin: 8px 0;
  text-align: left;
  font-size: 12px;
`;

const FAQList = styled.ol`
  font-size: 12px;
  margin: 8px 0;
  text-align: left;
`;

const FAQBold = styled.span`
  font-weight: 600;
`;

const FAQEmail = styled.p`
  margin: 8px 0;
  text-align: right;
  font-size: 14px;
  opacity: 0.75;
`;

export default function Tickets() {
  return (
    <Section id="id-tickets">
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
        <FAQ id="id-tickets/faq">
          <FAQTitle>Wristband FAQ</FAQTitle>
          <FAQContents>
            <FAQSection title="What do students need to pick up their own wristband?">
              <FAQText>
                A student needs to have made a reservation, which should be
                pulled up, and their Wildcard.
              </FAQText>
            </FAQSection>
            <FAQSection title="What does a student need to pick up for their non-Northwestern guest?">
              <FAQText>
                To pick up for their non-Northwestern guest, they need the
                reservation, their own Wildcard, and their guest's ID (or a
                picture of their ID).
              </FAQText>
            </FAQSection>
            <FAQSection title="What should I do if I'm struggling to log into NBO, the website is glitching, or I am having some other kind of software difficulty?">
              <FAQText>
                We have heard of a situation in which individuals are having
                trouble logging into the NBO site. We recommend trying the
                following:
              </FAQText>
              <FAQText>1. Use another browser to sign in</FAQText>
              <FAQText>2. Log in, refresh, log in again</FAQText>
              <FAQText>3. Try signing in on a different device</FAQText>
              <FAQText>4. Use incognito mode on your browser</FAQText>
              <FAQText>
                If none of these solutions work, we ask that you email{' '}
                <Link href="mailto:norrisboxoffice@northwestern.edu">
                  norrisboxoffice@northwestern.edu
                </Link>{' '}
                with your dilemma.
              </FAQText>
            </FAQSection>
            <FAQSection title="I didn't get a confirmation email. What should I do?">
              <FAQText>
                First, check your spam folder. If it is not there, please go to
                the help desk.
              </FAQText>
            </FAQSection>
            <FAQSection title="Can a student pick up for another student?">
              <FAQText>
                Absolutely not, every student needs to come in person.
              </FAQText>
            </FAQSection>
            <FAQSection title="My guest cannot make it. Can they get a refund?">
              <FAQText>Please email NBO to request a refund.</FAQText>
            </FAQSection>
            <FAQSection title="My original guest cannot make it. Can I transfer the wristband?">
              <FAQText>
                No, guest wristbands can only be released for the registered
                guest.
              </FAQText>
            </FAQSection>
            <FAQSection title="Can a student pick up a wristband on the day of Dillo instead?">
              <FAQText>
                Only Alumni can pick up the day of. Otherwise, to receive a
                wristband, you MUST come during the distribution hours{' '}
                <FAQBold>BEFORE</FAQBold> the day of. In addition, replacement
                wristbands will not be available after the 17th.
              </FAQText>
            </FAQSection>
            <FAQSection title="I just lost my wristband. Can I get another one?">
              <FAQText>
                Yes, but you must order a replacement one on NBO first. The
                option to purchase a replacement will close on May 16th.
              </FAQText>
            </FAQSection>
            <FAQSection title="I work full time. When can I pick up my wristband?">
              <FAQText>
                In order to accommodate those working full time, we have added
                distribution hours to both Saturday May 11th and Sunday May
                12th. Additionally, on Tuesday May 14th and Thursday May 16th
                distribution will be open after working hours.
              </FAQText>
            </FAQSection>
            <FAQSection title="Can I be granted an exception to the rules?">
              <FAQText>
                <FAQBold>
                  Requests for exception must be sent to{' '}
                  <Link href="mailto:dilloopsforce@gmail.com">
                    dilloopsforce@gmail.com
                  </Link>{' '}
                  and will only be approved with significant evidence and
                  circumstances.
                </FAQBold>
              </FAQText>
            </FAQSection>
          </FAQContents>
          <FAQEmail>
            Have a question that isn't answered here? Reach out to{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>
            .
          </FAQEmail>
        </FAQ>
        <CampDilloBanner />
      </Container>
    </Section>
  );
}
