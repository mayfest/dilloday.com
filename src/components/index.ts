import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled(motion.section)`
  width: 100%;
  max-width: 1200px;
  margin: 72px auto;
  padding: 16px;
  /* border: 2px purple solid; */
`;

export const mobile = '@media (max-width: 768px)';
