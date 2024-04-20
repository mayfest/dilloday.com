'use client';

import styled from 'styled-components';
import { Section } from '@/components';
import TermsSection from '../components/TermsSection';

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
`;

const Text = styled.p`
  margin: 16px 0;
  text-align: left;
  font-size: 14px;
`;

const List = styled.ul`
  list-style-type: disc;
`;

const Item = styled.li`
  margin-left: 32px;
`;

const Link = styled.a`
  color: #e9d5ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Area = styled.div`
  margin: 32px 0;
`;

const AreaTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 16px 0;
`;

export default function Terms() {
  return (
    <Section id="terms" style={{ maxWidth: '800px' }}>
      <Title>Terms and Conditions</Title>
      <Text>
        Dillo Day strives to create the safest and most comfortable environment
        for all attendees. As such, we are providing a set of guidelines and
        community standards in order to ensure we meet this goal together. To
        have the best Dillo Day experience for the students, guests, artists,
        staff members, and Mayfest members, we have outlined the following
        expectations. If the following expectations are not met, we reserve the
        right to remove individuals from the festival without a refund:
      </Text>
      <List>
        <Item>
          <Text>
            Dillo Day has a zero-tolerance policy for discrimination of any
            kind, including but not limited to discrimination on the basis of
            race, color, religion, sex, gender identity, sexual orientation,
            national origin, age, disability, or genetic information. Attendees
            determined to have engaged in discriminatory behavior face removal
            from the festival.
          </Text>
        </Item>
        <Item>
          <Text>
            Under no circumstances will harassment of any kind towards festival
            attendees, festival staff, Northwestern staff, security, or Mayfest
            members be tolerated and may result in grounds for removal from the
            festival.
          </Text>
        </Item>
        <Item>
          <Text>
            Damage, defacement, destruction, or theft of property, including but
            not limited to festival decor, golf carts, and stages is grounds to
            be immediately removed from the festival.
          </Text>
        </Item>
      </List>
      <Text>
        All attendees are required to adhere to the University community
        standards guidelines found in the{' '}
        <Link
          href="https://www.northwestern.edu/communitystandards/student-handbook/"
          target="_blank"
          rel="noreferrer"
        >
          Student Handbook
        </Link>
        .
      </Text>
      <Text>
        In order to protect the whole community during Dillo Day, there will be
        a security presence at the festival. Upon entry, there will be an
        airport-style check-in with security checking individuals and bags
        before admittance onto the festival grounds. There will be metal
        detection. For more information on our bag policy and what items are
        allowed and prohibited, check the corresponding section. If specific
        accommodations are needed, please reach out to{' '}
        <Link href="mailto:dilloopsforce@gmail.com">
          dilloopsforce@gmail.com
        </Link>{' '}
        and we will try to accommodate your needs.
      </Text>
      <Text>
        We at Mayfest understand the complicated relationship between security
        and our attendees. As a major event with significant security concerns,
        a security presence is a necessity. However, we actively work to ensure
        that this security presence does not take away from anyone's experience
        at the festival and that everyone is as comfortable and safe as possible
        within the festival. For full transparency, at the festival, there will
        be uniformed NUPD officers and uniformed private security personnel.
        Mayfest will also have our Student Intervention Service (SIS) out on the
        Lakefill. SIS is focused on mitigating any problems revolving around
        security and the attendees. By providing a student buffer, we strive to
        cut down on tensions and make the festival the best it can be. For more
        information surrounding SIS, please visit our website or reach out to{' '}
        <Link href="mailto:dilloopsforce@gmail.com">
          dilloopsforce@gmail.com
        </Link>
        .
      </Text>

      <Area>
        <AreaTitle>SECURITY</AreaTitle>

        <TermsSection title="METAL DETECTION POLICY">
          <Text>
            When entering the festival, all attendees will pass through metal
            detecting wands upon entrance. Guests who are unable to pass through
            metal detectors for medical reasons may request to be screened
            separately in a private setting.
          </Text>
        </TermsSection>

        <TermsSection title="BAG POLICY">
          <Text>
            While certain bags are permitted within the festival we highly
            encourage those who do not need a bag to leave them at home.
            Individuals may bring in one (1) small personal bag, no bigger than
            a typical backpack. Examples include purses, drawstring bags, or
            camelbacks. Bigger bags will not be allowed into the festival. All
            bags will be searched by security prior to entering the festival.
            For questions, send an email to{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>
            .
          </Text>
        </TermsSection>

        <TermsSection title="PERMITTED AND PROHIBITED ITEMS">
          <Text>Permitted Items</Text>
          <List>
            <Item>
              <Text>Empty water bottles</Text>
            </Item>
            <Item>
              <Text>Sunscreen</Text>
            </Item>
            <Item>
              <Text>Blankets, Sheets, Towels</Text>
            </Item>
          </List>
          <Text>Prohibited Items</Text>
          <List>
            <Item>
              <Text>
                Skateboards, scooters, bikes, and other personal vehicles
              </Text>
            </Item>
            <Item>
              <Text>Water balloons or water guns</Text>
            </Item>
            <Item>
              <Text>Any aerosol</Text>
            </Item>
            <Item>
              <Text>Coolers (exceptions can be made for medical use)</Text>
            </Item>
            <Item>
              <Text>
                Drones, remote-controlled aircraft, or other unstaffed aerial
                vehicles and flying objects
              </Text>
            </Item>
            <Item>
              <Text>Hammocks</Text>
            </Item>
            <Item>
              <Text>Glass containers</Text>
            </Item>
            <Item>
              <Text>Illegal or illicit substances or drug paraphernalia</Text>
            </Item>
            <Item>
              <Text>Outside beverages (including alcohol)</Text>
            </Item>
            <Item>
              <Text>Umbrellas</Text>
            </Item>
            <Item>
              <Text>Pets (excluding service animals)</Text>
            </Item>
            <Item>
              <Text>Tents or shade-making devices</Text>
            </Item>
            <Item>
              <Text>Fireworks</Text>
            </Item>
            <Item>
              <Text>Weapons of any kind (firearms, knives, etc.)</Text>
            </Item>
            <Item>
              <Text>Pepper spray</Text>
            </Item>
            <Item>
              <Text>Selfie sticks</Text>
            </Item>
            <Item>
              <Text>Any and all professional audio recording equipment</Text>
            </Item>
            <Item>
              <Text>
                Professional cameras and professional recording (photo, video,
                audio) equipment (NO large professional detachable zoom lenses,
                stands, monopods, tripods, attachment sticks (selfie sticks), or
                other commercial equipment).
              </Text>
            </Item>
            <Item>
              <Text>
                Unauthorized/unlicensed vendors are not allowed. No unauthorized
                solicitation and materials including handbills, flyers,
                stickers, beach balls, giveaways, samples, etc.
              </Text>
            </Item>
          </List>
        </TermsSection>
      </Area>

      <Area>
        <AreaTitle>TICKETING</AreaTitle>

        <TermsSection title="NU UNDERGRADUATE WRISTBAND POLICY">
          <Text>
            Every enrolled Northwestern University undergraduate student may
            receive a free festival wristband when they register for one as
            instructed. If you are unable to register for an NU Undergraduate
            wristband, contact{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>{' '}
            immediately.
          </Text>
        </TermsSection>

        <TermsSection title="GUEST WRISTBAND POLICY">
          <Text>
            A limited number of guest wristbands for the festival will be
            available to undergraduates on a first-come-first-served basis at a
            cost of $25.00 per wristband. All students are limited to a single
            (1) guest wristband while quantities last. To purchase a wristband,
            you will need to enter the guest's name, date of birth, and
            telephone number at the time of purchase. Only purchase an
            additional wristband if you have your guest's complete information;
            this information cannot be changed later. An incomplete submission
            will result in the transaction being voided. Guests must be at least
            18 years of age. No refunds, transfers, or exchanges. If any
            purchase is deemed fraudulent, or if an a student purchases more
            than one guest wristband, the tickets will be voided with no refund.
          </Text>
        </TermsSection>

        <TermsSection title="NU GRADUATE WRISTBAND POLICY">
          <Text>
            A limited number of wristbands will be available to current
            Northwestern University graduate students (including Feinberg,
            Pritzker, and Kellogg). The wristbands will be available on a
            first-come-first-served basis at a cost of $30.00 per wristband.
            Graduate students are limited to a single (1) wristband while
            quantities last. Graduate students can purchase additional guest
            wristbands through the extended guest option. Additionally, in order
            to pick up your wristband, you must come in person to the designated
            downtown Chicago pickup location (limited hours) or Northwestern's
            Evanston campus during the allotted distribution windows. We are
            unable to accommodate requests outside of these pickup windows and
            locations.
          </Text>
        </TermsSection>

        <TermsSection title="NU ALUMNI">
          <Text>
            Northwestern alumni are welcome and encouraged to attend Dillo Day!
            Alumni will purchase a wristband through the Evanston Community and
            Extended Guests option at $35.00 per wristband.
          </Text>
        </TermsSection>

        <TermsSection title="EVANSTON COMMUNITY AND EXTENDED GUESTS">
          <Text>
            A limited number of wristbands have been set aside for purchase by
            Evanston residents and extended guests. These wristbands are $35.00
            each. Residents and extended guests must be at least 18 years of
            age. Wristbands for the Evanston community and guests must be picked
            up prior to the day of the festival. If you foresee this to be an
            issue, you must email{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>{' '}
            before May 18, 2024. Otherwise, all wristbands must be picked up
            during normal distribution hours from May 9, 2024 through May 17,
            2024. Failure to do so will not result in a refund.
          </Text>
        </TermsSection>

        <TermsSection title="GUEST RULES AND REGULATIONS">
          <Text>
            IDs will be checked against information provided at checkout.
            Wristbands are not transferable and must be worn by the
            purchaser/registered guest. If it is determined that an individual
            is not the same as the one registered to the wristband on the day of
            the festival, the wristband will be rendered inactive and that
            individual will not be admitted into the festival. No refund will be
            given.
          </Text>
        </TermsSection>

        <TermsSection title="WRISTBAND DISTRIBUTION">
          <Text>
            Attendees must pick up their wristbands in person at the scheduled
            locations. They must present a valid Wildcard or government-issued
            ID that matches the name on the wristband order. Attendees with
            guests are also responsible for picking up their registered guest's
            wristband during distribution. Aside from guest wristbands, no
            individual will be permitted to collect any other individual's
            wristbands, and will be turned away without exception.
          </Text>
        </TermsSection>

        <TermsSection title="LOST WRISTBANDS">
          <Text>
            Any replacement wristbands must be purchased from Mayfest
            Productions for $40.00 per replacement.
          </Text>
        </TermsSection>

        <TermsSection title="CANCELLATION POLICY">
          <Text>
            In the case of cancellation due to inclement weather or other
            emergency, there are no refunds given. Mayfest Productions has the
            sole discretion as to any exceptions to this and appeals will be
            heard on a case-by-case basis. To submit formal requests for
            exceptions, please send a brief description to{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>
            .
          </Text>
        </TermsSection>
      </Area>

      <Area>
        <AreaTitle>ACCESSIBILITY</AreaTitle>

        <TermsSection title="ACCESSIBILITY POLICY">
          <Text>
            Individuals seeking reasonable accommodations related to
            accessibility and/or mobility needs on Dillo Day are encouraged to
            reach out to Mayfest in order to arrange appropriate festival
            accommodations. Mayfest cannot guarantee accommodations, and our
            Accessibility Team will review requests on a case-by-case basis.
            When ordering a wristband, fill out the accessibility requests Any
            questions or concerns related to accessibility can be sent to{' '}
            <Link href="mailto:dillocommunity@gmail.com">
              dillocommunity@gmail.com
            </Link>
            .
          </Text>
        </TermsSection>

        <TermsSection title="MEDICATION POLICY">
          <Text>
            Prescription medication is allowed within the festival grounds. To
            bring in prescription medication, the individual must bring with
            them the pharmacy-labeled container, which details the prescription,
            dosage, and patient name. Individuals are only allowed to bring
            enough supply of medication for that day. Medications needed to be
            inhaled or smoked are prohibited unless in a prescribed inhaler.
          </Text>
          <Text>
            Over-the-counter medications such as Dayquil, acetaminophen,
            antacids, or antihistamines, can be brought into the festival with
            only a sufficient amount for the day.
          </Text>
        </TermsSection>
      </Area>
    </Section>
  );
}
