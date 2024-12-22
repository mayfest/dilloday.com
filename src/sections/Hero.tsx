'use client';

import { useState, useEffect } from 'react';
import { getHrefProps, navigation } from '@/lib/directory';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import GradientDivider from '../components/GradientDivider';

function calculateTimeLeft() {
  const difference = new Date('2025-05-17').getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen bg-gray-900">
      <div className="h-full relative isolate overflow-hidden pt-14">
        <img
          src="/background.jpg"
          alt="Background Image"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[360px]">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(40%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto w-[70%] py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <p className="font-bold text-white opacity-75 text-glow text-2xl">
              05.17.25
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-9xl text-glow">
              DILLO DAY
            </h1>
            <div className="font-bold text-white opacity-75 text-glow space-x-2">
              <span className="inline-block min-w-[ch]">
                {String(timeLeft.days).padStart(3, '0')}
              </span>
              <span>days</span>
              <span className="inline-block min-w-[2ch]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>hours</span>
              <span className="inline-block min-w-[2ch]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>minutes</span>
              <span className="inline-block min-w-[2ch]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span>seconds</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <button
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center opacity-50 transition-all duration-300 hover:translate-y-2 hover:opacity-100"
          onClick={() => {
            document
              .querySelector('#about')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDownIcon className="h-8 w-8 text-white stroke-[3px]" />
        </button>
        <GradientDivider bottom height={64} />
      </div>
    </div>
  );
}
