import { Team, teams } from '@/lib/teams';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ExecMembers = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

const ExecMember = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ExecMemberPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const ExecMemberPhotoPlaceholder = styled(UserCircleIcon)`
  width: 48px;
  height: 48px;
  stroke-width: 1px;
  color: #f0f0f0;
`;

const ExecMemberText = styled.div``;

const ExecMemberName = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const GeneralMembers = styled.div``;

const GeneralMemberNames = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #808080;
`;

const GeneralMemberName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

const MemberPosition = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: #808080;
`;

interface TeamMembersProps {
  team: Team;
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <Container>
      <ExecMembers>
        {team.members?.executive?.map((member, i) => (
          <ExecMember key={`${team.name} exec ${i}`}>
            {member.image ? (
              <ExecMemberPhoto
                src={member.image || ''}
                alt={`${member.name} photo`}
              />
            ) : (
              <ExecMemberPhotoPlaceholder />
            )}
            <ExecMemberText>
              <ExecMemberName>{member.name}</ExecMemberName>
              <MemberPosition>{member.position}</MemberPosition>
            </ExecMemberText>
          </ExecMember>
        ))}
      </ExecMembers>
      <GeneralMembers>
        <MemberPosition>General Members</MemberPosition>
        <GeneralMemberNames>
          {team.members?.general?.map((member, i) => (
            <Fragment key={`${team.name} general ${i}`}>
              <GeneralMemberName>{member.name}</GeneralMemberName>
              {i !== team.members!.general!.length - 1 && ' • '}
            </Fragment>
          ))}
        </GeneralMemberNames>
      </GeneralMembers>
    </Container>
  );
}
