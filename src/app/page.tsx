'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Homepage } from './picturescroll';
import { Theme } from './picturescroll2';

import './styles.css';

export default function Home() {
  return (
    <main>
      <div>
        <ParallaxProvider>
          <Homepage />
          {/* <div className="center full" style={{ backgroundColor: 'black' }}>
            <h1 className="headline gray">get tickets button</h1>
          </div> */}
          <Theme />
          {/* <div className="center full" style={{ backgroundColor: 'black' }}>
            <h1 className="headline gray">lol</h1>
          </div> */}
        </ParallaxProvider>
      </div>
    </main>
  );
}
