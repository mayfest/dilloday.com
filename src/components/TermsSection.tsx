import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '.';

const Container = styled.div`
  border-top: 1px solid #eaeaea;

  &:last-child {
    border-bottom: 1px solid #eaeaea;
  }
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

const TitleText = styled.h4`
  font-size: 18px;
  font-weight: 500;

  ${mobile} {
    font-size: 16px;
  }
`;

const Content = styled(motion.div)`
  padding: 0 16px;
  background: #121212;
  overflow: hidden;
  box-sizing: content-box;
`;

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TermsSection({ title, children }: TermsSectionProps) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => title.toLowerCase().replace(/ /g, '-'), [title]);

  useEffect(() => {
    if (window.location.hash === `#terms/${id}`) {
      setOpen(true);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [id]);

  return (
    <Container id={id}>
      <Title $open={open} onClick={() => setOpen(!open)}>
        <TitleText>{title}</TitleText>
        {open ? <MinusIcon /> : <PlusIcon />}
      </Title>
      <AnimatePresence>
        {open && (
          <Content
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
          >
            {children}
          </Content>
        )}
      </AnimatePresence>
    </Container>
  );
}
