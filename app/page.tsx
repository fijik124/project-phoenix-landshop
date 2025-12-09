"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
      setSubmissionMessage({ type: "success", message: result.message });
      reset(); // Vyčistenie formulára po úspešnom odoslaní
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
        className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-grow items-center justify-center`}
      >
        <div
          // INNER CONTAINER: Centered content, max width
          className={`container flex flex-col gap-10 md:flex-row items-center mx-10`}
        >
          {/* Left Column: Text and CTA (Centered Horizontally) */}
          <div className="flex flex-col justify-center py-10 md:w-2/5 text-center">
            <h1
              className={`${lusitana.className} text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-4 leading-tight`}
            >
              <strong className="block">Welcome to SPEAR.</strong>
            </h1>

            <p
              className={`text-xl text-gray-300 md:leading-relaxed p-3 mb-6 border-l-4 border-blue-600 border-opacity-70 mx-auto max-w-md`}
            >
              What if I told you that you can have this for free?{" "}
              <a
                href="https://spear.com/learn/"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold underline"
              >
                SPEAR Bundles
              </a>
              , brought to you by SPARTANS CZ/SK.
            </p>

            {/* CTA Button: Centered using mx-auto */}
            <Link
              href="/login"
              className="flex items-center gap-3 mx-auto self-start rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-transform hover:bg-blue-500 hover:scale-[1.05] shadow-2xl mt-4"
            >
              <span>Grow with US!</span> <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Column: Hero Images (Always Centered) */}
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-12">
            <div className="relative w-full aspect-[4/3] max-w-4xl">
              <Image
                src="/hero-desktop.png"
                fill
                style={{ objectFit: "contain" }}
                className="hidden md:block shadow-2xl rounded-xl"
                alt="Screenshots of the dashboard project showing desktop version"
                priority
              />
              <Image
                src="/hero-mobile.png"
                fill
                style={{ objectFit: "contain" }}
                className="block md:hidden shadow-2xl rounded-xl"
                alt="Screenshots of the dashboard project showing mobile version"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-800 h-[120px] w-full flex flex-row items-center justify-center gap-8`}
      >
        <div className={`text-white text-center`}>
          <h3 className={`font-bold text-2xl`}>5</h3>
          <p className={`text-gray-500`}>Active Customers</p>
        </div>
        <div className={`text-white text-center`}>
          <h3 className={`font-bold text-2xl`}>25</h3>
          <p className={`text-gray-500`}>InDev Features</p>
        </div>
        <div className={`text-white text-center`}>
          <h3 className={`font-bold text-2xl`}>50</h3>
          <p className={`text-gray-500`}>Already Features</p>
        </div>
      </div>

      {/* --- FEATURES SECTION WRAPPER: Full-width background and gradient --- */}
      {/* Note: Feature sections are usually NOT vertically centered; they flow naturally. */}
      <div className={`w-full py-20 justify-center px-10 ${GRADIENT_FEATURES}`}>
        <div
          // INNER CONTAINER: Centered content
          className={`container mx-auto flex flex-col gap-12 justify-center`}
        >
          {/* Section Header (Already Centered) */}
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-white mb-3`}>
              The Tools That Define Professional Arma Units 🛠️
            </h2>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto">
              From automated **Discord synchronization** to secure **software
              distribution**, gain the full control and flexibility your
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
      <div className={`w-full py-20 ${GRADIENT_FEATURES}`}>
        <div>
          {/* Section Header (Already Centered) */}
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-white mb-3`}>
              Plans That Scale With Your Ambitions 🚀
            </h2>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto">
              There you have it — plans designed to empower your unit at every
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

      <div className={`w-full flex justify-center p-8 ${GRADIENT_FEATURES}`}>
        <div className="w-full p-8">
          <div className="flex flex-col justify-center text-center">
            <h2 className={`text-4xl font-bold text-white mb-3`}>
              Contact us with any questions! 📬
            </h2>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto">
              We're here to help you navigate your journey with SPEAR. Reach out
              with any questions or feedback.
            </p>
          </div>
          {submissionMessage && (
            <div
              className={`flex mx-auto mt-4 p-3 mb-4 rounded-lg text-sm font-medium max-w-md justify-center ${
                submissionMessage?.type === "success"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {submissionMessage?.message}
            </div>
          )}
          <div className="w-full max-w-2xl mx-auto flex justify-center">
            {/* Správy o úspechu/chybe */}

            <form
              onSubmit={handleSubmit(onSubmitFeadback)}
              className="w-full flex flex-col space-y-6"
            >
              {/* Meno Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Meno:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ján Novák"
                  {...register("name")}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="clan.leader@arma.com"
                  {...register("email")}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Otázka Field */}
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Tvoja otázka:
                </label>
                <textarea
                  id="question"
                  rows={4}
                  placeholder="Popíš tu svoj problém alebo požiadavku..."
                  {...register("question")}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 resize-none"
                />
                {errors.question && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.question.message}
                  </p>
                )}
              </div>

              {/* Tlačidlo Odoslať */}
              <button
                type="submit"
                disabled={isSubmitting} // Zablokuje tlačidlo počas odosielania
                className="w-full py-3 mt-4 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg transform hover:scale-[1.01] active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Odosielam dáta..." : "Odoslať otázku"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
