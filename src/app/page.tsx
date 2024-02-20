'use client';
import TeamsGrid from '@/components/TeamsGrid';
import ApplyButton from '@/components/ApplyButton';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  color: white;
`;

export default function Home() {
  return (
    <Box>
      <h1>Our Team 2023-2024</h1>
      <img
        src="/images/team_background.jpg"
        alt="Team Background"
        style={{ width: '100%' }}
      />
      <TeamsGrid />
      <ApplyButton />
    </Box>
  );
}
