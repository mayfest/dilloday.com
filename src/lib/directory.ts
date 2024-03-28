interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: 'ABOUT', href: '#about' },
  { name: 'STORE', href: 'https://store.dilloday.com' },
  { name: 'TICKETS', href: '#' },
  { name: 'OUR TEAM', href: '#our-team' },
  { name: 'PAST DILLOS', href: '#past-dillos' },
  { name: 'TERMS', href: '#terms' },
];

export function getHrefProps(href: string) {
  const isExternal = href.startsWith('https://') || href.startsWith('http://');
  return {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noreferrer' : undefined,
  };
}
