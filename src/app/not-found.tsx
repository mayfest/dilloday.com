'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const url = new URL(window.location.href);
    url.pathname = '/';
    url.hash = `#${url.pathname}`;
    window.location.replace(url.toString());
  }, []);

  return null;
}
