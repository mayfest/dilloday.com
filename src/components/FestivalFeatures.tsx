'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'Food Truck Vendors',
    description:
      'Explore a diverse culinary experience with our carefully curated selection of food trucks offering everything from local favorites to international cuisine.',
    image: '/img/tech-team.jpg',
  },
  {
    title: 'Gen Board Project',
    description:
      'Experience the innovative Gen Board project, showcasing the latest in festival technology and interactive experiences for all attendees.',
    image: '/img/tech-team.jpg',
  },
  {
    title: 'Main Stage/FMO Stage',
    description:
      'Two incredible stages featuring world-class performances, state-of-the-art sound systems, and unforgettable moments throughout the festival.',
    image: '/img/tech-team.jpg',
  },
  {
    title: 'Sponsor Venues/Events',
    description:
      'Visit our sponsor venues for exclusive events, special performances, and unique brand experiences throughout the festival grounds.',
    image: '/img/tech-team.jpg',
  },
  {
    title: 'Beer Garden',
    description:
      'Relax in our expansive beer garden featuring craft brews, comfortable seating, and a perfect view of the festival atmosphere.',
    image: '/img/tech-team.jpg',
  },
  {
    title: 'Student Art Showcase',
    description:
      'Discover amazing artwork created by talented students, featuring installations, performances, and interactive exhibits.',
    image: '/img/tech-team.jpg',
  },
];

export default function FestivalCarousel() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [previousGroup, setPreviousGroup] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate items per group based on screen size
  const getItemsPerGroup = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const totalGroups = Math.ceil(features.length / getItemsPerGroup());

  const getFeatureGroup = (groupIndex: number) => {
    const startIndex = groupIndex * getItemsPerGroup();
    return features.slice(startIndex, startIndex + getItemsPerGroup());
  };

  const nextGroup = () => {
    if (isAnimating) return;
    setPreviousGroup(currentGroup);
    setDirection('right');
    setIsAnimating(true);
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    if (isAnimating) return;
    setPreviousGroup(currentGroup);
    setDirection('left');
    setIsAnimating(true);
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getGridColumns = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  const FeatureGroup = ({
    features,
    isActive,
    animationClass,
  }: {
    features: Feature[];
    isActive: boolean;
    animationClass: string;
  }) => (
    <div
      className={`grid ${getGridColumns()} gap-4 md:gap-8 lg:gap-12 w-full absolute inset-0 px-4 md:px-12 lg:px-20 transition-transform duration-500 ease-in-out ${animationClass}`}
    >
      {features.map((feature, index) => (
        <div
          key={`${index}`}
          className="flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg shadow-purple-900/20 border border-purple-900/20"
        >
          <div className="relative h-80 md:h-94 lg:h-[50rem]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-purple-300">
              {feature.title}
            </h3>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 flex-1">
              {expandedIndex === index
                ? feature.description
                : `${feature.description.slice(0, 100)}...`}
            </p>
            <button
              className="px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base border border-purple-500/30 rounded-md text-purple-300 hover:bg-purple-900/20 w-fit transition-colors"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              {expandedIndex === index ? 'SHOW LESS -' : 'SHOW MORE +'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-8 md:py-12 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 text-white text-glow">
            Dillo Day At A Glance
          </h2>
          <p className="text-lg md:text-xl text-purple-300">
            We&apos;re dedicated to making the Dillo Day experience
            unforgettable for all attendees with a variety of features and
            attractions.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative h-[32rem] md:h-[40rem] lg:h-[48rem]">
            {/* Previous group */}
            {isAnimating && (
              <FeatureGroup
                features={getFeatureGroup(previousGroup)}
                isActive={false}
                animationClass={
                  direction === 'right'
                    ? 'translate-x-0 animate-slide-out-left'
                    : 'translate-x-0 animate-slide-out-right'
                }
              />
            )}

            {/* Current group */}
            <FeatureGroup
              features={getFeatureGroup(currentGroup)}
              isActive={true}
              animationClass={
                isAnimating
                  ? direction === 'right'
                    ? 'translate-x-full animate-slide-in-right'
                    : '-translate-x-full animate-slide-in-left'
                  : 'translate-x-0'
              }
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            className="p-2 md:p-3 rounded-full text-purple-300 hover:bg-purple-900/20 transition-colors disabled:opacity-50"
            onClick={prevGroup}
            disabled={isAnimating}
          >
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          <div className="flex justify-center gap-2 md:gap-3">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                className={`h-1.5 md:h-2 w-1.5 md:w-2 rounded-full transition-colors ${
                  index === currentGroup ? 'bg-purple-500' : 'bg-purple-900/20'
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setDirection(index > currentGroup ? 'right' : 'left');
                    setPreviousGroup(currentGroup);
                    setIsAnimating(true);
                    setCurrentGroup(index);
                  }
                }}
                disabled={isAnimating}
              />
            ))}
          </div>

          <button
            className="p-2 md:p-3 rounded-full text-purple-300 hover:bg-purple-900/20 transition-colors disabled:opacity-50"
            onClick={nextGroup}
            disabled={isAnimating}
          >
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
