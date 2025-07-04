// components/Sidebar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const sections = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Profile', href: '/profile' },
      { label: 'Journey', href: '/journey' },
      { label: 'Opportunity', href: '/opportunities' },
    ],
  },
  {
    title: 'Management',
    links: [
      { label: 'Event Management', href: '/admin/events' },
      { label: 'Marketing Mgmt', href: '/admin/marketing' },
      { label: 'Analytics', href: '/admin/analytics' },
      { label: 'Survey', href: '/surveys' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help & Support', href: '/help' },
      { label: 'Subscription', href: '/subscription' },
      { label: 'Approval Status', href: '/approval/status' },
      { label: 'Approval Requests', href: '/approval/requests' },
    ],
  },
  {
    title: 'User Admin',
    links: [
      { label: 'User Management', href: '/admin/users' },
      { label: 'Sponsor Management', href: '/admin/sponsors' },
      { label: 'Masterdata Entry', href: '/admin/masterdata' },
      { label: 'Questions', href: '/admin/questions' },
    ],
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const sidebarWidth = expanded ? 'w-64' : 'w-16';

  return (
    <aside
      className={`bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg h-full overflow-y-auto transition-all ${sidebarWidth}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className={`font-bold text-lg transition-opacity ${!expanded ? 'opacity-0 hidden' : ''}`}>Menu</h2>
        <button onClick={() => setExpanded(!expanded)} aria-label="Toggle Menu">
          <Menu size={20} />
        </button>
      </div>

      <nav className="p-2">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <div
              className={`text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 mb-1 ${
                !expanded ? 'hidden' : ''
              }`}
            >
              {section.title}
            </div>
            <ul>
              {section.links.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className={`block py-2 rounded transition-all ${
                        expanded ? 'px-4 text-left' : 'text-center px-0'
                      } ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white font-semibold'
                          : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                    >
                      {expanded ? link.label : link.label.charAt(0)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
