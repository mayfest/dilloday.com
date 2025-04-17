import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled(motion.section)`
  width: 100%;
  max-width: 1150px;
  margin: 128px auto;
  padding: 16px;
`;

export const mobile = '@media (max-width: 768px)';
