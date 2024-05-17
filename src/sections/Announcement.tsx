'use client';
import { Section, mobile } from '@/components';
import styled from 'styled-components';
import { db } from '@/lib/app';

import { Announcement, getAnnouncements } from '@/lib/announcement';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Container = styled.div`
  background: #d2555b;
  box-shadow: 0 4px 20px #f0e9d3;
  border-radius: 12px;
  padding: 12px;
  color: white;
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

const Contents = styled.div`
  color: white;
  padding: 16px;
`;

const Text = styled.p``;

export default function AnnouncementScreen() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [state, setState] = useState<'loading' | 'error' | 'idle'>('loading');

  useEffect(() => {
    const fetchMostRecentLevel0Announcement = async () => {
      try {
        setState('loading');
        const q = query(
          collection(db, 'announcements-test'),
          where('level', '==', 3)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          let mostRecentAnnouncement: Announcement | null = null;
          querySnapshot.forEach((doc) => {
            const data = doc.data() as Announcement;
            if (
              !mostRecentAnnouncement ||
              data.sent > mostRecentAnnouncement.sent
            ) {
              mostRecentAnnouncement = { ...data, id: doc.id };
            }
          });
          setAnnouncement(mostRecentAnnouncement);
          setState('idle');
        } else {
          console.log('No level 0 announcements found.');
          setState('idle');
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
        setState('error');
      }
    };

    fetchMostRecentLevel0Announcement();
  }, []);

  return (
    <Section>
      <Container>
        {state === 'loading' && <Text>Loading...</Text>}
        {state === 'error' && (
          <Text>Error occurred while loading announcement.</Text>
        )}
        {state === 'idle' && announcement && (
          <Contents>
            <div>
              <Text>{announcement.title}</Text>
              <Text>{announcement.message}</Text>
            </div>
          </Contents>
        )}
      </Container>
    </Section>
  );
}
