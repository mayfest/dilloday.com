'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = `#${url.pathname.slice(1)}`;
    if (url.hash.endsWith('/')) {
      url.hash = url.hash.slice(0, -1);
    }
    url.pathname = '/';
    window.location.replace(url.toString());
  }, []);

  return null;
}
