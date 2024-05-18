import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const StepContainer = styled.div``;

const StepBubble = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f8b547;
  color: #13381f;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  margin: 0 auto;
  width: 2px;
  height: 100%;
  background: #f8b547;
`;

const Contents = styled.div<{ $margin?: boolean }>`
  flex: 1;
  ${(props) => props.$margin && 'margin-bottom: 32px;'}
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #f8b547;
`;

interface StepProps {
  step: string;
  title: React.ReactNode;
  children: React.ReactNode;
  line?: boolean;
}

export default function Step({ step, title, children, line }: StepProps) {
  return (
    <Container>
      <StepContainer>
        <StepBubble>{step}</StepBubble>
        {line && <Line />}
      </StepContainer>
      <Contents $margin={line}>
        <Title>{title}</Title>
        {children}
      </Contents>
    </Container>
  );
}
