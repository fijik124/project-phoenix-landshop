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
        `flex w-full bottom-0 left-0 z-40 relative`, 
        styles.headerContainer,
        styles.borderBottom 
      )}
    >
      {/* Military corner brackets - Updated to Spartans red */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-spartans-red opacity-50"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-spartans-red opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-spartans-red opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-spartans-red opacity-50"></div>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3`}>
        <div className={`flex justify-between items-center`}>
          
          <div className={`flex items-center gap-14`}> 
            <Link href="/" aria-label="Home">
              <SPEARLogo />
            </Link>
          </div>

          <div>
            <p className={`text-gray-400 text-sm font-mono`}>
              {`>`} © 2025 SPARTANS // ALL RIGHTS RESERVED
            </p>
          </div>

          <div className={`flex flex-row items-start gap-16 text-white`}> 
            
            {/* Column 1: About US */}
            <div className={`flex flex-col items-start`}>
                <h3 className="font-bold mb-3 text-spartans-red uppercase tracking-wider text-sm font-mono">// About</h3>
                <Link href="/faq" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>FAQ</Link>
                <Link href="/who" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>Our Team</Link>
                <Link href="/about" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>About</Link>
            </div>
            
            {/* Column 2: Contact US */}
            <div className={`flex flex-col items-start`}>
                <h3 className="font-bold mb-3 text-spartans-red uppercase tracking-wider text-sm font-mono">// Contact</h3>
                <Link href="/contact" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>Contact Form</Link>
                <a href="mailto:support@spear.com" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>support@spear.com</a>
                <a href="tel:+421900000000" className={`text-sm text-gray-400 hover:text-spartans-red transition-colors font-mono`}>+421 900 000 000</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}