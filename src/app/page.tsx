import PageContainer from '@/components/PageContainer';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
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

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      {/* <EventInformation /> */}
      {/* <Tickets /> */}
      <About />
      <MobileApp />
      <Team />
      <PastDillos />
      <Terms />
      {/* <Sponsors /> */}
      <Contact />
      <MailingList />
      <Footer />
    </PageContainer>
  );
}
