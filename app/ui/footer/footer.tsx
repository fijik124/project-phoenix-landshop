"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SPEARLogo from "@/app/ui/logo/logo";

// Use a more descriptive CSS module name if possible (e.g., nav.module.css)
import styles from "@/app/ui/header/navbar.module.css"; 

export default function Footer() {
  const pathname = usePathname();
  return (
    <nav className={clsx(
        `flex w-full bottom-0 left-0 z-40`, 
        styles.headerContainer,
        styles.borderBottom 
      )}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3`}>
        <div className={`flex justify-between items-center`}>
          
          <div className={`flex items-center gap-14`}> 
            <Link href="/" aria-label="Home">
              <SPEARLogo />
            </Link>
          </div>

          <div>
            <p className={`text-white`}>© Copyright SPARTANS, all rights reserved</p>
          </div>

          <div className={`flex flex-row items-start gap-16 text-white`}> 
            
            {/* Column 1: About US */}
            <div className={`flex flex-col items-start`}>
                <h3 className="font-semibold mb-2">About US:</h3>
                <Link href="/faq" className={`text-sm text-gray-500 hover:text-gray-400`}>FAQ</Link>
                <Link href="/who" className={`text-sm text-gray-500 hover:text-gray-400`}>Our Team</Link>
                <Link href="/about" className={`text-sm text-gray-500 hover:text-gray-400`}>About</Link>
            </div>
            
            {/* Column 2: Contact US */}
            <div className={`flex flex-col items-start`}>
                <h3 className="font-semibold mb-2">Contact US:</h3>
                <Link href="/contact" className={`text-sm text-gray-500 hover:text-gray-400`}>Contact Form</Link>
                <a href="mailto:support@spear.com" className={`text-sm text-gray-500 hover:text-gray-400`}>support@spear.com</a>
                <a href="tel:+421900000000" className={`text-sm text-gray-500 hover:text-gray-400`}>+421 900 000 000</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}