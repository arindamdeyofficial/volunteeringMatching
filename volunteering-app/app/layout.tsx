// app/layout.tsx
import '../styles/globals.scss';
import '../styles/responsive.scss';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import AuthProvider from "../components/providers/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Volunteering App',
  description: 'Make a difference by volunteering',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <div className="flex flex-col h-screen">
              <Header />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white">
                  {children}
                </main>
              </div>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
