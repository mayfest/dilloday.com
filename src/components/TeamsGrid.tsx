'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import TeamBox from './TeamBox';
import TeamInfo from './TeamInfo';
import { Section, mobile } from '@/components';
import { motion } from 'framer-motion';

// Team grid
const TG = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: auto;
  font-size: 14px;

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
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// https://www.framer.com/motion/ use this to display the panels
// AOS (animate on scroll)
const TeamsGrid: React.FC = () => {
  const [rowOne, setRowOne] = useState<number | null>(null);
  const [rowTwo, setRowTwo] = useState<number | null>(null);

  // List of team info 
  const teamMembers = [
    {
      name: 'BOOKINGS',
      description:
        'The Booking Committee books the Dillo Day mainstage lineup. Members work directly with talent agencies, write offers, negotiate prices, and handle contracts for all of the Dillo Day artists. Booking’s main goal is to create a diverse, representative festival lineup that appeals to the Northwestern community and brings out the greatest number of students to the lakefill. The Booking Committee plays a major role in making Dillo Day a memorable experience for the entire student body.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'COMMUNITY',
      description:
        "The Community committee's primary responsibility remains integrating diversity, inclusion, and wellness best practices throughout the organization. Pointedly, the committee facilitates quarterly cultural awareness trainings and internal wellness forums to cultivate a welcoming environment in the organization and ensure the wellbeing of the organization’s members. Additionally, the committee aids the Promotions committee in developing recruitment initiatives to reach untapped segments of Northwestern’s campus.",
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'CORPORATE',
      description:
        'The Corporate Committee is in charge of securing sponsored-based funding; partnering with on-campus, local, and national organizations. All funds raised by the Corporate Committee go directly to improving the quality of artists and the Dillo Day festival experience. The Corporate Committee builds professional-grade pitch decks, communicates with sponsors, and works with other Mayfest committees to implement sponsorship agreements. They also manage the food vendors at Dillo Day.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'FINANCE',
      description:
        'The Finance Committee manages the budget of one of the largest financially-backed student organizations at Northwestern University. The committee works closely with all of Mayfest’s committees and Northwestern financial administrators to facilitate the allocation of funds for all aspects of Dillo Day. Finance is responsible for obtaining the majority of funding and ensuring all payments are made accurately and on-time. Additionally, the committee is working towards more data/statistics related projects on a sub-committee that would benefit Mayfest as a whole.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'OPERATIONS',
      description:
        'The Operations Committee serves as the primary liaison between Mayfest and Northwestern administration for the biggest and most logistically challenging event of the year. The committee works closely with NUPD, the Norris Student Center, the Neighborhood and Community Relations Office, and ambulance services to design, implement, and oversee the Dillo Day security plan, coordinate school-wide wristband distribution and admission, and create an entertaining and safe environment for the Beer Garden. Additionally, Operations has recently prioritized a new safety and wellness initiative focusing on student-led de-escalation tactics and drug overdose mitigation while pushing sustainability a new priority of the festival.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PRODUCTIONS',
      description:
        "The Production Committee is instrumental in planning and executing the logistics of Dillo Day. The committee handles every aspect of producing a professional-grade music festival, which takes on a range of duties such as: coordinating staging, video/lights, fencing and tents; managing artist contracts, performances and all related aspects of the musical acts' Dillo Day experience; and working with outside vendors, artist agents, university administration, and other Mayfest committees to ensure that Dillo Day goes off without a hitch.",
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PROGRAMMING',
      description:
        'The Programming Committee plans and executes various music-related events throughout the year bringing together the efforts of all Mayfest committees. In previous years, events have included Battle of the Bands, Battle of the DJs, a week of programming preceding Dillo Day, and many more. Additionally, the committee is in charge of the Lakefill Programming during the festival including local vendors, carnival games, and student art. Programming elevates Dillo Day from beyond a music festival to an immersive experience. The aim of the committee is to creatively engage and excite both the campus and Mayfest leading up to and throughout Dillo Day.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'PROMOTIONS',
      description:
        'The Promotions Committee is responsible for designing and distributing all promotional materials pertaining to Mayfest Productions and Dillo Day. Pointedly, the committee executes all artist announcements, creates merchandise and digital content, and produces marketing campaigns for Mayfest events. Promo engages and interacts with the student body through our social media pages and manages the virtual presence of the organization and music festival. Ultimately, the committee’s primary goal is to create and maintain a cohesive brand image for both Mayfest and Dillo Day and relay exciting updates about our work to the greater student body.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'TECHNOLOGY',
      description:
        "The Tech Team Committee develops everything from the website you are on now to the mobile app and virtual performance live-stream. The committee’s role is to make sure that every element of Dillo Day is accessible, engaging, and creative! The Tech Team's primary goal is to utilize technology in order to create a more inclusive, safe, and enjoyable Dillo Day experience. Every year, the Tech Team adds new features to their mobile application, such as the interactive festival map and lineup, in order to ensure the best festival experience.",
      image: 'https://i.imgur.com/TMeCJar.png',
    },
    {
      name: 'CO-CHAIRS & GENERAL BOARD',
      description:
        'The General Board is led by the two co-chairs of Mayfest Productions. The committee referred to as Gen Board is comprised of first year and second year students who shadow other committees in the winter and spring quarters to better integrate themselves into the Mayfest community and get exposure to the responsibilities they would have as a committee member. Typically, Gen Board members have returned the following year as a committee member of one of the groups they shadowed. Ultimately, membership on this committee serves as a great way to bolster one’s knowledge about the organization and its many functions.',
      image: 'https://i.imgur.com/TMeCJar.png',
    },
  ];

  // if one row is open, close the other if other is open
  const handleRowOneClick = (index: number) => {
    if (rowOne === index) {
      setRowOne(null);
    } else {
      setRowOne(index);
      if (rowTwo !== null) {
        setRowTwo(null);
      }
    }
  };

  const handleRowTwoClick = (index: number) => {
    if (rowTwo === index) {
      setRowTwo(null);
    } else {
      setRowTwo(index);
      if (rowOne !== null) {
        setRowOne(null);
      }
    }
  };

  return (
    <Section>
      <TG variants={container} initial="hidden" animate="visible">
        {/* ROW ONE */}
        {teamMembers.slice(0, 5).map((member, index) => (
          <motion.div key={index} className="item" variants={item}>
            <TeamBox
              name={member.name}
              image={member.image}
              onClick={() => handleRowOneClick(index)}
            />
          </motion.div>
        ))}
        {rowOne !== null && (
          <TeamInfo
            isOpen={true}
            onClose={() => setRowOne(null)}
            name={teamMembers[rowOne].name}
            description={teamMembers[rowOne].description}
          />
        )}
        {/* ROW TWO */}
        {teamMembers.slice(5).map((member, index) => (
          <motion.div key={index + 5} className="item" variants={item}>
            <TeamBox
              name={member.name}
              image={member.image}
              onClick={() => handleRowTwoClick(index + 5)}
            />
          </motion.div>
        ))}
        {rowTwo !== null && (
          <TeamInfo
            isOpen={true}
            onClose={() => setRowTwo(null)}
            name={teamMembers[rowTwo].name}
            description={teamMembers[rowTwo].description}
          />
        )}
      </TG>
    </Section>
  );
};

export default TeamsGrid;