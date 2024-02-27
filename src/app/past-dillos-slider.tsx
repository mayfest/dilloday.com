// 'use client';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// const Images = styled.img`
//   position: relative;
//   height: 400px;
//   width: 500px;
//   padding: 20px;
// `;
// const Button = styled.button`
//   position: absolute;
//   top: 60%;
//   transform: translateY(-50%);
//   font-size: 24px;
//   background-color: transparent;
//   border: none;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     color: magenta;
//   }

//   &:first-child {
//     left: 400px;
//     font-size: 50px;
//     color: #fdd000;
//   }

//   &:last-child {
//     right: 400px;
//     font-size: 50px;
//     color: #fdd000;
//   }
// `;

// interface SlidingImageDeckProps {
//   images: string[];
// }

// const SlidingImageDeck: React.FC<SlidingImageDeckProps> = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPreviousImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div>
//       <Button onClick={goToPreviousImage}>&lt;</Button>
//       <Images
//         src={images[currentImageIndex]}
//         alt={`Image ${currentImageIndex + 1}`}
//       />
//       <Button onClick={goToNextImage}>&gt;</Button>
//     </div>
//   );
// };

// export default SlidingImageDeck;

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

interface FadeEffectProps {
  images: string[];
}
const Images = styled.img`
  position: relative;
  height: 400px;
  width: 500px;
  padding: 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: magenta;
  }

  &:first-child {
    left: 400px;
    font-size: 50px;
    color: #fdd000;
  }

  &:last-child {
    right: 400px;
    font-size: 50px;
    color: #fdd000;
  }
`;

const FadeEffect: React.FC<FadeEffectProps> = ({ images }) => {
  return (
    <Swiper
      navigation
      modules={[EffectFade, Navigation, Pagination]}
      effect="fade"
      className="mySwiper"
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <Images src={imageUrl} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SliderWithFadeEffect: React.FC = () => {
  const images = [
    'https://i.imgur.com/OYWCQaH.jpeg',
    'https://i.imgur.com/oZEh8PY.jpeg',
  ];

  return (
    <div>
      <FadeEffect images={images} />
    </div>
  );
};

export default SliderWithFadeEffect;
