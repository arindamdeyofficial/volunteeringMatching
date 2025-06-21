// app/layout.tsx
import '../styles/globals.scss';
import '../styles/responsive.scss';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import AuthProvider from "../components/providers/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <Header />
            <main className="container">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
