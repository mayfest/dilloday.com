import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Herox';
import PastDillos from '@/components/PastDillos';
import Team from '@/components/Team';
import Terms from '@/components/Terms';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dillo Day',
  description:
    "Mayfest Productions presents Dillo Day, the nation's largest student-run music festival.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <PastDillos />
      <Terms />
      {/* <Sponsors /> */}
      <Contact />
      <Footer />
    </>
  );
}
