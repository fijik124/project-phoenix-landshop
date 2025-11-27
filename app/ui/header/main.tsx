"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SPEARLogo from "@/app/ui/logo/logo";
import SubLink from "@/app/ui/header/subLink";
import { PowerIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/header/navbar.module.css";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "About",
    href: null,
    icon: DocumentDuplicateIcon,
    group: "about"
  },
  {
    name: "Demo",
    href: "https://exemple.com",
    icon: DocumentDuplicateIcon,
  },
];
const subLinks = [
  {
    group: "about",
    name: "Home",
    href: "/",
    description: "User",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "About",
    href: "/about",
    description: "User",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "Why",
    href: "/why",
    description: "User",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "Home2",
    href: "/",
    description: "User",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "About2",
    href: "/about",
    description: "User",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "Why2",
    href: "/why",
    description: "User",
    icon: UserGroupIcon,
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [languageSelected, setLanguageSelected] = useState("SK");
  const [isExpanded, setIsExpanded] = useState("");

  const handleMenuOpen = (value: string) => {
    if (isExpanded != value) {
      setIsExpanded(value)
    } else {
      setIsExpanded("")
    }
  }
  return (
    <>
      <div
        className={`flex flex-row border-b-2 border-blue-500 w-full ${styles.headerContainer}`}
      >
        <div className={`container mx-auto p-[8%] py-2`}>
          <div className={`flex`}>
            <div className={`flex items-center gap-[3.5rem]`}>
              <Link href="/">
                <SPEARLogo />
              </Link>
              <div className={`flex flex-row gap-6 items-center`}>
                {links.map((link) => {
                  const LinkIcon = link.icon;
                  return link.href ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={styles.linkItem}
                    >
                      <LinkIcon className="w-6" />
                      <p className="hidden md:block">{link.name}</p>
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      className={styles.linkItem}
                      onClick={() => handleMenuOpen(link.group ?? "")}
                    >
                      <LinkIcon className="w-6" />
                      <p className="hidden md:block">{link.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={`flex items-center gap-[.5rem] ms-auto`}>
              <div className={`flex items-center text-white`}>
                <Image
                  src="/favicon.png"
                  width={30}
                  height={30}
                  alt="Language Selector"
                />
                <p>{languageSelected}</p>
                <ChevronDownIcon />
              </div>
              <Link href={"/register"}>
                <button type="button" className={styles.clasicButton}>
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isExpanded == "about" && (
        <div className={`${styles.background} `}>
          <div className={`container mx-auto p-[8%] py-2`}>
            <div className={`inline-flex flex-col flex-wrap h-[250] gap-5`}>
              <>
                {subLinks.filter((link) => link.group=="about").map((link) => {
                  return (
                    <SubLink
                      key={link.name}
                      name={link.name}
                      description={link.description}
                      href={link.href}
                      icon={link.icon}
                    />
                  );
                })}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
