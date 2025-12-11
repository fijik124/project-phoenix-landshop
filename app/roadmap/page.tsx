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
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center relative`}
      >
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-50"></div>
        
        <div className="relative z-10 text-center px-4">
          <h2 className={`text-4xl md:text-5xl text-orange-500 font-bold uppercase tracking-wider mb-4`}>Mission Roadmap</h2>
          <p className="text-gray-300 text-lg font-mono mb-8">{`>`} Here you can find our RoadMap of features</p>
          
          <div className="bg-gray-900/50 border-2 border-orange-500/30 p-8 max-w-4xl mx-auto">
            <p className={`text-xs text-gray-500 font-mono text-left`}>
              &gt; SYSTEM STATUS: <span className="text-green-500 animate-pulse">OPERATIONAL</span><br />
              &gt; PLANNING PHASE: <span className="text-orange-500">IN PROGRESS</span><br />
              &gt; FEATURES DEPLOYED: <span className="text-orange-500">50</span><br />
              &gt; FEATURES IN DEV: <span className="text-orange-500">25</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
