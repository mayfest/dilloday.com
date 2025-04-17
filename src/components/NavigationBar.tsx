'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, getHrefProps } from '@/lib/directory';

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isTermsPage = pathname === '/terms-of-service/';

  useEffect(() => {
    const handleScroll = () => {
      if (isTermsPage) {
        setScrolled(scrollY > 5);
      } else {
        const heroHeight = window.innerHeight;
        const currentScroll = window.scrollY;
        setScrolled(currentScroll >= heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTermsPage]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-150 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div
              className={`relative transition-all duration-150 ${
                scrolled ? 'h-8 w-8' : 'h-16 w-16'
              }`}
            >
              <Image
                className="object-contain"
                src="/dillo.png"
                alt="Dillo Day Logo"
                fill
                sizes="(max-width: 768px) 2rem, 4rem"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 justify-start">
          {navigation.map((item, i) => (
            <Link
              key={i}
              className={`text-lg font-semibold leading-6 text-white transition-all duration-150 ${
                scrolled
                  ? 'opacity-90 hover:opacity-100'
                  : 'opacity-75 hover:opacity-100'
              }`}
              {...getHrefProps(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
}
