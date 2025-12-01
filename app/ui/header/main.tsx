"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SPEARLogo from "@/app/ui/logo/logo";
import SubLink from "@/app/ui/header/subLink";
// Import icons needed for the links
import {
  PowerIcon,
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// --- DATA DEFINITIONS (Ideally in a separate /config file) ---

// Define a type for better structure and future-proofing
type NavLinkItem = {
  name: string;
  href: string | null;
  icon: typeof HomeIcon; // Use one of the imported icons as a type reference
  group?: string;
  isExternal?: boolean; // Added for clarity
};

const NAV_LINKS: NavLinkItem[] = [
  {
    name: "About",
    href: null,
    icon: DocumentDuplicateIcon,
    group: "about",
  },
  {
    name: "Demo",
    href: "https://exemple.com",
    icon: DocumentDuplicateIcon,
    isExternal: true, // Mark external links
  },
  {
    name: "RoadMap",
    href: "/roadmap",
    icon: DocumentDuplicateIcon,
    group: "roadmap", // Added group for potential future sub-menu
  },
];

const SUB_LINKS = [
  // ... your existing subLinks data ...
  {
    group: "about",
    name: "Home",
    href: "/",
    description: "Go to the main landing page.",
    icon: HomeIcon, // Changed icon for Home
  },
  {
    group: "about",
    name: "About",
    href: "/about",
    description: "Basic info about the project.",
    icon: UserGroupIcon,
  },
  // Note: Your original data had duplicate 'Why' links. Cleaned up/renamed for clarity.
  {
    group: "about",
    name: "Project Goal",
    href: "/why",
    description: "Why this project exists, what is our main goal.",
    icon: DocumentDuplicateIcon,
  },
  {
    group: "about",
    name: "Our Team",
    href: "/who",
    description: "Basic info about us as developers and 'company'.",
    icon: UserGroupIcon,
  },
];
// --- END DATA DEFINITIONS ---

// Use a more descriptive CSS module name if possible (e.g., nav.module.css)
import styles from "@/app/ui/header/navbar.module.css"; 

export default function NavBar() {
  const pathname = usePathname();
  // State for the currently open dropdown menu group. Empty string means none open.
  const [activeGroup, setActiveGroup] = useState(""); 
  const [languageSelected, setLanguageSelected] = useState("SK"); // Consider using a dropdown component for this

  const handleMenuToggle = (group: string) => {
    // Toggles the menu: if the clicked group is active, close it. Otherwise, open the new group.
    setActiveGroup(group === activeGroup ? "" : group);
  };

  // Pre-filter the sub-links for the active group to prevent re-filtering on every render
  const activeSubLinks = useMemo(() => {
    return SUB_LINKS.filter((link) => link.group === activeGroup);
  }, [activeGroup]);


  return (
    // Use an accessible tag like <nav> for navigation
    <nav className={clsx(
        `w-full sticky top-0 z-40`, // Added z-index and sticky for common header behavior
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
            
            <div className={`hidden md:flex flex-row gap-8 items-center`}> {/* Increased gap and forced MD visibility */}
              {NAV_LINKS.map((link) => {
                const LinkIcon = link.icon;
                const isActive = activeGroup === link.group || (link.href && pathname === link.href);

                // Use an anchor tag for all links, but a button for dropdown triggers
                return link.href ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    // Apply a specific active style here
                    className={clsx(styles.linkItem, {
                      [styles.linkActive]: pathname === link.href || link.isExternal, 
                    })}
                    target={link.isExternal ? "_blank" : "_self"} // Proper handling for external links
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <LinkIcon className="w-5 h-5" /> {/* Consistent icon sizing */}
                    <span className="hidden lg:block font-medium">{link.name}</span>
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    type="button"
                    className={clsx(styles.linkItem, {
                      [styles.linkActive]: activeGroup === link.group, // Active style for open dropdown
                    })}
                    onClick={() => handleMenuToggle(link.group ?? "")}
                    // A proper accessible attribute for dropdowns
                    aria-expanded={activeGroup === link.group} 
                  >
                    <LinkIcon className="w-5 h-5" />
                    <span className="hidden lg:block font-medium">{link.name}</span>
                    {/* Add rotation/styling to the chevron for visual cue */}
                    <ChevronDownIcon className={clsx("w-4 h-4 transition-transform", {
                        "rotate-180": activeGroup === link.group,
                      })}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Language and Auth Buttons */}
          <div className={`flex items-center gap-4`}> {/* Cleaned up spacing */}
            
            {/* Language Selector - Needs to be a proper dropdown component for production */}
            <button className={clsx(styles.linkItem, "p-1")} aria-label="Change Language">
              <Image
                src="/favicon.png"
                width={20} // Smaller, more appropriate size for an icon
                height={20}
                alt={`Flag for ${languageSelected}`}
              />
              <p className="text-sm font-semibold">{languageSelected}</p>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            
            {/* Register/Login Button */}
            <Link href={"/register"}>
              <button type="button" className={styles.clasicButton}>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Expanded Sub-Menu Section */}
      {activeGroup && activeSubLinks.length > 0 && (
        <div className={clsx(styles.background, "absolute w-full shadow-lg border-t-2")} aria-hidden={!activeGroup}>
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-6`}>
            {/* Structured Grid Layout for Sub-Links */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}> 
              {activeSubLinks.map((link) => (
                // Assuming SubLink is a component that renders the link with icon/description
                <SubLink
                  key={link.name}
                  name={link.name}
                  description={link.description}
                  href={link.href}
                  icon={link.icon}
                  // Optional: Pass down a prop to close the menu on click
                  onClick={() => setActiveGroup("")} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}