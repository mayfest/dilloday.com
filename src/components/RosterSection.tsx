import { RosterYear } from '@/lib/roster';
import styled from 'styled-components';
import { mobile } from '.';
import RosterMemberList from './RosterMemberList';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Container = styled.div`
  margin: 32px 0;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

const Chairs = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ChairTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const ChairArrow = styled(ChevronRightIcon)`
  width: 12px;
  height: 12px;
  color: #c0c0c0;
  stroke-width: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Team = styled.div`
  flex: 33%;
  margin: 16px 0;

  ${mobile} {
    flex: 100%;
  }
`;

const TeamTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const ErrorMessage = styled.p`
  color: #fca5a5;
`;

interface RosterSectionProps {
  data: RosterYear;
}

export default function RosterSection({ data }: RosterSectionProps) {
  return (
    <Container id={data.year}>
      <Heading>{data.year}</Heading>
      {data.error && <ErrorMessage>{data.error}</ErrorMessage>}
      {data.chairs && (
        <Chairs>
          <ChairTitle>Co-Chairs</ChairTitle>
          <ChairArrow />
          <RosterMemberList horizontal bold members={data.chairs} />
        </Chairs>
      )}
      {data.teams && (
        <Content>
          {data.teams.map((team, i) => (
            <Team
              key={team.name}
              id={`${data.year}-${team.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <TeamTitle>{team.name}</TeamTitle>
              <RosterMemberList
                title="Executive"
                members={team.executive}
                bold
              />
              <RosterMemberList title="General" members={team.general} />
            </Team>
          ))}
        </Content>
      )}
    </Container>
  );
}
