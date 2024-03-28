import Hero from '@/components/hero';
import Footer from '@/components/footer';
import TAC from '@/components/tac';
import About from '@/components/About';
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
      <TAC />
      <Footer />
    </>
  );
}
