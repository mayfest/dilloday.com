import About from '@/sections/About';
import Support from '@/sections/Support';
import EventInformation from '@/sections/EventInformation';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import MailingList from '@/sections/MailingList';
import MobileApp from '@/sections/MobileApp';
import PastDillos from '@/sections/PastDillos';
import Team from '@/sections/Team';
import Terms from '@/sections/Terms';
import Tickets from '@/sections/Tickets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dillo Day',
  description:
    "Mayfest Productions presents Dillo Day, the nation's largest student-run music festival.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <EventInformation /> */}
      {/* <Tickets /> */}
      <About />
      {/* <MobileApp /> */}
      <Team />
      <PastDillos />
      <Terms />
      {/* <Sponsors /> */}
      <Support />
      <MailingList />
      <Footer />
    </>
  );
}
