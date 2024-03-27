// components/TeamInfo.tsx
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column: 1 / -1;
  background-color: transparent;
  padding: 0;
  margin: 0;
  max-height: 300px;
  height: 100%;
`;

// Close the info box
const CloseButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

interface InfoProp {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    description: string;
}

// Close button and team name
const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

// Team info text
const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`

const TeamInfo: React.FC<InfoProp> = ({ isOpen, onClose, name, description }) => {
  const img_style = {
    margin: 0,
    padding: 0,
    height: '100%',
  };

  return (
    <InfoContainer isOpen={isOpen}>
      <img src="https://i.imgur.com/TMeCJar.png" alt="team pic" style={img_style}/>
      <InfoText>
        <InfoHeader>
          <h2>{name}</h2>
          <CloseButton onClick={onClose}> X </CloseButton>
        </InfoHeader>
        <p>{description}</p>
      </InfoText>
    </InfoContainer>
  )
}

export default TeamInfo