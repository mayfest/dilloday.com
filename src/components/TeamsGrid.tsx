'use client';
import React, { useEffect, useState, useRef } from 'react';
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
  /* border: 2px solid blue; // ** MARKER */

  ${mobile} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
  }
`;

const Return = styled(motion.div)`
  width: 100%;
`

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
  // track width and height of grid
  const [gridDim, setGridDim] = useState({ width: 0, height: 0 });
  //  ref to get access to the grid DOM element
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);

  // useEffect when open changes and recalculates grid dimensions
  useEffect(() => {
    if (gridRef.current) {
      const { offsetWidth: width, offsetHeight: height } = gridRef.current;
      setGridDim({ width, height });
    }
  }, [open]);

  const teamBoxes = teams.map((team, i) => (
    <TeamBox
      name={team.name}
      image={team.image}
      onClick={() => setOpen(open !== i ? i : null)} // set open to the index clicked on else set to closed (null)
      key={`team-${i}`} // key for rendering
      selected={open === i}
    />
  ));

  return (
    <Return>
      {open === null ? ( // If no team is selected, render the grid
        <TG ref={gridRef}> {/* Reference to the grid for measuring its dimensions */}
          {teamBoxes} {/* Render the array of TeamBox components */}
        </TG>
      ) : ( // If a team is selected, render the info box
        <div
          style={{
            width: gridDim.width, // Set the width to match the grid's width
            height: gridDim.height, // Set the height to match the grid's height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TeamInfo 
            team={teams[open]} // Pass the selected team data to the TeamInfo component
            onClose={() => setOpen(null)} // Function to close the info box
          />
        </div>
      )}
    </Return>
  );
}