'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#1f1f1f] text-black dark:text-white shadow-md p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/notifications">Notifications</Link>
        <Link href="/events">Events</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
}
