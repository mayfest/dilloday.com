'use client';
import { Section, mobile } from '@/components';
import CampDilloBanner from '@/components/CampDilloBanner';
import FAQSection from '@/components/FAQSection';
import Step from '@/components/Step';
import { wristbandDistribution } from '@/lib/wristband';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import RedTicket from '@/components/icons/red-ticket';
import styled from 'styled-components';

const Container = styled.div`
  background: #173885;
  box-shadow: 0 4px 20px #173885;
  border-radius: 16px;
  padding: 16px;
  color: #f0e9d3;
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: #f6f2a3;
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

const IconWrapper = styled.div`
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  // color: #d8b4fe;
  // background: red;
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
  color: #f6f2a3;
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
  background-color: #f0e9d3;
  border: 2px solid #f0e9d3;
  border-radius: 8px;
  color: #13381f;
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
    background-color: #13381f;
    color: #f0e9d3;

    svg {
      transform: translateX(4px);
    }
  }
`;

const FAQ = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQContents = styled.div``;

const FAQTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #f6f2a3;
`;

const FAQText = styled.p`
  margin: 8px 0;
  text-align: left;
  font-size: 14px;
`;

const FAQList = styled.ol`
  font-size: 12px;
  margin: 8px 0;
  text-align: left;
`;

const List = styled.ul`
  list-style-type: disc;
`;

const Item = styled.li`
  margin-left: 32px;
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

export default function EventInformation() {
  return (
    <Section id="know-before-you-go">
      <IconWrapper>
        <RedTicket />
      </IconWrapper>
      <Container>
        <Title> Dillo Day 53: Know Before You Go 🎡</Title>
        <Contents>
          <Step
            step="1"
            title="Know what the security procedures look like."
            line
          >
            <Text>
              Make sure you know what you can and cannot bring to Dillo Day.
            </Text>
            <FAQ>
              <FAQContents>
                <FAQSection title="Metal Detection">
                  <FAQText>
                    Attendees will enter through the main entrance of the Dillo
                    Village, located on the East Lawn of Norris. All attendees
                    will pass through metal detecting wands upon entrance, and
                    guests who are unable to pass through metal detectors for
                    medical reasons may request to be screened separately in a
                    private setting. All bags will be searched. Permitted items
                    include empty plastic water bottles, sunscreen
                    (non-aerosol), and compact blankets, sheets, and towels.
                    Please allow more time for entry due to these security
                    measures.
                  </FAQText>
                  <FAQText>
                    Attendees who would like to request a separate screening, to
                    request other accommodations for the screening process, or
                    to ask questions about the screening process generally, can
                    contact{' '}
                    <Link href="mailto:dilloopsforce@gmail.com">
                      dilloopsforce@gmail.com
                    </Link>{' '}
                    or call <Link href="tel:8474673719">847-467-3719</Link>.
                  </FAQText>
                </FAQSection>
                <FAQSection title="Bag Policy">
                  <FAQText>
                    While certain bags are permitted within the festival we
                    highly encourage those who do not need a bag to leave them
                    at home. Individuals may bring in one (1) small personal
                    bag, no bigger than a typical backpack. Examples include
                    purses, drawstring bags, or camelbacks. Bigger bags will not
                    be allowed into the festival. All bags will be searched by
                    security prior to entering the festival. For questions, send
                    an email to{' '}
                    <Link href="mailto:dilloopsforce@gmail.com">
                      dilloopsforce@gmail.com
                    </Link>
                    .
                  </FAQText>
                </FAQSection>
                <FAQSection title="Permitted and Prohibited Items">
                  <FAQText>Permitted Items</FAQText>
                  <List>
                    <Item>
                      <FAQText>Empty water bottles</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Sunscreen</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Towels</FAQText>
                    </Item>
                  </List>
                  <FAQText>Prohibited Items</FAQText>
                  <List>
                    <Item>
                      <FAQText>
                        Blankets and Sheets (unless for medical reasons)
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>Metal water bottles</FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Skateboards, scooters, bikes, and other personal
                        vehicles
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>Water balloons or water guns</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Any aerosol</FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Coolers (exceptions can be made for medical use)
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Drones, remote-controlled aircraft, or other unstaffed
                        aerial vehicles and flying objects
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>Hammocks</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Glass containers</FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Illegal or illicit substances or drug paraphernalia
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>Outside beverages (including alcohol)</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Umbrellas</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Pets (excluding service animals)</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Tents or shade-making devices</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Fireworks</FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Weapons of any kind (firearms, knives, etc.)
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>Pepper spray</FAQText>
                    </Item>
                    <Item>
                      <FAQText>Selfie sticks</FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Any and all professional audio recording equipment
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Professional cameras and professional recording (photo,
                        video, audio) equipment (NO large professional
                        detachable zoom lenses, stands, monopods, tripods,
                        attachment sticks (selfie sticks), or other commercial
                        equipment).
                      </FAQText>
                    </Item>
                    <Item>
                      <FAQText>
                        Unauthorized/unlicensed vendors are not allowed. No
                        unauthorized solicitation and materials including
                        handbills, flyers, stickers, beach balls, giveaways,
                        samples, etc.
                      </FAQText>
                    </Item>
                  </List>
                </FAQSection>
              </FAQContents>
            </FAQ>
          </Step>
          <Step step="2" title="Know where to go." line>
            <Text>
              Enter on the <Bold>East Lawn of Norris</Bold>, and exit up north.
              Follow posted signs. Find a map on the app.
            </Text>
          </Step>
          <Step step="3" title="Have the information on hand." line>
            <Text>
              Download the <Link href="#app">Dillo Day mobile app</Link>{' '}
              (available on{' '}
              <Link
                href="https://apps.apple.com/us/app/dillo-day-2024/id6502626702"
                target="_blank"
                rel="noreferrer"
              >
                iOS
              </Link>{' '}
              and{' '}
              <Link
                href="https://play.google.com/store/apps/details?id=com.dilloday.app2024"
                target="_blank"
                rel="noreferrer"
              >
                Android
              </Link>
              ) and enable notifications to stay updated on the latest security
              procedures, view an event schedule and map, and more!
            </Text>
            <ButtonContainer>
              <Button href="#app">
                <span>Download the App</span>
                <ArrowRightIcon />
              </Button>
            </ButtonContainer>
          </Step>
          <Step step="4" title="See you at Camp Dillo!">
            <Text>
              <Bold>See you at the Northwestern Lakefill today!</Bold> Until
              then, grab some of our official merchandise for you and your
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
