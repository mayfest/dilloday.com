// components/TeamInfo.tsx
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  width: 100%;
  grid-column: 1 / -1;
  background-color: transparent;
  padding: 20px;
  border: 2px solid red;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: red;
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

const TeamInfo: React.FC<InfoProp> = ({ isOpen, onClose, name, description }) => {
    return (
        <InfoContainer isOpen={isOpen}>
            <CloseButton onClick={onClose}> X </CloseButton>
            <h2>{name}</h2>
            <p>{description}</p>
        </InfoContainer>
    )
}

export default TeamInfo