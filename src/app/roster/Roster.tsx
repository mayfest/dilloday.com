'use client';

import { mobile } from '@/components';
import RosterSection from '@/components/RosterSection';
import { roster } from '@/lib/roster';
import NextImage from 'next/image';
import styled from 'styled-components';

const Page = styled.main`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ImageContainer = styled.a`
  display: flex;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const HeadingText = styled.h1`
  font-size: 32px;
  font-weight: 700;

  ${mobile} {
    font-size: 24px;
  }
`;

const Text = styled.p`
  margin: 16px;
  opacity: 0.75;
`;

export default function Roster() {
  return (
    <Page>
      <Heading>
        <ImageContainer href="/">
          <Image src="/dillo.png" alt="Dillo Day" />
        </ImageContainer>
        <HeadingText>Historical Roster</HeadingText>
      </Heading>
      <Text>
        We value our Mayfam, past and present. An official listing of Mayfest
        Productions members can be found here back to 2011, the last year we
        have a record for. Member names are listed alphabetically and by the
        year of the Dillo Day they worked on.
      </Text>
      {roster.map((year, i) => (
        <RosterSection key={i} data={year} />
      ))}
    </Page>
  );
}
