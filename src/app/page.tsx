import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import PastDillos from '@/sections/PastDillos';
import Team from '@/sections/Team';
import Terms from '@/sections/Terms';
import Tickets from '@/sections/Tickets';
import Footer from '@/components/footer';
import { Metadata } from 'next';
import Sponsors from '@/sections/Sponsors';
import MailingList from '@/components/MaillingList';
import MobileApp from '@/sections/MobileApp';

export const metadata: Metadata = {
  title: 'Dillo Day',
  description:
    "Mayfest Productions presents Dillo Day, the nation's largest student-run music festival.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Tickets />
      <About />
      <MobileApp />
      <Team />
      <PastDillos />
      <Terms />
      {/* <Sponsors /> */}
      <Contact />
      <MailingList />
      <Footer />
    </>
  );
}
