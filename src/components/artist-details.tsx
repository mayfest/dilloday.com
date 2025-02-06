import { Artist } from '../types/festival';
import Image from 'next/image';
import styled from 'styled-components';
import TwitterIcon from '@/components/icons/twitter';
import InstagramIcon from '@/components/icons/instagram';
import SpotifyIcon from '@/components/icons/spotify';
import ExitIcon from '@/components/icons/exit';
import { useState, useEffect, useCallback } from 'react';

interface ArtistDetailsProps {
  artist: Artist;
  isOpen: boolean;
  onClose: () => void;
}

const DialogOverlay = styled.div<{ $isLeaving: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  opacity: ${(props) => (props.$isLeaving ? 0 : 1)};
  transition: opacity 0.3s ease-out;
`;

const DialogContent = styled.div<{ $isLeaving: boolean }>`
  background-color: black;
  color: white;
  max-width: 56rem;
  width: 110vw;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  margin: 1.5rem;
  animation: ${(props) => (props.$isLeaving ? 'modalExit' : 'modalEnter')} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @keyframes modalEnter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes modalExit {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const DialogHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const DialogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
`;

const SectionContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const Description = styled.p`
  color: #d1d5db;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid white;
  border-radius: 0.375rem;
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default function ArtistDetails({
  artist,
  isOpen,
  onClose,
}: ArtistDetailsProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 400);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <DialogOverlay
      $isLeaving={isLeaving}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <DialogContent $isLeaving={isLeaving}>
        <CloseButton onClick={handleClose}>
          <ExitIcon className="h-6 w-6" />
        </CloseButton>
        <DialogHeader>
          <DialogTitle>{artist.artist}</DialogTitle>
        </DialogHeader>
        <Grid>
          <ImageContainer>
            <Image
              src={artist.image}
              alt={artist.artist}
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageContainer>
          <ContentSection>
            <div>
              <SectionTitle>Performance Time</SectionTitle>
              <SectionContent>
                {artist.time} ({artist.duration})
              </SectionContent>
            </div>
            <div>
              <SectionTitle>Genre</SectionTitle>
              <SectionContent>{artist.genre}</SectionContent>
            </div>
            <div>
              <SectionTitle>About</SectionTitle>
              <Description>{artist.description}</Description>
            </div>
            <SocialLinksContainer>
              {artist.socialLinks.spotify && (
                <SocialButton
                  href={artist.socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpotifyIcon className="h-4 w-4" />
                </SocialButton>
              )}
              {artist.socialLinks.instagram && (
                <SocialButton
                  href={artist.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="h-4 w-4" />
                </SocialButton>
              )}
              {artist.socialLinks.twitter && (
                <SocialButton
                  href={artist.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="h-4 w-4" />
                </SocialButton>
              )}
            </SocialLinksContainer>
          </ContentSection>
        </Grid>
      </DialogContent>
    </DialogOverlay>
  );
}
