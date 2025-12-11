"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Assuming this provides a dark base background color
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import FeatureCard from "@/app/ui/home/FeatureCard";
import PlanCard from "@/app/ui/home/planCard";
import { sendFeadback } from "./server/action/sendfeadback";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeadBackSchema, FeadbackFormValues } from "./server/schema/zodSchema";

import { useState } from "react";
import { success } from "zod";

// Define consistent gradient styles (Full Width)
const GRADIENT_HERO =
  "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800";
const GRADIENT_FEATURES =
  "bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-950";

export default function Page() {
  const router = useRouter();
  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error" | "";
    message: string;
  } | null>(null);

  const form = useForm<FeadbackFormValues>({
    resolver: zodResolver(FeadBackSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
      agreeToTerms: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = form;

  // Funkcia, ktorá sa spustí pri platnom odoslaní formulára
  async function onSubmitFeadback(data: FeadbackFormValues) {
    setSubmissionMessage({ type: "", message: "" }); // Reset správy

    const result = await sendFeadback(data);

    console.log(result);

    // Spracovanie odpovede zo servera
    if (result.status == "success") {
      reset(); // Vyčistenie formulára po úspešnom odoslaní
      router.push("/status/success");
    } else if (result.status == "error") {
      setSubmissionMessage({ type: "error", message: result.message });
    }

    console.log(submissionMessage);
  }

  return (
    // 1. Set the main container to fill the screen height and use flex column
    <main className={`flex min-h-screen flex-col ${styles.bgMain}`}>
      {/* --- HERO SECTION WRAPPER: Full-width background and gradient --- */}
      {/* 2. Added h-screen and items-center to vertically center the Hero content */}
      <div
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center relative`}
      >
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-50"></div>
        <div
          // INNER CONTAINER: Centered content, max width
          className={`container flex flex-col gap-10 md:flex-row items-center mx-10 relative z-10`}
        >
          {/* Left Column: Text and CTA (Centered Horizontally) */}
          <div className="flex flex-col justify-center py-10 md:w-2/5 text-center">
            <h1
              className={`${lusitana.className} text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight`}
            >
              <strong className="block text-orange-500">WELCOME TO SPEAR</strong>
              <span className="text-gray-300 text-2xl md:text-3xl block mt-2 uppercase tracking-wider">Mission Command</span>
            </h1>

            <p
              className={`text-base text-gray-300 md:leading-relaxed p-4 mb-6 border-l-4 border-orange-500 bg-gray-900/50 backdrop-blur-sm mx-auto max-w-md font-mono text-left`}
            >
              {`>`} What if I told you that you can have this for free?{" "}
              <a
                href="https://spear.com/learn/"
                className="text-orange-400 hover:text-orange-300 transition-colors font-semibold underline"
              >
                SPEAR Bundles
              </a>
              , brought to you by SPARTANS CZ/SK.
            </p>

            {/* CTA Button: Centered using mx-auto */}
            <Link
              href="/login"
              className="flex items-center gap-3 mx-auto self-start bg-orange-600 hover:bg-orange-700 px-8 py-4 text-base font-bold text-white uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-900/20 mt-4"
            >
              <span>Deploy Now</span> <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column: Hero Images (Always Centered) */}
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-12">
            <div className="relative w-full aspect-[4/3] max-w-4xl">
              <Image
                src="/hero-desktop.png"
                fill
                style={{ objectFit: "contain" }}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <Image
                src="/hero-mobile.png"
                fill
                style={{ objectFit: "contain" }}
                className="block md:hidden"
                alt="Screenshots of the dashboard project showing mobile version"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-900/90 h-auto py-8 w-full flex flex-row items-center justify-center gap-8 md:gap-16 border-y-2 border-orange-500/30 shadow-2xl flex-wrap px-4 relative`}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500"></div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>5</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>Active Customers</p>
        </div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>25</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>InDev Features</p>
        </div>
        <div className={`text-white text-center group`}>
          <h3 className={`font-bold text-3xl md:text-4xl text-orange-500 mb-1`}>50</h3>
          <p className={`text-gray-400 text-xs md:text-sm uppercase tracking-widest font-mono`}>Already Features</p>
        </div>
      </div>

      {/* --- FEATURES SECTION WRAPPER: Full-width background and gradient --- */}
      {/* Note: Feature sections are usually NOT vertically centered; they flow naturally. */}
      <div className={`w-full py-20 justify-center px-10 ${GRADIENT_FEATURES} relative`}>
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 opacity-30"></div>
        <div
          // INNER CONTAINER: Centered content
          className={`container mx-auto flex flex-col gap-12 justify-center relative z-10`}
        >
          {/* Section Header (Already Centered) */}
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-orange-500 mb-3 uppercase tracking-wider`}>
              // Operational Tools
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto font-mono">
              {`>`} From automated Discord synchronization to secure software
              distribution, gain the full control and flexibility your
              community deserves.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="justify-center grid grid-cols-1 md:grid-cols-3 gap-6 px-20">
            <FeatureCard
              title="Automated, Easy-to-Use Bot Control"
              description="Full control over membership, activity logging, and permissions directly from the dashboard. Deployable in minutes, scalable to any unit size."
            />
            <FeatureCard
              title="Scalable Management & Licensing"
              description="Deploy new software versions to thousands of users instantly. Our easy-to-use dashboard handles licensing and authentication, maximizing operational efficiency."
            />
            <FeatureCard
              title="Flexible, Localized Web Presence"
              description="Take full control over your clan's online identity. Utilize multi-language ready templates that require zero coding, making maintenance trivial."
            />
          </div>
        </div>
      </div>
      <div className={`w-full py-20 ${GRADIENT_FEATURES} relative`}>
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 opacity-30"></div>
        <div className="relative z-10">
          {/* Section Header (Already Centered) */}
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-orange-500 mb-3 uppercase tracking-wider`}>
              // Deployment Tiers
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto font-mono">
              {`>`} Plans designed to empower your unit at every
              stage. Whether you're just starting out or leading a vast legion,
              SPEAR has you covered.
            </p>
          </div>
        </div>
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-10`}
        >
          <PlanCard
            id="beginner"
            name="Bigginer"
            tagline="The essential deployment for new clans."
            price="4.99€"
            users="max 25 USERS"
            features={[
              { text: "Basic Management Dashboard", access: true },
              { text: "No Access to WIP Features", access: false },
              { text: "Standard Email Support", access: false },
            ]}
            highlight={false}
            color="border-blue-500"
            cta="START RECRUITMENT"
          />
          <PlanCard
            id="guru"
            name="COMMANDER PLAN"
            tagline="Advanced tools for tactical leadership."
            price="9.99€"
            users="50 USERS"
            features={[
              { text: "Advanced Reporting", access: true },
              { text: "Beta Feature Access", access: true },
              { text: "Dedicated Dev Support", access: true },
            ]}
            highlight={true}
            color="border-yellow-500"
            cta="UPGRADE NOW"
          />
          <PlanCard
            id="boss"
            name="WARLORD PLAN"
            tagline="The ultimate dominion over your operations."
            price="19.99€"
            users="UNLIMITED USERS"
            features={[
              { text: "Experimental WIP Features", access: true },
              { text: "Priority Dev Contact", access: true },
              { text: "Custom Integrations", access: true },
            ]}
            highlight={false}
            color="border-red-600"
            cta="DOMINATE NOW"
          />
        </div>
        <div
          className={`w-full md:hidden gap-8 flex-wrap justify-center py-20 px-10`}
        >
          <PlanCard
            id="beginner"
            name="Bigginer"
            tagline="The essential deployment for new clans."
            price="4.99€"
            users="max 25 USERS"
            features={[
              { text: "Basic Management Dashboard", access: true },
              { text: "No Access to WIP Features", access: false },
              { text: "Standard Email Support", access: false },
            ]}
            highlight={false}
            color="border-blue-500"
            cta="START RECRUITMENT"
          />
          <PlanCard
            id="guru"
            name="COMMANDER PLAN"
            tagline="Advanced tools for tactical leadership."
            price="9.99€"
            users="50 USERS"
            features={[
              { text: "Advanced Reporting", access: true },
              { text: "Beta Feature Access", access: true },
              { text: "Dedicated Dev Support", access: true },
            ]}
            highlight={true}
            color="border-yellow-500"
            cta="UPGRADE NOW"
          />
          <PlanCard
            id="boss"
            name="WARLORD PLAN"
            tagline="The ultimate dominion over your operations."
            price="19.99€"
            users="UNLIMITED USERS"
            features={[
              { text: "Experimental WIP Features", access: true },
              { text: "Priority Dev Contact", access: true },
              { text: "Custom Integrations", access: true },
            ]}
            highlight={false}
            color="border-red-600"
            cta="DOMINATE NOW"
          />
        </div>
      </div>

      <div className={`w-full flex justify-center p-8 ${GRADIENT_FEATURES} relative`}>
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-orange-500 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 opacity-30"></div>
        <div className="w-full p-8 relative z-10">
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-orange-500 mb-3 uppercase tracking-wider`}>
              // Transmission Channel
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto font-mono mb-4">
              {`>`} We're here to help you navigate your journey with SPEAR. Reach out
              with any questions or feedback.
            </p>
          </div>
          {submissionMessage?.type === "error" && (
            <div
              className={`flex mx-auto mt-4 p-3 mb-4 text-sm font-medium max-w-md justify-center bg-red-900/20 border border-red-500 text-red-400 font-mono`}            >
              {`>`} ERROR: {submissionMessage?.message}
            </div>
          )}
          <div className="w-full max-w-2xl mx-auto flex justify-center">

            <form
              onSubmit={handleSubmit(onSubmitFeadback)}
              className="w-full flex flex-col space-y-6"
            >
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest"
                >
                  Callsign (Name)
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Andreas Brown"
                  {...register("name")}
                  className="w-full bg-gray-800 text-white p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors font-mono"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest"
                >
                  Comms (Email)
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="operator@spear.com"
                  {...register("email")}
                  className="w-full bg-gray-800 text-white p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors font-mono"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              
              <div>
                <label
                  htmlFor="question"
                  className="block text-xs font-mono text-orange-500 mb-1 uppercase tracking-widest"
                >
                  Message Content
                </label>
                <textarea
                  id="question"
                  rows={4}
                  placeholder="Enter your inquiry or feedback..."
                  {...register("question")}
                  className="w-full bg-gray-800 text-white p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none font-mono"
                />
                {errors.question && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.question.message}
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <input id="agreeToTerms" type="checkbox" {...register("agreeToTerms")} className="mt-1 accent-orange-500" />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-2 text-sm text-gray-300 font-mono"
                >
                  {`>`} I agree to the processing of my personal data in accordance with GDPR regulations.
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </div>

              {/* Tlačidlo Odoslať */}
              <button
                type="submit"
                disabled={isSubmitting} // Zablokuje tlačidlo počas odosielania
                className="w-full py-3 mt-4 text-white font-bold bg-orange-600 hover:bg-orange-700 transition-all ease-in-out shadow-lg transform hover:scale-[1.02] active:scale-95 disabled:bg-gray-700 disabled:cursor-not-allowed uppercase tracking-widest"
              >
                {isSubmitting ? "TRANSMITTING..." : "Send Transmission"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
