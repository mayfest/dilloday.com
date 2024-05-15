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
  margin: 64px 0;
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
        <AreaTitle id="know-before-you-go">SECURITY</AreaTitle>

        <TermsSection title="METAL DETECTION POLICY">
          <Text>
            Attendees will enter through the main entrance of the Dillo Village,
            located on the East Lawn of Norris. All attendees will pass through
            metal detecting wands upon entrance, and guests who are unable to
            pass through metal detectors for medical reasons may request to be
            screened separately in a private setting. All bags will be searched.
            Permitted items include empty plastic water bottles, sunscreen
            (non-aerosol), and compact blankets, sheets, and towels. Please
            allow more time for entry due to these security measures.
          </Text>
          <Text>
            Attendees who would like to request a separate screening, to request
            other accommodations for the screening process, or to ask questions
            about the screening process generally, can contact{' '}
            <Link href="mailto:dilloopsforce@gmail.com">
              dilloopsforce@gmail.com
            </Link>{' '}
            or call <Link href="tel:8474673719">847-467-3719</Link>.
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
              <Text>Towels</Text>
            </Item>
          </List>
          <Text>Prohibited Items</Text>
          <List>
            <Item>
              <Text>Blankets and Sheets (unless for medical reasons)</Text>
            </Item>
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
        <AreaTitle id="terms/ticketing">TICKETING</AreaTitle>

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
        <AreaTitle id="terms/accessibility">ACCESSIBILITY</AreaTitle>

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

      <Area>
        <AreaTitle id="terms/dillo-day-mobile-app">
          DILLO DAY MOBILE APP
        </AreaTitle>

        <TermsSection title="DILLO CABIN MATES">
          <Text>
            Dillo Cabin Mates is a feature that connects members to other
            members based on music taste. Only Northwestern-affiliated members
            are eligible to participate, including undergraduate students,
            graduate students, alumni, faculty, and staff. You will only be
            matched with another Northwestern-affiliated member of the same
            type, where types are as follows: Undergraduate, Graduate and
            Alumni, and Faculty and Staff. A Google account with a Northwestern
            domain primary email address is required to participate.
          </Text>
          <Text>
            Registration can be done up until Friday, May 17, 2024 at 8:00 PM.
            Matches will be made and shared on the morning of Dillo Day,
            Saturday, May 18, 2024. Enable push notifications within the app for
            updates.
          </Text>
          <Text>Both Spotify and Apple Music are supported.</Text>
        </TermsSection>

        <TermsSection title="STORE GIVEAWAY TERMS">
          <Text>
            The first 100 people to register for Dillo Cabin Mates will receive
            15% off their next purchase at the{' '}
            <Link
              href="https://store.dilloday.com"
              target="_blank"
              rel="noreferrer"
            >
              Dillo Day Store
            </Link>
            .
          </Text>
          <Text>
            Discount codes will be distributed via email sometime during the
            week after Dillo Day. Each discount code is unique and is
            single-use.
          </Text>
          <Text>Some products may not be eligible for the discount.</Text>
        </TermsSection>

        <TermsSection title="APP DATA PRIVACY">
          <Text>All features that require user data are optional.</Text>
          <Text>
            When using features that require user data, at least some of the
            following data may be associated with you: Google account name,
            Google email address, Spotify username, limited Spotify listening
            trends, limited Apple Music listening trends.
          </Text>
          <Text>
            By connecting your Google account to the app, in addition to app
            features, your name and email address may be automatically
            subscribed to the Dillo Day mailing list for important safety
            information and exclusive offers. You can unsubscribe at any time.
          </Text>
          <Text>
            We do not use your data for any purpose other than those outlined in
            terms and conditions. Your data is never shared with any other
            organization or individuals outside of only the necessary Mayfest
            Productions individuals.
          </Text>

          <Text>
            You may request deletion of your data at any time by reaching out to{' '}
            <Link href="mailto:support@dilloday.com">support@dilloday.com</Link>
            .
          </Text>
        </TermsSection>
      </Area>

      <Area>
        <AreaTitle id="terms/acknowledgements">ACKNOWLEDGEMENTS</AreaTitle>

        <TermsSection title="LAND ACKNOWLEDGEMENT">
          <Text>
            The location of today's Dillo Day, the Northwestern Lakefill, is on
            the homelands of the people of the Council of Three Fires, the
            Ojibwe, Potawatomi, and Odawa as well as the Menominee, Miami and
            Ho-Chunk nations. Mayfest Productions believes providing more
            context is essential given this year's theme, Camp Dillo. The theme
            of summer camps often invokes racist Native American tropes and
            mascots, while also creating a colonial dichotomy between “nature”
            vs. “civilization” that stems from Native American genocide and
            white supremacy. Mayfest Productions acknowledges that summer camps
            often serve as a site of Indigenous appropriation, and commits to
            rejecting discriminatory tropes and imagery. Since the origin of
            summer camp, campers and camp organizations have engaged in
            caricatured, stolen Indigenous traditions, like hosting powwows and
            appropriating Native cultures within their programming (cabins are
            “tribes,” camp directors are “Chiefs”) or camp names.
          </Text>
          <Text>
            Northwestern is also in close proximity to an urban Indigenous
            community in Chicago and near several tribes in the Midwest.
            Pre-colonization, the Indigenous communities in the area had
            established a vast network of trails and portages, or places to
            carry and drag boats from one water system to another, and had a
            robust trading network. By 1833, most Indigenous communities were
            displaced from the region after they were pressured to sign a series
            of coercive treaties. The 1833 Treaty of Chicago, which was taken as
            a surrender to Indigenous peoples' claims to Chicagoland, was signed
            before the creation of Northwestern's lakefill in 1962-1964. The
            Pokagon Band of Potawatomi laid claim to this land east of Michigan
            Avenue created by landfill in the 1980s and thereafter. For the
            Ojibwe, Potawatomi, and Odawa—the Council of Three Fires—Lake
            Michigan is not just a body of water but a vital cultural,
            spiritual, and economic resource. Native peoples have historically
            depended on the Great Lakes for transportation, sustenance, trade,
            and ceremonial purposes, viewing them as sacred spaces with
            significant spiritual importance. The creation of the lakefill
            altered these traditional and sacred spaces. This act changed the
            natural shoreline and disrupted the ecological balance of the area.
            So, as we convene on the university's lakefill, we encourage you to
            reflect on its history and relationship with the original stewards
            of this land.
          </Text>
          <Text>
            The ongoing and current oppression of Indigenous peoples persists
            today globally. Generations of government policies of forced
            removal, land seizures and violence have been inflicted on Native
            peoples. Food insecurity and poverty are high among Native
            communities today, at roughly double the rate of white Americans. On
            the Northwestern campus alone, the John Evans Center is named after
            one of Northwestern's founders John Evans, who had direct
            involvement in the Sand Creek Massacre, the mass murder of Cheyenne
            and Arapaho people. According to a report conducted by the
            University of Denver, Evans's actions as the territorial governor of
            Colorado, such as violence-inciting proclamations and neglect of
            treaty-negotiation duties, set the conditions for a massacre to
            occur. Northwestern continues to develop on stolen land; The Pokagon
            Band of the Potawatomi Indians Tribal Historic Preservation Office
            wrote to the City of Evanston and Northwestern over concerns of the
            new Ryan Field construction and its disturbance of ancestral burials
            and archaeologically sensitive sites, as seen on Evanston's Land Use
            Commission's website. Northwestern has yet to acknowledge if
            archaeological oversight will take place during construction.
          </Text>
          <Text>
            We would like to use this opportunity to urge non-Native attendees
            to educate themselves about the ongoing struggles Indigenous
            communities face today as a result of past and contemporary colonial
            projects, including those perpetrated by the Northwestern University
            Board of Trustees. We have included a list of resources and links to
            pages to learn more about the current issues Native communities are
            suffering from. We urge you to learn about and support
            Indigenous-led movements meant to combat colonial oppression, such
            as the Land Back Movement.
          </Text>
          <Text>
            Finally, to expand our action beyond statements, Mayfest Productions
            is encouraging Mayfest members and all Northwestern community
            members to attend the NAISA Spring Pow Wow on April 27th, an effort
            that aligns with our commitment to supporting meaningful community
            initiatives. We also encourage students to attend the Center for
            Native American and Indigenous Research and Office of Institutional
            Diversity and Inclusion's Lunch & Learn and accompanying Q&A hosted
            by Dave Spencer (Mississippi Chata/Diné) from Oka Homma Singers on
            April 25th to prepare for attending the Pow Wow. Your participation
            will help contribute directly to the knowledge of the history of
            this land.
          </Text>
        </TermsSection>
      </Area>
    </Section>
  );
}
