import { RosterMember } from '@/lib/roster';
import { Fragment } from 'react';
import styled from 'styled-components';

const TeamMemberSection = styled.div`
  margin: 12px 0;
`;

const TeamMemberTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  color: #646464;
  text-transform: uppercase;
`;

const TeamMemberList = styled.ul<{ $horizontal?: boolean }>`
  list-style: none;
  ${({ $horizontal }) =>
    $horizontal
      ? `
    display: flex;
    gap: 8px;
  `
      : ''}
`;

const TeamMember = styled.li<{ $bold?: boolean }>`
  font-size: 16px;
  font-weight: ${({ $bold }) => ($bold ? 500 : 400)};
  color: ${({ $bold }) => ($bold ? '#e0e0e0' : '#c0c0c0')};
`;

const NoMembers = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #9a9a9a;
  font-style: italic;
`;

const TeamMemberLink = styled.a`
  color: #c0c0c0;
  text-decoration: underline;
  text-decoration-color: #646464;
  text-underline-offset: 4px;

  &:hover {
    color: #ffffff;
    text-decoration-color: #ffffff;
  }
`;

const Separator = styled.span`
  color: #646464;
`;

interface RosterMemberListProps {
  title?: string;
  members: RosterMember[];
  horizontal?: boolean;
  bold?: boolean;
}

export default function RosterMemberList({
  title,
  members,
  horizontal,
  bold,
}: RosterMemberListProps) {
  return (
    <TeamMemberSection>
      {title && <TeamMemberTitle>{title}</TeamMemberTitle>}
      <TeamMemberList $horizontal={horizontal}>
        {members.length > 0 ? (
          members.map((member, j) => (
            <Fragment key={j}>
              <TeamMember $bold={bold}>
                {typeof member === 'string' ? (
                  member
                ) : (
                  <TeamMemberLink
                    href={member.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {member.name}
                  </TeamMemberLink>
                )}
              </TeamMember>
              {horizontal && j < members.length - 1 && (
                <Separator> • </Separator>
              )}
            </Fragment>
          ))
        ) : (
          <NoMembers>No members</NoMembers>
        )}
      </TeamMemberList>
    </TeamMemberSection>
  );
}
