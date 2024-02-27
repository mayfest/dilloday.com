'use client';
import PastDillos from '@/components/PastDillos';
import Past_Dillos from './past-dillos';
import styled from 'styled-components';

const Div = styled.div`
  background-color: black;
`;

export default function Home() {
  return (
    <Div>
      <PastDillos />
    </Div>
  );
}
