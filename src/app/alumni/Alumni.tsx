'use client';

import { mobile } from '@/components';
import { db } from '@/lib/app';
import { history } from '@/lib/history';
import { doc, setDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

// ─── TODO ─────────────────────────────────────────────────────────────────────
// * Upload corp pitch deck
// * Encorperate normal alumni tickets
// * Create alumni@dilloday.com email (forward to dilloday@u.northwestern.edu for now)
// * Revise Dillo Archives section (Marina + Joss)
// ─── Shared ───────────────────────────────────────────────────────────────────

const SectionLabel = styled.span`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(216, 180, 254, 0.12);
  border: 1px solid rgba(216, 180, 254, 0.25);
  color: #d8b4fe;
  margin-bottom: 16px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;

  ${mobile} {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 20px;
  opacity: 0.65;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  ${mobile} {
    font-size: 16px;
  }
`;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroContainer = styled.section`
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  opacity: 0.35;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.75)
  );
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 24px;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;

  ${mobile} {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 22px;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  ${mobile} {
    font-size: 17px;
  }
`;

const HeroButton = styled.button`
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition:
    background 150ms,
    transform 150ms;

  &:hover {
    background: #d8b4fe;
    transform: translateY(-2px);
  }
`;

// ─── Alumni Network ───────────────────────────────────────────────────────────

const AlumniSection = styled.section`
  padding: 80px 24px;
  background: #0a0a0a;
`;

const AlumniInner = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

const TierLabel = styled.span`
  display: inline-block;
  padding: 8px 20px;
  background: #d8b4fe;
  color: #000000;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const CompanyGrid = styled.div<{ $large?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(p) => (p.$large ? '16px' : '12px')};
  margin-bottom: ${(p) => (p.$large ? '48px' : '0')};

  ${mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CompanyCard = styled(motion.div)<{ $large?: boolean }>`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => (p.$large ? '112px' : '80px')};
  padding: ${(p) => (p.$large ? '24px' : '16px')};
  border: 2px solid transparent;
  transition: border-color 200ms;

  &:hover {
    border-color: #d8b4fe;
  }
`;

const CompanyLogo = styled.img<{ $large?: boolean }>`
  height: ${(p) => (p.$large ? '36px' : '28px')};
  object-fit: contain;
  max-width: 100%;
`;

const AlumniCTA = styled.div`
  text-align: center;
  margin-top: 48px;
`;

const AlumniCTAText = styled.p`
  opacity: 0.55;
  margin-bottom: 8px;
  font-size: 15px;
`;

const AlumniCTALink = styled.a`
  color: #d8b4fe;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

// ─── Newsletter ───────────────────────────────────────────────────────────────

const NewsletterOuter = styled.section`
  background: linear-gradient(135deg, #3b0764 0%, #1e0442 50%, #0a0015 100%);
  padding: 80px 24px;
`;

const NewsletterInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const NewsletterHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;

  ${mobile} {
    padding: 24px 16px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;

  ${mobile} {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 0.7;
  text-transform: uppercase;
`;

const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 15px;
  outline: none;
  transition: border-color 150ms;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: #d8b4fe;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #d8b4fe;
  flex-shrink: 0;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
  line-height: 1.5;
  opacity: 0.8;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #d8b4fe;
  color: #000000;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition:
    background 150ms,
    transform 150ms;

  &:hover {
    background: #c084fc;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  color: #d8b4fe;
  font-size: 15px;
  padding: 16px 0;
`;

const PastNewslettersCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  margin-top: 16px;

  ${mobile} {
    padding: 20px 16px;
  }
`;

const PastNewslettersToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: inline-block;
  transition: transform 200ms;
  transform: ${(p) => (p.$open ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: 0.6;
  font-size: 20px;
`;

const NewsletterList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  ${mobile} {
    grid-template-columns: 1fr;
  }
`;

const NewsletterItem = styled.a`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    background 150ms,
    border-color 150ms;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(216, 180, 254, 0.3);
  }
`;

const NewsletterItemDate = styled.span`
  font-size: 11px;
  opacity: 0.45;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const NewsletterItemTitle = styled.span`
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 48px;
`;

const SocialLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 150ms;

  &:hover {
    opacity: 1;
  }
`;

const ContactLine = styled.div`
  text-align: center;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    opacity: 0.55;
    font-size: 14px;
    margin-bottom: 8px;
  }

  a {
    color: #d8b4fe;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ─── Donation ─────────────────────────────────────────────────────────────────

const DonationOuter = styled.section`
  padding: 80px 24px;
  background: #000000;
`;

const DonationInner = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const VIPCard = styled(motion.div)`
  max-width: 560px;
  margin: 0 auto 32px;
  position: relative;
  background: linear-gradient(135deg, #1a0533 0%, #0f0020 100%);
  border: 2px solid #d8b4fe;
  border-radius: 16px;
  padding: 48px 40px 40px;
  text-align: center;
  box-shadow: 0 0 60px rgba(216, 180, 254, 0.12);

  ${mobile} {
    padding: 40px 20px 32px;
  }
`;

const VIPBadge = styled.span`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #d8b4fe;
  color: #000000;
  padding: 6px 20px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
`;

const VIPEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const VIPTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const VIPPrice = styled.p`
  font-size: 18px;
  color: #d8b4fe;
  font-weight: 600;
  margin-bottom: 32px;
`;

const VIPPerks = styled.ul`
  list-style: none;
  text-align: left;
  margin-bottom: 32px;
`;

const VIPPerk = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  font-size: 15px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-bottom: none;
  }
`;

const PerkCheck = styled.span`
  color: #d8b4fe;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const DonateButton = styled.a`
  display: block;
  width: 100%;
  padding: 14px;
  background: #d8b4fe;
  color: #000000;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition:
    background 150ms,
    transform 150ms;
  box-sizing: border-box;

  &:hover {
    background: #c084fc;
    transform: translateY(-1px);
  }
`;

const DonateNote = styled.p`
  font-size: 13px;
  opacity: 0.45;
  margin-top: 12px;
`;

const CustomGiftBox = styled.div`
  max-width: 560px;
  margin: 0 auto 48px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
`;

const CustomGiftTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const CustomGiftText = styled.p`
  opacity: 0.55;
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const OutlineButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition:
    border-color 150ms,
    color 150ms;

  &:hover {
    border-color: #d8b4fe;
    color: #d8b4fe;
  }
`;

const DonationDisclaimer = styled.p`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  font-size: 13px;
  opacity: 0.4;
  line-height: 1.7;
`;

// ─── Corporate Sponsorship ────────────────────────────────────────────────────

const CorpSection = styled.section`
  padding: 80px 24px;
  background: #0a0a0a;
`;

const CorpInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CorpIcon = styled.div`
  font-size: 56px;
  margin-bottom: 16px;
`;

const CorpButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #d8b4fe;
  color: #000000;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition:
    background 150ms,
    transform 150ms;

  &:hover {
    background: #c084fc;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition:
    border-color 150ms,
    color 150ms,
    transform 150ms;

  &:hover {
    border-color: #d8b4fe;
    color: #d8b4fe;
    transform: translateY(-1px);
  }
`;

// ─── Archives ─────────────────────────────────────────────────────────────────

const ArchivesOuter = styled.section`
  padding: 80px 24px;
  background: #000000;
`;

const ArchivesInner = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const ArchivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArchiveCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

const ArchiveImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms;
`;

const ArchiveOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  z-index: 1;
`;

const ArchiveInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px 10px;
  z-index: 2;
`;

const ArchiveYear = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 3px;
`;

