'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { legendItems } from '@/constants/festival-map-areas';

const Section = styled.section`
  padding: 4rem 1rem 6rem;
  @media (min-width: 768px) {
    padding: 6rem 2rem 8rem;
  }
  @media (min-width: 1024px) {
    padding: 8rem 2rem 10rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  color: #d8b4fe;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const MapContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div<{ $color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.$color};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const LegendText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterNote = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2rem;
  font-size: 0.875rem;
  font-style: italic;
`;

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const mapVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(139, 92, 246, 0.8);
    transform: scale(1.1);
  }
`;

const ModalImage = styled(Image)`
  object-fit: contain;
`;

export default function FestivalLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Section>
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Header>
            <motion.div variants={titleVariants}>
              <Title>Camp Dillo Festival Map</Title>
            </motion.div>
            <motion.div variants={titleVariants}>
              <Subtitle>
                Checkout Camp Dillo's Festival Layout to plan ahead and get an
                idea of where and what you want to do!
              </Subtitle>
            </motion.div>
          </Header>

          <MapContainer
            variants={mapVariants}
            onClick={() => setIsModalOpen(true)}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/img/map-2025.png"
              alt="Festival Map Layout"
              width={900}
              height={900}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </MapContainer>

          <AnimatePresence>
            {isModalOpen && (
              <Modal
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsModalOpen(false)}
              >
                <ModalContent
                  variants={modalContentVariants}
                  onClick={(e) => e.stopPropagation()}
                >
                  <CloseButton onClick={() => setIsModalOpen(false)}>
                    ×
                  </CloseButton>
                  <ModalImage
                    src="/img/map-2025.png"
                    alt="Festival Map Layout Expanded"
                    width={1800}
                    height={1800}
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '85vh',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </ModalContent>
              </Modal>
            )}
          </AnimatePresence>

          {/* <Legend>
            {legendItems.map((item, index) => (
              <LegendItem key={index}>
                <LegendColor $color={item.color} />
                <LegendText>{item.label}</LegendText>
              </LegendItem>
            ))}
          </Legend> */}

          <FooterNote>
            *This festival map is not final and subject to change.
          </FooterNote>
        </motion.div>
      </Container>
    </Section>
  );
}
