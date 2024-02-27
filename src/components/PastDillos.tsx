import { Section } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import styles from './PastDillos.module.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import styled from 'styled-components';

const Image = styled.img`
  width: 75%;
  height: 100%;
`;

export default function PastDillos() {
  const images = [
    'https://i.imgur.com/OYWCQaH.jpeg',
    'https://i.imgur.com/oZEh8PY.jpeg',
  ];
  return (
    <Section>
      <Swiper
        navigation
        modules={[EffectCards, Navigation]}
        effect="cards"
        className={styles.swiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Image src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