const ArchiveHeadliner = styled.div`
  font-size: 10px;
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArchivesFooter = styled.div`
  text-align: center;
  margin-top: 48px;

  p {
    opacity: 0.5;
    font-size: 14px;
  }

  a {
    color: #d8b4fe;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const entertainmentCompanies = [
  {
    name: 'CAA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Creative_Artists_Agency_logo_%28no_text%29.svg',
  },
  {
    name: 'UTA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/United_Talent_Agency_logo.svg',
  },
  {
    name: 'The Team',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/The_team_logo_v2.svg',
  },
  {
    name: 'Live Nation',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Live_Nation_Entertainment_logo.svg',
  },
];

const otherCompanies = [
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'JPMorgan Chase',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_JPMorganChase_2024.svg',
  },
  {
    name: 'Bain & Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Bain_%26_Company_logo.svg',
  },
  {
    name: 'McKinsey',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/McKinsey_Script_Mark_2019.svg',
  },
  {
    name: 'NBCUniversal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/NBCUniversal_2026_Logo.svg',
  },
  {
    name: 'Wall Street Journal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/WSJ_Logo.svg',
  },
  {
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tesla_Motors_Logo.svg',
  },
];

const pastNewsletters = [
  { date: 'March 2026', title: 'Mayfest Alumni Newsletter: Winter 2026 Edition', href: '/./newsletters/alumni-newsletter-w26.pdf' },
  { date: 'May 2025', title: 'Mayfest Alumni Newsletter - First Edition', href: '/./newsletters/alumni-newsletter-fe.pdf' },
];

const GIVING_URL = 'https://giving.nu/Mayfest';

// ─── Component ────────────────────────────────────────────────────────────────

