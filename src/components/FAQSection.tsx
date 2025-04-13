import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '.';

// Theme interface for FAQSection
interface FAQSectionTheme {
  borderColor: string;
  titleColor: string;
  hoverBackground: string;
  contentBackground: string;
  iconColor?: string;
}

// Default theme (dark background)
const defaultTheme: FAQSectionTheme = {
  borderColor: 'rgba(255, 255, 255, 0.2)',
  titleColor: '#ffffff',
  hoverBackground: 'rgba(255, 255, 255, 0.05)',
  contentBackground: 'rgba(255, 255, 255, 0.05)',
};

// Blue theme (white background)
export const blueTheme: FAQSectionTheme = {
  borderColor: 'rgba(23, 56, 133, 0.2)',
  titleColor: '#173885',
  hoverBackground: 'rgba(23, 56, 133, 0.05)',
  contentBackground: 'rgba(23, 56, 133, 0.05)',
  iconColor: '#173885',
};

interface ContainerProps {
  $theme: FAQSectionTheme;
}

const Container = styled.div<ContainerProps>`
  border-top: 1px solid ${({ $theme }) => $theme.borderColor};
  &:last-child {
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  }
`;

interface TitleProps {
  $open: boolean;
  $theme: FAQSectionTheme;
}

const Title = styled.button<TitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  &:hover {
    background: ${({ $theme }) => $theme.hoverBackground};
  }
  ${({ $open, $theme }) => $open && `background: ${$theme.hoverBackground};`}

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $theme }) => $theme.iconColor || $theme.titleColor};
  }
`;

interface TitleTextProps {
  $theme: FAQSectionTheme;
}

const TitleText = styled.h4<TitleTextProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ $theme }) => $theme.titleColor};
  ${mobile} {
    font-size: 16px;
  }
`;

interface ContentProps {
  $theme: FAQSectionTheme;
}

const Content = styled(motion.div)<ContentProps>`
  padding: 0 16px;
  background: ${({ $theme }) => $theme.contentBackground};
  overflow: hidden;
  box-sizing: content-box;
`;

interface FAQSectionProps {
  title: string;
  children: React.ReactNode;
  theme?: FAQSectionTheme;
}

export default function FAQSection({
  title,
  children,
  theme = defaultTheme,
}: FAQSectionProps) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => title.toLowerCase().replace(/ /g, '-'), [title]);

  useEffect(() => {
    if (window.location.hash === `#tickets/faq/${id}`) {
      setOpen(true);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [id]);

  return (
    <Container id={id} $theme={theme}>
      <Title $open={open} $theme={theme} onClick={() => setOpen(!open)}>
        <TitleText $theme={theme}>{title}</TitleText>
        {open ? <MinusIcon /> : <PlusIcon />}
      </Title>
      <AnimatePresence>
        {open && (
          <Content
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
            $theme={theme}
          >
            {children}
          </Content>
        )}
      </AnimatePresence>
    </Container>
  );
}
