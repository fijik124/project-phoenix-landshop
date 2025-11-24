import Link from 'next/link';
import NavLinks from '@/app/ui/header/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/header/navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.headerContainer}>
      <Link
        className={styles.headerLogo}
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
