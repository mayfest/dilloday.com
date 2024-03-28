import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import styles from './PastDillosCarousel.module.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper.css';
import styled from 'styled-components';
import { history } from '@/lib/history';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { mobile } from '.';

const Container = styled.div`
  margin: 64px 0;
`;

const Slide = styled(motion.button)`
  width: 75%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const SlideTitleContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 8px 16px;
  background: rgba(100, 100, 100, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 8px;
`;

const SlideTitleText = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  text-align: right;

  ${mobile} {
    font-size: 16px;
  }
`;

const SlideTitleDate = styled.p`
  color: #f0f0f0;
  font-size: 14px;
  text-align: right;
  font-weight: 400;

  ${mobile} {
    font-size: 12px;
  }
`;

const Note = styled.p`
  text-align: center;
  margin: 16px 0;
  font-size: 14px;
  opacity: 0.5;
`;

interface PastDillosCarouselProps {
  slide: number;
  setSlide: (slide: number) => void;
  viewSlide: (slide: number) => void;
}

export default function PastDillosCarousel({
  slide,
  setSlide,
  viewSlide,
}: PastDillosCarouselProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(slide);
    }
  }, [slide, swiper]);

  return (
    <Container>
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        className="history-swiper"
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(e) => {
          setSlide(e.activeIndex);
        }}
      >
        {history.map((dillo, i) => (
          <SwiperSlide key={`history-${i}`} className="history-swiper-slide">
            <Slide
              layoutId={`history-slide-${i}`}
              onClick={() => viewSlide(i)}
              style={{
                zIndex: i === slide ? 102 : undefined,
              }}
            >
              <Image src={dillo.image} alt={`Dillo Day ${dillo.year}`} />
              <SlideTitleContainer>
                <SlideTitleText>Dillo Day {dillo.year}</SlideTitleText>
                <SlideTitleDate>{dillo.date}</SlideTitleDate>
              </SlideTitleContainer>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
      <Note>click on a slide for more info</Note>
    </Container>
  );
}
