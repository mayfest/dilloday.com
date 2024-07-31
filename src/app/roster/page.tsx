import { Metadata } from 'next';
import Roster from './Roster';

export const metadata: Metadata = {
  title: 'Roster - Dillo Day',
  description: 'The roster of Mayfest Productions, past and present.',
};

export default function RosterPage() {
  return <Roster />;
}
