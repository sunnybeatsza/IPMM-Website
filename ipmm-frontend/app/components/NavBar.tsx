"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('top-nav');
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add('shadow-md', 'bg-surface/95', 'backdrop-blur-md');
          nav.classList.remove('shadow-sm', 'bg-surface');
        } else {
          nav.classList.remove('shadow-md', 'bg-surface/95', 'backdrop-blur-md');
          nav.classList.add('shadow-sm', 'bg-surface');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-primary border-b-2 border-secondary font-bold pb-1 text-label-md font-label-md transition-colors duration-200";
    }
    return "text-on-surface-variant hover:text-secondary transition-colors duration-200 text-label-md font-label-md";
  };

  return (
    <nav className="w-full top-0 bg-surface shadow-sm z-50 sticky transition-all duration-300" id="top-nav">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link className="text-headline-sm font-headline-sm font-semibold text-primary flex items-center gap-2" href="/">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>menu_book</span> IPMM
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          <li><Link className={getLinkClass('/')} href="/">Home</Link></li>
          <li><Link className={getLinkClass('/about')} href="/about">About</Link></li>
          <li><Link className={getLinkClass('/programs')} href="/programs">Programs</Link></li>
          <li><Link className={getLinkClass('/ordination')} href="/ordination">Ordination</Link></li>
          <li><Link className={getLinkClass('/events')} href="/events">Events</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-primary font-label-md text-label-md hover:text-secondary transition-colors">Login</Link>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
