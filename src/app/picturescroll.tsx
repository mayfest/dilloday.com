import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

export const Homepage = () => {
  const background: BannerLayer = {
    image: 'https://i.imgur.com/qIqYpV8.jpeg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">yayyyy mayfest</h1>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="full"
    />
  );
};
