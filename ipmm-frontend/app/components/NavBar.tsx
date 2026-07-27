"use client";

import { useEffect } from "react";

export default function NavBar() {
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

  return (
    <nav className="w-full top-0 bg-surface shadow-sm z-50 sticky transition-all duration-300" id="top-nav">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <a className="text-headline-sm font-headline-sm font-semibold text-primary flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>menu_book</span> IPMM
        </a>
        <ul className="hidden md:flex items-center gap-6">
          <li><a className="text-primary border-b-2 border-secondary font-bold pb-1 text-label-md font-label-md transition-colors duration-200" href="#">Home</a></li>
          <li><a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-label-md font-label-md" href="#">About</a></li>
          <li><a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-label-md font-label-md" href="#">Programs</a></li>
          <li><a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-label-md font-label-md" href="#">Ordination</a></li>
          <li><a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-label-md font-label-md" href="#">Events</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-primary font-label-md text-label-md hover:text-secondary transition-colors">Login</button>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
