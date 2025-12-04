"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SPEARLogo from "@/app/ui/logo/logo";
import SubLink from "@/app/ui/header/subLink";
import { NAV_LINKS, SUB_LINKS } from "@/app/_nav";
// Import icons needed for the links
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Use a more descriptive CSS module name if possible (e.g., nav.module.css)
import styles from "@/app/ui/header/navbar.module.css"; 

export default function Footer() {
  const pathname = usePathname();
  return (
    // Use an accessible tag like <nav> for navigation
    <nav className={clsx(
        `flex w-full bottom-0 left-0 z-40`, // Added z-index and sticky for common header behavior
        styles.headerContainer,
        styles.borderBottom // Assuming this controls the border color/style
      )}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3`}>
        <div className={`flex justify-between items-center`}>
          
          {/* Left Side: Logo and Navigation Links */}
          <div className={`flex items-center gap-14`}> {/* Increased gap for cleaner look */}
            <Link href="/" aria-label="Home">
              <SPEARLogo />
            </Link>
          </div>

          <div>
            <p className={`text-white`}>© Copyright SPARTANS, all rights reserved</p>
          </div>

          {/* Right Side: Columns Container */}
          {/* 💥 FIX: Changed items-center to items-start to align all columns to the top */}
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
                <Link href="/contact" className={`text-sm text-gray-500 hover:text-gray-400`}>Contact</Link>
                {/* Removed empty links for cleaner structure */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}