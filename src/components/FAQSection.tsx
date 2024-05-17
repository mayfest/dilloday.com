import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '.';

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.button<{ $open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 4px 16px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  ${({ $open }) => $open && `background: rgba(0, 0, 0, 0.05);`}

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TitleText = styled.h4`
  font-size: 14px;
  font-weight: 500;

  ${mobile} {
    font-size: 16px;
  }
`;

const Content = styled(motion.div)`
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.05);
  overflow: hidden;
  box-sizing: content-box;
`;

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FAQSection({ title, children }: TermsSectionProps) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => title.toLowerCase().replace(/ /g, '-'), [title]);

  useEffect(() => {
    if (window.location.hash === `#tickets/faq/${id}`) {
      setOpen(true);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [id]);

  return (
    <Container id={`id-${id}`}>
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
