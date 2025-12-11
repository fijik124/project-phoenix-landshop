import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  QuestionMarkCircleIcon,
  FolderPlusIcon,
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

export const NAV_LINKS: NavLinkItem[] = [
  {
    name: "About",
    href: null,
    icon: DocumentDuplicateIcon,
    group: "about",
  },
  {
    name: "Demo",
    href: "https://arma3spartans.com/",
    icon: DocumentDuplicateIcon,
    isExternal: true, // Mark external links
  },
  {
    name: "RoadMap",
    href: "/roadmap",
    icon: FolderPlusIcon,
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: QuestionMarkCircleIcon,
  },
];

export const SUB_LINKS = [
  {
    group: "about",
    name: "About",
    href: "",
    description: "Basic info about the project.",
    icon: UserGroupIcon,
  },
  {
    group: "about",
    name: "Our Team",
    href: "/who",
    description: "Basic info about us as developers and 'company'.",
    icon: UserGroupIcon,
  },
];