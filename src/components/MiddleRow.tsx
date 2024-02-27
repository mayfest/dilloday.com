// MiddleRow.tsx
import React from 'react';
import styled from 'styled-components';

const MiddleRowContainer = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const MiddleRowName = styled.h2`
  font-size: 20px; // Larger font size
`;

const MiddleRowDescription = styled.p`
  font-size: 16px; // Larger font size
`;

interface MiddleRowProps {
  name: string;
  description: string;
}

const MiddleRow: React.FC<MiddleRowProps> = ({ name, description }) => {
  return (
    <MiddleRowContainer>
      <MiddleRowName>{name}</MiddleRowName>
      <MiddleRowDescription>{description}</MiddleRowDescription>
    </MiddleRowContainer>
  );
};

export default MiddleRow;
