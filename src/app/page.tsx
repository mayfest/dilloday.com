import { Metadata } from 'next';
import About from '@/sections/About';
import Support from '@/sections/Support';
import Hero from '@/sections/Hero';
import FestivalSchedule from '@/sections/lineup';
import MailingList from '@/sections/MailingList';
import MobileApp from '@/sections/MobileApp';
import PastDillos from '@/sections/PastDillos';
import Tickets from '@/sections/Tickets';
import Sponsors from '@/sections/Sponsors';
import FestivalCarousel from '@/components/festival-features';
import FestivalLayout from '@/components/festival-layout';
import Team from '@/sections/Team';
import EventInformation from '@/sections/EventInformation';
import HorizontalStoreComponent from '@/components/store';
import SmartDilloBanner from '@/sections/smart-dillo';

export const metadata: Metadata = {
  title: 'Dillo Day',
  description:
    "Mayfest Productions presents Dillo Day, the nation's largest student-run music festival.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      {/* <EventInformation /> */}
      <Tickets />
      <SmartDilloBanner />
      {/* <FestivalSchedule /> */}
      {/* <FestivalLayout /> */}
      {/* <MobileApp /> */}
      <HorizontalStoreComponent />
      <FestivalCarousel />
      <PastDillos />
      <Team />
      <Sponsors />
      <Support />
      <MailingList />
    </>
  );
}
