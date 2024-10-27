'use client';

import { HomeIcon, UserGroupIcon, MusicalNoteIcon, RadioIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Connect', href: '/connect', icon: UserGroupIcon },
  { name: 'Library', href: '/library', icon: MusicalNoteIcon },
  { name: 'Live', href: '/live', icon: RadioIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-black text-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">MusicShare</h1>
      </div>
      <nav className="space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'flex items-center px-4 py-2 text-sm font-medium rounded-md',
              pathname === item.href
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-purple-600/10 hover:text-white'
            )}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}