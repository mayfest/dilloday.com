'use client';
import React, { useState } from 'react';
// import SlidingImageDeck from './past-dillos-slider';
import SliderWithFadeEffect from './past-dillos-slider';
import styled from 'styled-components';
import './font-styles.css';
import { Section } from '@/components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10rem;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  color: white;
  font-family: 'Sixtyfour', sans-serif;
  font-style: italic;
  font-size: 60px;
  white-space: nowrap;
`;
const YearsButton = styled.button`
  background-color: lightgray;
  color: black;
  padding: 5px 5px;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:hover {
    color: magenta;
    font-weight: bold;
  }
`;

const SeeDillosButton = styled.button`
  background-color: #fdd000;
  color: black;
  transition: color 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 5px;

  &:hover {
    color: black;
    font-weight: bold;
  }
`;

const Relive = styled.p`
  display: flex;
  color: white;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  margin-right: 550px;
  font-weight: bold;
`;
const images = [
  'https://i.imgur.com/OYWCQaH.jpeg',
  'https://i.imgur.com/oZEh8PY.jpeg',
];
export default function Past_Dillos() {
  return (
    <Section>
      <Main>
        {/* <div>
          <Relive>relive</Relive>
        </div> */}
        <div>
          <Header>past dillos</Header>
        </div>

        {/* <div className={styles.years}>
          <button className={styles.years}> 2011</button>
          <button className={styles.years}> 2012</button>
          <button className={styles.years}> 2013</button>
          <button className={styles.years}> 2014</button>
          <button className={styles.years}> 2016</button>
          <button className={styles.years}> 2017</button>
          <button className={styles.years}> 2018</button>
          <button className={styles.years}> 2019</button>
          <button className={styles.years}> 2020</button>
          <button className={styles.years}> 2021</button>
          <button className={styles.years}> 2022</button>
          <button className={styles.years}> 2023 </button>
        </div> */}
        <SliderWithFadeEffect />
        <div>
          <SeeDillosButton> See Dillo #!</SeeDillosButton>
        </div>
      </Main>
    </Section>
  );
}
