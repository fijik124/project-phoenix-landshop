import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col p-6 ${styles.bgMain}`}>
      {/* --- HERO SECTION --- */}
      <div
        className={`container mx-auto p-[8%] py-2 mt-4 flex grow flex-col gap-4 md:flex-row`}
      >
        <div className="flex flex-col justify-center rounded-lg py-10">
          <p
            className={`${lusitana.className} text-xl max-w-[80%] text-white md:text-5xl md:leading-normal`}
          >
            <strong>Welcome to SPEAR.</strong>
          </p>
          <p
            className={`${lusitana.className} max-w-[90%] text-white md:leading-normal pl-3 pb-4`}
          >
            What if I tell you that you can have this for free!{" "}
            <a href="https://spear.com/learn/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              SPEAR Bundles
            </a>
            , brought to you by SPARTANS CZ/SK.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base shadow-xl"
          >
            <span>Grow with US!</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block shadow-2xl rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden shadow-2xl rounded-lg"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <div
        className={`container mx-auto p-[8%] py-12 flex grow flex-col gap-8`}
      >
        <div className="flex flex-col justify-center text-center mb-8">
          <h2 className={`text-3xl font-bold text-white mb-2`}>
            The Tools That Define Professional Arma Units 🛠️
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From automated Discord synchronization to secure software
            distribution, gain the full control and flexibility your community
            deserves.
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-lg py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1: Bot Control */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-600 h-full">
              <h3 className="text-xl font-semibold text-white mb-3">Automated, Easy-to-Use Bot Control</h3>
              <p className="text-gray-400 text-sm">
                Full control over membership, activity logging, and permissions
                directly from the dashboard. Deployable in minutes, scalable to
                any unit size.
              </p>
            </div>
            
            {/* Feature Card 2: Management & Licensing */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-600 h-full">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Management & Licensing</h3>
              <p className="text-gray-400 text-sm">
                Deploy new software versions to thousands of users instantly.
                Our easy-to-use dashboard handles licensing and authentication,
                maximizing operational efficiency.
              </p>
            </div>
            
            {/* Feature Card 3: Web Presence */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-600 h-full">
              <h3 className="text-xl font-semibold text-white mb-3">Flexible, Localized Web Presence</h3>
              <p className="text-gray-400 text-sm">
                Take full control over your clan's online identity. Utilize
                multi-language ready templates that require zero coding, making
                maintenance trivial.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}