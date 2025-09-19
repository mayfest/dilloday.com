interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'LINEUP', href: '/#lineup' },
  { name: 'PAST DILLOS', href: '/#past-dillos' },
  { name: 'STORE', href: '/#store' },
  { name: 'TERMS', href: '/terms-of-service' },
  { name: 'SUPPORT', href: 'https://support.dilloday.com' },
];

export function getHrefProps(href: string) {
  const isExternal = href.startsWith('https://') || href.startsWith('http://');
  return {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noreferrer' : undefined,
  };
}
