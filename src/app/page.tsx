import About from '@/sections/About';
import Support from '@/sections/Support';
import EventInformation from '@/sections/EventInformation';
import Hero from '@/sections/Hero';
import FestivalSchedule from '@/sections/lineup';
import MailingList from '@/sections/MailingList';
import MobileApp from '@/sections/MobileApp';
import PastDillos from '@/sections/PastDillos';
import Tickets from '@/sections/Tickets';
import Sponsors from '@/sections/Sponsors';
import { Metadata } from 'next';
import FestivalCarousel from '@/components/FestivalFeatures';
import HorizontalStoreComponent from '@/components/store';

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
      <FestivalSchedule />
      {/* <EventInformation /> */}
      {/* <Tickets /> */}
      <FestivalCarousel />
      <MobileApp />
      {/* <Team /> */}
      <HorizontalStoreComponent />
      <PastDillos />
      <Sponsors />
      <Support />
      <MailingList />
    </>
  );
}
