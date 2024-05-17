'use client';

import { useEffect } from 'react';

interface PageContainerProps {
  children?: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(
          `id-${window.location.hash.slice(1)}`
        );

        if (element) {
          element.scrollIntoView();
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <>{children}</>;
}
