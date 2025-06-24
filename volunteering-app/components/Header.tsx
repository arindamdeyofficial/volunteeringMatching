"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header flex justify-between items-center px-6 py-4 bg-white text-black dark:bg-[#121212] dark:text-white shadow-md">
      <div className="logo">
        <Link href="/" className="logo-link">
          <Image
            src="/logo/light/Logo Full_Arctic White.svg"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
      </div>

      <nav className="nav">
        <ul className="flex gap-4 items-center">
          <li>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="theme-toggle"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </li>
          <li>
            <Link href="/notifications" aria-label="Notifications">
              🔔
            </Link>
          </li>
          <li><Link href="/auth/login">Login</Link></li>
          <li><Link href="/join-us">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
