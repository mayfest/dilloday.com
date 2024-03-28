import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 1px solid #eaeaea;
`;

const Title = styled.button<{ $open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 16px;

  &:hover {
    background: #121212;
  }

  ${({ $open }) => $open && `background: #121212;`}

  svg {
    width: 24px;
    height: 24px;
  }
`;

const TitleText = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 16px;
  background: #121212;
`;

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TermsSection({ title, children }: TermsSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Title $open={open} onClick={() => setOpen(!open)}>
        <TitleText>{title}</TitleText>
        {open ? <MinusIcon /> : <PlusIcon />}
      </Title>
      {open && <Content>{children}</Content>}
    </Container>
  );
}
