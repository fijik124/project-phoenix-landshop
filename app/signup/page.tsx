"use client";

import {
  ArrowRightIcon,
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import { useState } from "react";
import Carousel from "@/app/ui/carousel/carousel";

// Define consistent gradient styles (Full Width)
const GRADIENT_HERO =
  "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800";

const CAROUSEL_ITEMS = [
  {
    title: "SECURE PROTOCOLS",
    description: "All transmissions are encrypted using military-grade AES-256 standards. Your unit's data integrity is our primary mission objective.",
    icon: ShieldCheckIcon,
  },
  {
    title: "UNIT INTEGRATION",
    description: "Seamlessly sync with Discord, Arma 3 servers, and external databases. One dashboard to command them all.",
    icon: CpuChipIcon,
  },
  {
    title: "GLOBAL DEPLOYMENT",
    description: "Low-latency access from any theater of operations. Our distributed network ensures 99.9% uptime for your command structure.",
    icon: GlobeAltIcon,
  },
];

export default function SignupPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMode = (mode: boolean) => {
    if (isLogin === mode) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(mode);
      setIsAnimating(false);
    }, 300); // Match transition duration
  };

  return (
    <main className={`flex min-h-screen flex-col ${styles.bgMain}`}>
      <div
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center`}
      >
        <div className={`container flex flex-col gap-10 md:flex-row items-start mx-10`}>
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center py-10 md:w-1/2 text-center md:text-left">
            <h1
              className={`${lusitana.className} text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-8 leading-tight`}
            >
              <strong className="block text-orange-500">OPERATOR ACCESS</strong>
              <span className="text-gray-300 text-3xl md:text-4xl block mt-2">
                SECURE TERMINAL
              </span>
            </h1>

            <div className="w-full max-w-xl mx-auto md:mx-0">
               <Carousel items={CAROUSEL_ITEMS} />
            </div>
            
            <p className={`text-sm text-gray-500 mt-8 font-mono`}>
              &gt; SYSTEM STATUS: <span className="text-green-500 animate-pulse">ONLINE</span><br />
              &gt; ENCRYPTION: <span className="text-orange-500">ACTIVE</span>
            </p>
          </div>

          {/* Right Column: Auth Card */}
          <div className="flex items-center justify-center p-6 md:w-1/2">
            <div className="w-full max-w-md bg-gray-900/90 backdrop-blur-sm border border-gray-700 shadow-2xl overflow-hidden relative">
              {/* Decorative Corner Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500"></div>

              {/* Header / Tabs */}
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => toggleMode(true)}
                  className={`flex-1 py-4 text-center font-bold tracking-wider transition-colors duration-300 ${
                    isLogin
                      ? "bg-orange-600/20 text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  LOGIN
                </button>
                <button
                  onClick={() => toggleMode(false)}
                  className={`flex-1 py-4 text-center font-bold tracking-wider transition-colors duration-300 ${
                    !isLogin
                      ? "bg-orange-600/20 text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  RECRUITMENT
                </button>
              </div>

              {/* Form Container with Animation */}
              <div className="p-8 relative min-h-[400px]">
                <div
                  className={`transition-all duration-300 ease-in-out transform ${
                    isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
                  }`}
                >
                  {isLogin ? (
                    /* LOGIN FORM */
                    <form className="space-y-6">
                      <div>
                        <label className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest">
                          Identity (Email)
                        </label>
                        <div className="relative">
                          <input
                            className="peer block w-full bg-gray-800 border border-gray-600 text-white py-3 pl-10 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="operator@spear.com"
                            required
                          />
                          <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest">
                          Access Code
                        </label>
                        <div className="relative">
                          <input
                            className="peer block w-full bg-gray-800 border border-gray-600 text-white py-3 pl-10 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                          />
                          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-orange-500" />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2"
                      >
                        Authenticate <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </form>
                  ) : (
                    /* SIGNUP FORM */
                    <form className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest">
                          Callsign (Name)
                        </label>
                        <div className="relative">
                          <input
                            className="peer block w-full bg-gray-800 border border-gray-600 text-white py-3 pl-10 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="John 'Soap' MacTavish"
                            required
                          />
                          <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest">
                          Comms (Email)
                        </label>
                        <div className="relative">
                          <input
                            className="peer block w-full bg-gray-800 border border-gray-600 text-white py-3 pl-10 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            id="signup-email"
                            type="email"
                            name="email"
                            placeholder="recruit@spear.com"
                            required
                          />
                          <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest">
                          Set Access Code
                        </label>
                        <div className="relative">
                          <input
                            className="peer block w-full bg-gray-800 border border-gray-600 text-white py-3 pl-10 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            id="signup-password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                          />
                          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-orange-500" />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 border border-gray-500 hover:border-orange-400 flex items-center justify-center gap-2 mt-2"
                      >
                        Submit Application <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Footer of Card */}
              <div className="bg-gray-900/50 p-4 border-t border-gray-800 text-center">
                <p className="text-xs text-gray-500 font-mono">
                  SECURE CONNECTION ESTABLISHED // ENCRYPTED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
