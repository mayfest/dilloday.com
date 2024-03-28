'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TeamBox from './TeamBox';
import TeamInfo from './TeamInfo';
import { Section, mobile } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { teams } from '@/lib/teams';

// Team grid
const TG = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin: 0 auto;
  font-size: 14px;
  grid-template-rows: auto;

  ${mobile} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
  }
`;

// Framer motion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.05,
    },
  },
};

// https://www.framer.com/motion/ use this to display the panels
// AOS (animate on scroll)
export default function TeamsGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const teamBoxes = [];
  for (let i = 0; i < teams.length; i++) {
    teamBoxes.push(
      <TeamBox
        name={teams[i].name}
        image={teams[i].image}
        onClick={() => setOpen(open !== i ? i : null)}
        key={`team-${i}`}
        selected={open === i}
      />
    );

    if (open !== null) {
      if (mobile && i % 2 === 1 && open >= i - 1 && open <= i) {
        teamBoxes.push(
          <TeamInfo
            team={teams[open]}
            onClose={() => setOpen(null)}
            key="team-info"
          />
        );
      } else if (!mobile && i % 5 === 4 && open >= i - 4 && open <= i) {
        teamBoxes.push(
          <TeamInfo
            team={teams[open]}
            onClose={() => setOpen(null)}
            key="team-info"
          />
        );
      }
    }
  }

  return (
    <TG
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <AnimatePresence>{teamBoxes}</AnimatePresence>
    </TG>
  );
}
