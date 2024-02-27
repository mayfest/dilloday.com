'use client';
import Past_Dillos from './past-dillos';
import styled from 'styled-components';

const Div = styled.div`
  background-color: black;
`;

export default function Home() {
  return (
    <Div>
      <Past_Dillos></Past_Dillos>
    </Div>
  );
}
