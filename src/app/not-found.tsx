'use client';

export default function NotFound() {
  const url = new URL(window.location.href);
  url.pathname = '/';
  url.hash = `#${url.pathname}`;
  window.location.replace(url.toString());

  return null;
}
