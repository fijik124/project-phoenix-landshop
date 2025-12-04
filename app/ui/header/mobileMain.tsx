"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SPEARLogo from "@/app/ui/logo/logo";
import { NAV_LINKS, SUB_LINKS } from "@/app/_nav";
// Import icons needed for the links
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import styles from "@/app/ui/header/navbar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  // State for the currently open dropdown menu group. Empty string means none open.
  const [activeGroup, setActiveGroup] = useState("");
  const [activeSubGroup, setActiveSubGroup] = useState("");
  const [languageSelected, setLanguageSelected] = useState("SK"); // Consider using a dropdown component for this

  const handleMenuToggle = (group: string) => {
    // Toggles the menu: if the clicked group is active, close it. Otherwise, open the new group.
    setActiveGroup(group === activeGroup ? "" : group);
  };

  const handleSubMenuToggle = (group: string) => {
    // Toggles the menu: if the clicked group is active, close it. Otherwise, open the new group.
    setActiveSubGroup(group === activeSubGroup ? "" : group);
  };

  // Pre-filter the sub-links for the active group to prevent re-filtering on every render
  const activeSubLinks = useMemo(() => {
    return SUB_LINKS.filter((link) => link.group === activeGroup);
  }, [activeGroup]);

  return (
    // Use an accessible tag like <nav> for navigation
    <nav
      className={clsx(
        `fixed w-full top-0 left-0 z-40`, // Added z-index and sticky for common header behavior
        styles.headerContainer,
        styles.borderBottom // Assuming this controls the border color/style
      )}
    >
      {activeGroup == "mobileNavBar" && (
        <div
          className={`w-full h-screen inset-0 ${styles.background} transform 
        transition-transform duration-500 ease-in-out ${
          activeGroup == "mobileNavBar" ? "translate-x-0" : "translate-x-full"
        }`}
        >
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3`}>
            <div className={`flex justify-between items-center`}>
              {/* Left Side: Logo and Navigation Links */}
              <div className={`flex items-center gap-14`}>
                {" "}
                {/* Increased gap for cleaner look */}
                <Link href="/" aria-label="Home">
                  <SPEARLogo />
                </Link>
              </div>

              {/* Right Side: Hamburger and Auth Buttons */}
              <div className={`flex items-center gap-4`}>
                {" "}
                <button onClick={() => handleMenuToggle("mobileNavBar")}>
                  <XMarkIcon
                    className={`w-4 h-4 transition-transform text-white`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mx-5 my-3">
            {/* Mobile Navigation Menu - Rendered conditionally based on activeGroup */}
            <div className={`flex flex-col gap-10 items-start`}>
              {" "}
              {/* Increased gap and forced MD visibility */}
              {NAV_LINKS.map((link) => {
                const LinkIcon = link.icon;
                const isGroupActive = activeSubGroup === link.group; // Check if the current group is open

                return (
                  <div key={link.name} className="w-full">
                    {/* A. Top-level Link or Dropdown Button */}
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => handleMenuToggle("")} // Close all menus on click
                        className={clsx(
                          styles.linkItem,
                          "text-xl py-3 w-full justify-start", // Added w-full & justify-start
                          {
                            [styles.linkActive]:
                              pathname === link.href || link.isExternal,
                          }
                        )}
                        target={link.isExternal ? "_blank" : "_self"}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        <LinkIcon className="w-6 h-6" />{" "}
                        {/* Increased size for touch targets */}
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={clsx(
                          styles.linkItem,
                          "text-xl py-3 w-full justify-start", // Added w-full & justify-start
                          {
                            [styles.linkActive]: isGroupActive,
                          }
                        )}
                        onClick={() => handleSubMenuToggle(link.group ?? "")}
                        aria-expanded={isGroupActive}
                      >
                        <LinkIcon className="w-6 h-6" />
                        <span className="font-medium">{link.name}</span>
                        <ChevronDownIcon
                          className={clsx(
                            "w-6 h-6 transition-transform duration-300 ml-auto",
                            {
                              // Used ml-auto to push chevron to the right
                              "rotate-180": isGroupActive,
                            }
                          )}
                        />
                      </button>
                    )}

                    {/* B. Sub-Links (Accordion Content) */}
                    {link.group && (
                      <div
                        className={clsx(
                          "overflow-hidden transition-[height] duration-300 ease-in-out",
                          // 💥 Tailwind Hack for Transitioning Height:
                          // When closed, set height to 0. When open, set max-h to something large.
                          isGroupActive ? "max-h-96" : "max-h-0"
                        )}
                      >
                        {isGroupActive &&
                          SUB_LINKS.filter(
                            (subLink) => subLink.group === link.group
                          ).map((subLink) => (
                            // Render your SubLink component or a simple link here
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              onClick={() => handleSubMenuToggle("")} // Close all menus after clicking a sublink
                              // Added padding-left/indent for visual nesting
                              className={clsx(
                                styles.linkItem,
                                "text-lg py-2 pl-10 w-full justify-start"
                              )}
                            >
                              <subLink.icon className="w-5 h-5" />
                              <span className="font-normal">
                                {subLink.name}
                              </span>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`fixed flex flex-row gap-10 items-center bottom-0 mx-20 my-10 z-50`}
          >
            {/* Language Selector - Needs to be a proper dropdown component for production */}
            <button
              className={clsx(styles.linkItem, "p-1")}
              aria-label="Change Language"
            >
              <Image
                src="/favicon.png"
                width={20} // Smaller, more appropriate size for an icon
                height={20}
                alt={`Flag for ${languageSelected}`}
              />
              <p className="text-sm font-semibold">{languageSelected}</p>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            <Link href={"/register"}>
              <button type="button" className={styles.clasicButton}>
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3`}>
        <div className={`flex justify-between items-center`}>
          {/* Left Side: Logo and Navigation Links */}
          <div className={`flex items-center gap-14`}>
            {" "}
            {/* Increased gap for cleaner look */}
            <Link href="/" aria-label="Home">
              <SPEARLogo />
            </Link>
          </div>

          {/* Right Side: Hamburger and Auth Buttons */}
          <div className={`flex items-center gap-4`}>
            {" "}
            {/* Cleaned up spacing */}
            {/* Register/Login Button */}
            <Link href={"/register"}>
              <button type="button" className={styles.clasicButton}>
                Register
              </button>
            </Link>
            <button onClick={() => handleMenuToggle("mobileNavBar")}>
              <Bars3Icon
                className={`w-4 h-4 transition-transform text-white`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
