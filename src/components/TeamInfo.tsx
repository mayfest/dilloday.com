// components/TeamInfo.tsx
import { Team } from '@/lib/teams';
import { XMarkIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { mobile } from '.';
import TeamMembers from './TeamMembers';

const Container = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  background-color: #1a1a1a;
  border: 2px solid #ffffff;
  margin: 0;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  position: relative;
  gap: 8px;

  ${mobile} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 320px;
  object-fit: cover;
  object-position: center;

  ${mobile} {
    width: 100%;
    height: 240px;
  }
`;

const Contents = styled.div`
  padding: 16px;
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
    background-color: #323232;
  }

  &:active {
    background-color: #484848;
  }

  svg {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #d8b4fe;
  margin: 20px 0;
`;

interface TeamInfoProps {
  team: Team;
  onClose: () => void;
}

export function TeamInfo({ team, onClose }: TeamInfoProps) {
  return (
    <Container>
      <Image src={team.teamImage || ''} alt={`${team.name} team image`} />
      <Contents>
        <Title>{team.name}</Title>
        <Text>{team.description}</Text>
        <TeamMembers team={team} />
      </Contents>
      <CloseButton onClick={() => onClose()}>
        <XMarkIcon />
      </CloseButton>
    </Container>
  );
}

export default TeamInfo;