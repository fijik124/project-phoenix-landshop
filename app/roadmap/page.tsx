import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// Assuming this provides a dark base background color
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

// Define consistent gradient styles (Full Width)
const GRADIENT_HERO =
  "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800";
const GRADIENT_FEATURES =
  "bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-950";

export default function Page() {
  return (
    // 1. Set the main container to fill the screen height and use flex column
    <main className={`flex min-h-screen flex-col ${styles.bgMain}`}>
      <div
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center`}
      >
        <h2 className={`text-3xl text-white`}>RoadMap</h2>
        <p>Here you can find our RoadMap of features</p>
        <div>

        </div>
      </div>
    </main>
  );
}
