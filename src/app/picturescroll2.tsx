import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

export const Theme = () => {
  //https://i.imgur.com/pGcmjUv.png welcome to camp dillo
  //https://i.imgur.com/qVND1Cw.png stars
  //https://i.imgur.com/DQLYuNw.png tent and campfire
  //https://i.imgur.com/ycQWo8x.png trees
  //https://i.imgur.com/rqCCE03.png green curve
  //https://i.imgur.com/O8eUF7u.png mountains
  //https://i.imgur.com/8sliOt2.png red

  const foreground: BannerLayer = {
    image: 'https://i.imgur.com/O8eUF7u.png',
    // translateY: [20, 0, 'easeIn'],
    // shouldAlwaysCompleteAnimation: true,
  };

  const green: BannerLayer = {
    image: 'https://i.imgur.com/rqCCE03.png',
  };

  return <ParallaxBanner layers={[foreground, green]} />;
};
