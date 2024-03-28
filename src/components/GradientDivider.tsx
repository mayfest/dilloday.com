import styled from 'styled-components';

const Divider = styled.div<{ $top?: boolean; $bottom?: boolean }>`
  position: absolute;
  width: 100%;
  background: linear-gradient(
    to ${(props) => (props.$top ? 'top' : 'bottom')},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
  ${(props) => (props.$top ? 'top: 0;' : '')}
  ${(props) => (props.$bottom ? 'bottom: 0;' : '')}
  left: 0;
`;

interface GradientDividerProps {
  top?: boolean;
  bottom?: boolean;
  height: number;
}

export default function GradientDivider({
  top,
  bottom,
  height,
}: GradientDividerProps) {
  return (
    <Divider
      $top={top}
      $bottom={bottom}
      style={{
        height: `${height}px`,
      }}
    />
  );
}
