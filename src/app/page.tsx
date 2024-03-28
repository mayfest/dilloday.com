import Hero from '@/components/hero';
import Footer from '@/components/footer';
import About from '@/components/About';
import { Metadata } from 'next';
import Team from '@/components/Team';
import PastDillos from '@/components/PastDillos';
import Terms from '@/components/Terms';

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
      <Footer />
    </>
  );
}
