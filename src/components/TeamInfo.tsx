// components/TeamInfo.tsx
import { Team } from '@/lib/teams';
import React from 'react';
import styled from 'styled-components';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  background-color: #000000;
  padding: 16px 32px;
  margin: 0;
  border: 2px solid #ffffff;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
`;

// Close the info box
const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #202020;
  }

  &:active {
    background-color: #323232;
  }

  svg {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
  }
`;

// Team info text
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #d8b4fe;
  margin: 16px 0;
`;

interface TeamInfoProps {
  team: Team;
  onClose: () => void;
}

export function TeamInfo({ team, onClose }: TeamInfoProps) {
  return (
    <Container>
      <Title>{team.name}</Title>
      <Text>{team.description}</Text>
      <CloseButton onClick={onClose}>
        <XMarkIcon />
      </CloseButton>
    </Container>
  );
}

export default TeamInfo;
