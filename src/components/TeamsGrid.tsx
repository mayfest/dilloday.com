'use client';
// max width = 1200 px
import styled from 'styled-components';

import TeamBox from './TeamBox';
import { Section, tablet, mobile } from '@/components';

const TG = styled.div`
  display: grid;
  width: 1100px;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: auto;
  font-size: 14px;

  ${tablet} {
    width: 740px;
    font-size: 12px;
  }
  ${mobile} {
    width: 550px;
    grid-template-columns: repeat(2, 1fr);
    font-size: 18px;
  }
`;

const TeamsGrid: React.FC = () => {
  const teamMembers = [
    {
      name: 'BOOKING',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'COMMUNITY',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'CORPORATE',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'FINANCE',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'OPERATIONS',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PRODUCTIONS',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PROGRAMMING',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PROMOTIONS',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'TECHNOLOGY',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'CO-CHAIRS & GENERAL BOARD',
      description: '',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
  ];

  return (
    <Section>
      <TG>
        {teamMembers.map((member, index) => (
          <TeamBox key={index} name={member.name} image={member.image} />
        ))}
      </TG>
    </Section>
  );
};

export default TeamsGrid;
