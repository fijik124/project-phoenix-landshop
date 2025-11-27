'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/app/ui/header/navbar.module.css';
import { getHmrRefreshHash } from 'next/dist/server/app-render/work-unit-async-storage.external';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'About',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Demo',
    href: 'https://exemple.com',
    icon: DocumentDuplicateIcon,
  },
];
const subLinks = [
  { group: '', name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'About',
    href: '/about',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Why', href: '/why', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
