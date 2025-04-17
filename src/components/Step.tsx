import React from 'react';
import styled from 'styled-components';

interface StepTheme {
  bubbleBackground: string;
  bubbleColor: string;
  lineColor: string;
  titleColor: string;
}

const defaultTheme: StepTheme = {
  bubbleBackground: '#d61919',
  bubbleColor: '#f6f2a3',
  lineColor: '#d61919',
  titleColor: '#f6f2a3',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const StepContainer = styled.div``;

const StepBubble = styled.div<{ theme?: StepTheme }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) =>
    props.theme?.bubbleBackground || defaultTheme.bubbleBackground};
  color: ${(props) => props.theme?.bubbleColor || defaultTheme.bubbleColor};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div<{ theme?: StepTheme }>`
  margin: 0 auto;
  width: 2px;
  height: 100%;
  background: ${(props) => props.theme?.lineColor || defaultTheme.lineColor};
`;

const Contents = styled.div<{ $margin?: boolean }>`
  flex: 1;
  ${(props) => props.$margin && 'margin-bottom: 32px;'}
`;

const Title = styled.p<{ theme?: StepTheme }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme?.titleColor || defaultTheme.titleColor};
`;

interface StepProps {
  step: string;
  title: React.ReactNode;
  children: React.ReactNode;
  line?: boolean;
  theme?: StepTheme;
}

export default function Step({
  step,
  title,
  children,
  line,
  theme,
}: StepProps) {
  return (
    <Container>
      <StepContainer>
        <StepBubble theme={theme}>{step}</StepBubble>
        {line && <Line theme={theme} />}
      </StepContainer>
      <Contents $margin={line}>
        <Title theme={theme}>{title}</Title>
        {children}
      </Contents>
    </Container>
  );
}