export default function Alumni() {
  const [email, setEmail] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [mentorInterest, setMentorInterest] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showNewsletters, setShowNewsletters] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setDoc(doc(db, 'alumni_subscribers', email), {
      email,
      graduationYear: gradYear,
      mentorInterest,
      createdAt: new Date(),
    })
      .then(() => setFormState('success'))
      .catch((error) => {
        console.error(error);
        setFormState('error');
      });
  };

  const scrollToNewsletter = () => {
    document.getElementById('alumni-newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const archiveYears = [...history].reverse();

  return (
    <main>
      {/* ── Hero ── */}
      <HeroContainer>
        <HeroBg>
          <HeroImg src="/background.jpg" alt="Dillo Day crowd" />
          <HeroOverlay />
        </HeroBg>
        <HeroContent variants={fadeUp} initial="initial" animate="animate">
          <HeroTitle>
            Once Mayfest,
            <br />
            Always Mayfest.
          </HeroTitle>
          <HeroSubtitle>
            Connect with the network that builds the nation&apos;s largest student-run music
            festival.
          </HeroSubtitle>
          <HeroButton onClick={scrollToNewsletter}>Join the Alumni Newsletter</HeroButton>
        </HeroContent>
      </HeroContainer>

      {/* ── Alumni Network ── */}
      <AlumniSection>
        <AlumniInner>
          <SectionHeader>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <SectionLabel>Our Network</SectionLabel>
              <SectionTitle>Where We Are Now</SectionTitle>
              <SectionSubtitle>
                Mayfest alumni are shaping the future of entertainment, technology, and beyond.
              </SectionSubtitle>
            </motion.div>
          </SectionHeader>

          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <TierLabel>Leaders in Entertainment</TierLabel>
          </div>
          <CompanyGrid $large>
            {entertainmentCompanies.map((c, i) => (
              <CompanyCard
                $large
                key={c.name}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <CompanyLogo $large src={c.logo} alt={c.name} />
              </CompanyCard>
            ))}
          </CompanyGrid>

          <CompanyGrid>
            {otherCompanies.map((c, i) => (
              <CompanyCard
                key={c.name}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <CompanyLogo src={c.logo} alt={c.name} />
              </CompanyCard>
            ))}
          </CompanyGrid>

          <AlumniCTA>
            <AlumniCTAText>Are you a Mayfest alum? Tell us where you&apos;re working.</AlumniCTAText>
            <AlumniCTALink
              href="https://forms.gle/KYrKVSTS8mp5SDfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Your Company →
            </AlumniCTALink>
          </AlumniCTA>
        </AlumniInner>
      </AlumniSection>

      {/* ── Newsletter ── */}
      <NewsletterOuter id="alumni-newsletter">
        <NewsletterInner>
          <NewsletterHeader>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <SectionTitle>Stay Connected</SectionTitle>
              <SectionSubtitle>
                Join our alumni network and never miss an update.
              </SectionSubtitle>
            </motion.div>
          </NewsletterHeader>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <FormCard>
              {formState === 'success' ? (
                <StatusMessage>Thanks for signing up! We&apos;ll be in touch soon.</StatusMessage>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormGrid>
                    <FormField>
                      <FormLabel htmlFor="alumni-email">Email Address *</FormLabel>
                      <FormInput
                        id="alumni-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </FormField>
                    <FormField>
                      <FormLabel htmlFor="alumni-grad-year">Graduation Year</FormLabel>
                      <FormInput
                        id="alumni-grad-year"
                        type="text"
                        placeholder="e.g., 2018"
                        value={gradYear}
                        onChange={(e) => setGradYear(e.target.value)}
                      />
                    </FormField>
                  </FormGrid>
                  <CheckboxRow>
                    <Checkbox
                      id="alumni-mentor"
                      type="checkbox"
                      checked={mentorInterest}
                      onChange={(e) => setMentorInterest(e.target.checked)}
                    />
                    <CheckboxLabel htmlFor="alumni-mentor">
                      I&apos;m interested in mentoring current Mayfest members
                      <br />
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875em' }}>
                        Help the next generation navigate entertainment, production, and beyond.
                      </span>
                    </CheckboxLabel>
                  </CheckboxRow>
                  <SubmitButton type="submit" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? '...' : 'Subscribe to Newsletter'}
                  </SubmitButton>
                  {formState === 'error' && (
                    <StatusMessage>Something went wrong. Please try again.</StatusMessage>
                  )}
                </form>
              )}
            </FormCard>

            <PastNewslettersCard>
              <PastNewslettersToggle onClick={() => setShowNewsletters((v) => !v)}>
                <span>Past Newsletters</span>
                <Chevron $open={showNewsletters}>▾</Chevron>
              </PastNewslettersToggle>
              {showNewsletters && (
                <NewsletterList>
                  {pastNewsletters.map((n, i) => (
                    <NewsletterItem key={i} href={n.href} rel="noreferrer" target="_blank">
                      <NewsletterItemDate>{n.date}</NewsletterItemDate>
                      <NewsletterItemTitle>{n.title}</NewsletterItemTitle>
                    </NewsletterItem>
                  ))}
                </NewsletterList>
              )}
            </PastNewslettersCard>
          </motion.div>

          <SocialRow>
            <SocialLink
              href="https://www.linkedin.com/company/3538800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/dillo_day"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@dilloday"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </SocialLink>
          </SocialRow>

          <ContactLine>
            <p>Questions? Reach out to our Alumni Relations team:</p>
            <a href="mailto:alumni@dilloday.com">alumni@dilloday.com</a>
          </ContactLine>
        </NewsletterInner>
      </NewsletterOuter>

      {/* ── Donation ── */}
      <DonationOuter>
        <DonationInner>
          <motion.div
            style={{ textAlign: 'center', marginBottom: 64 }}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionTitle>Fuel the Festival</SectionTitle>
            <SectionSubtitle>
              Your gift keeps Dillo Day free for students and secure for everyone. All contributions
              are processed securely through Northwestern Alumni Relations &amp; Development.
            </SectionSubtitle>
          </motion.div>

          <VIPCard
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <VIPBadge>VIP Experience</VIPBadge>
            <VIPEmoji>🌟</VIPEmoji>
            <VIPTitle>Alumni VIP Package</VIPTitle>
            <VIPPrice>$100+ Donation</VIPPrice>
            <VIPPerks>
              <VIPPerk>
                <PerkCheck>✓</PerkCheck>
                <span>
                  <strong>VIP viewing experience</strong>
                </span>
              </VIPPerk>
              <VIPPerk>
                <PerkCheck>✓</PerkCheck>
                <span>
                  <strong>Private bathrooms</strong>
                </span>
              </VIPPerk>
              <VIPPerk>
                <PerkCheck>✓</PerkCheck>
                <span>
                  Limited edition <strong>Dillo 54 alumni poster</strong>
                </span>
              </VIPPerk>
              <VIPPerk>
                <PerkCheck>✓</PerkCheck>
                <span>
                  Name featured on the <strong>&ldquo;Alumni Wall of Fame&rdquo;</strong> banner
                </span>
              </VIPPerk>
            </VIPPerks>
            {/* <DonateButton href={GIVING_URL} target="_blank" rel="noopener noreferrer">
              Claim Your VIP Package
            </DonateButton> */}
            <DonateButton as="div" style={{ opacity: 0.45, cursor: "not-allowed", pointerEvents: "none" }}>
              Coming to Dillo 55
            </DonateButton>
            <DonateNote>Redirects to the secure Northwestern giving portal</DonateNote>
          </VIPCard>

          <CustomGiftBox>
            <CustomGiftTitle>Make an Impact of Any Size</CustomGiftTitle>
            <CustomGiftText>
              Not ready for VIP? Any contribution helps bring world-class artists to the lakefill.
            </CustomGiftText>
            <OutlineButton href={GIVING_URL} target="_blank" rel="noopener noreferrer">
              Make a Custom Gift
            </OutlineButton>
          </CustomGiftBox>

          <DonationDisclaimer>
            <strong>How to claim VIP perks:</strong> Make a donation of $100 or more through the
            Northwestern Giving portal. Once your gift is processed, our Alumni Relations team will
            email you a confirmation form with pickup instructions for your VIP wristband and perks.
          </DonationDisclaimer>
        </DonationInner>
      </DonationOuter>

      {/* ── Corporate Sponsorship ── */}
      <CorpSection>
        <CorpInner>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CorpIcon>🏢</CorpIcon>
            <SectionLabel>Corporate Partners</SectionLabel>
            <SectionTitle>Partner Your Company with Dillo</SectionTitle>
            <SectionSubtitle>
              Bring your brand to 12,000+ attendees. From on-site activations to digital presence,
              we build custom packages for our alumni partners.
            </SectionSubtitle>
            <CorpButtons>
              <PrimaryButton href="/sponsorship-deck.pdf" target="_blank" rel="noopener noreferrer">
                Download Sponsorship Deck
              </PrimaryButton>
              <SecondaryButton href="mailto:corporate@dilloday.com">
                Email Corporate Team
              </SecondaryButton>
            </CorpButtons>
          </motion.div>
        </CorpInner>
      </CorpSection>

      {/* ── Archives ── */}
      <ArchivesOuter>
        <ArchivesInner>
          <motion.div
            style={{ textAlign: 'center', marginBottom: 56 }}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionTitle>The Mayfest Archives</SectionTitle>
            <SectionSubtitle>
              Take a trip down memory lane. Which year was yours?
            </SectionSubtitle>
          </motion.div>

          <ArchivesGrid>
            {archiveYears.map((event, i) => (
              <ArchiveCard
                key={event.year}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <ArchiveImg src={event.image} alt={`Dillo Day ${event.year}`} />
                <ArchiveOverlay />
                <ArchiveInfo>
                  <ArchiveYear>{event.year}</ArchiveYear>
                  {event.artists?.[0]?.names?.length ? (
                    <ArchiveHeadliner>
                      {event.artists[0].names[0]}
                    </ArchiveHeadliner>
                  ) : null}
                </ArchiveInfo>
              </ArchiveCard>
            ))}
          </ArchivesGrid>

          <ArchivesFooter>
            <p>
              Want to share your Dillo Day memories?{' '}
              <a href="mailto:alumni@dilloday.com">Send us your photos and stories</a>
            </p>
          </ArchivesFooter>
        </ArchivesInner>
      </ArchivesOuter>
    </main>
  );
}
