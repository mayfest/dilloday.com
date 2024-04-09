'use client';

import styled from 'styled-components';
import { Section } from '@/components';
import TermsSection from './TermsSection';

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
        before admittance onto the festival grounds. For more information on our
        bag policy and what items are allowed and prohibited, check the
        corresponding section. If specific accommodations are needed, please
        reach out to{' '}
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

      <TermsSection title="BAG POLICY">
        While certain bags are permitted within the festival we highly encourage
        those who do not need a bag to leave them at home. Individuals may bring
        in one (1) small personal bag, no bigger than a typical backpack.
        Examples include purses, drawstring bags, or camelbacks. Bigger bags
        will not be allowed into the festival. All bags will be searched by
        security prior to entering the festival. For questions, send an email to{' '}
        <Link href="mailto:dilloopsforce@gmail.com">
          dilloopsforce@gmail.com
        </Link>
        .
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
              solicitation and materials including handbills, flyers, stickers,
              beach balls, giveaways, samples, etc.
            </Text>
          </Item>
        </List>
      </TermsSection>

      <TermsSection title="MEDICATION POLICY">
        <Text>
          Prescription medication is allowed within the festival grounds. To
          bring in prescription medication, the individual must bring with them
          the pharmacy-labeled container, which details the prescription,
          dosage, and patient name. Individuals are only allowed to bring enough
          supply of medication for that day. Medications needed to be inhaled or
          smoked are prohibited unless in a prescribed inhaler.
        </Text>
        <Text>
          Over-the-counter medications such as Dayquil, acetaminophen, antacids,
          or antihistamines, can be brought into the festival with only a
          sufficient amount for the day.
        </Text>
      </TermsSection>

      <TermsSection title="ACCESSIBILITY POLICY">
        <Text>
          Individuals seeking reasonable accommodations related to accessibility
          and/or mobility needs on Dillo Day are encouraged to reach out to
          Mayfest in order to arrange appropriate festival accommodations.
          Mayfest cannot guarantee accommodations, and our Accessibility Team
          will review requests on a case-by-case basis. When ordering a
          wristband, fill out the accessibility requests Any questions or
          concerns related to accessibility can be sent to{' '}
          <Link href="mailto:dillocommunity@gmail.com">
            dillocommunity@gmail.com
          </Link>
          .
        </Text>
      </TermsSection>
      <TermsSection title="GUEST WRISTBAND POLICY">
        A limited number of guest wristbands for the festival will also be
        available to undergraduates on a first-come-first-served basis at a cost
        of $25.00/wristband. Students living on campus are limited to a single
        (1) guest wristband while quantities last. Students living off campus
        can purchase multiple guest wristbands and these guests must stay in off
        campus housing. To purchase a $25.00 wristband, you will need to enter
        the guest's name, date of birth, and telephone number at the time of
        purchase. Only purchase an additional wristband if you have your guest's
        complete information; this information cannot be changed later. An
        incomplete submission will result in the transaction being voided.
        Guests must be at least 18 years of age. No refunds, transfers, or
        exchanges. If any purchase is deemed to be fraudulent, or if an
        on-campus resident purchases more than one guest wristband, the tickets
        will be voided with no refund.
      </TermsSection>
    </Section>
  );
}
