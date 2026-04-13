import type { Metadata } from 'next';
import Alumni from './Alumni';

export const metadata: Metadata = {
  title: 'Alumni - Dillo Day',
  description:
    "Connect with the Mayfest Productions alumni network. Stay in touch, give back, and celebrate the history of the nation's largest student-run music festival.",
};

export default function AlumniPage() {
  return <Alumni />;
}
