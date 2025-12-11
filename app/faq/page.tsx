import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// Assuming this provides a dark base background color
import styles from "@/app/ui/home.module.css"; 
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Accordion from "@/app/ui/accordion/accordionContainer";

// Define consistent gradient styles (Full Width)
const GRADIENT_HERO = "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800";
const GRADIENT_FEATURES = "bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-950";

const FAQ_DATA = [
    { 
        question: 'Is the platform available for free?', 
        answer: 'Yes, we offer a Free Tier designed for evaluation. This tier grants you full access to **basic functions** (e.g., user registration, general table viewing, and software visualization). However, the Free Tier limits you to the **default setup** (eg., Delta Force or a similar preset) and **excludes Premium features** such as custom rank editing, specialized unit configuration tools, and advanced administrative controls.' 
    }
];

const faqBillingData = [
    { 
        question: 'What is your licensing model?', 
        answer: 'Our standard licensing model is **monthly** to ensure continuous support, maintenance, and hosting of the software and client portal services. We offer a few select services with a **lifetime license**. This approach guarantees we have the necessary financial resources to maintain high availability and security for all users.' 
    },
    { 
        question: 'Can I cancel my subscription at any time?', 
        answer: 'Yes, absolutely. You can **deactivate automatic renewal** at any time directly through your Client Portal dashboard. By default, all subscriptions are set to automatically renew to prevent disruption of service.' 
    },
    { 
        question: 'How secure are my billing details?', 
        answer: 'Your billing security is our top priority. We do not store sensitive financial details (like credit card numbers) directly on our servers. All payment information is handled and secured by a compliant, third-party payment processor (e.g., Stripe or PayPal). Only non-sensitive data required for transaction records is stored in our database, protected by industry-standard encryption.' 
    },
];

const faqUpdateData = [
    { 
        question: 'How often is the software updated?', 
        answer: 'We divide our updates into two distinct categories to ensure both stability and innovation:\n\n1. Security & Performance Updates: These mission-critical patches are deployed immediately, often within **24-48 hours**, whenever a critical vulnerability or performance issue is identified by our team or reported by our community.\n\n2. Feature Updates: We aim for a predictable release schedule for new features, major enhancements, and admin tools, typically deploying these updates every **2–3 months**.' 
    },
    { 
        question: 'Will a new update break compatibility with older versions?', 
        answer: 'No. Backward compatibility is a core principle of our development process. All major software updates are rigorously tested to ensure they function seamlessly with existing data and established Arma 3 unit configurations, preventing mission downtime or data loss.' 
    },
];

const faqProjectData = [
    { 
        question: 'What is the core mission and origin of this project?', 
        answer: 'This project was born out of a real-world struggle faced by the **Arma 3 CZ/SK clan, SPARTANS**. We experienced significant inefficiencies in member management, relying on a fragmented patchwork of external tools (Google Sheets, Discord bots, various software). Our mission was clear: to **consolidate and streamline** these complex processes into a single, cohesive platform. We’ve developed a solution that integrates the best features from existing tools with several **unique features** designed specifically by and for the SPARTANS CZ/SK unit.' 
    },
    { 
        question: 'Who are the key developers behind the platform?', 
        answer: 'The project is proudly created by dedicated members of the SPARTANS unit:\n\n* **Richee:** Lead Design and Core Coder, responsible for the primary site architecture and user experience.\n* **Fijik:** Lead Developer for the backend Dashboard functionality and the integrated Discord bot system.' 
    },
];

export default function Page() {
  return (
    // 1. Set the main container to fill the screen height and use flex column
    <main className={`flex min-h-screen flex-col items-center justify-center ${styles.bgMain}`}>
      
      {/* --- HERO SECTION WRAPPER: Full-width background and gradient --- */}
      {/* 2. Added h-screen and items-center to vertically center the Hero content */}
      <div className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-col items-center text-center justify-center text-white relative`}>
        {/* Military corner brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-50"></div>
        
        <div className={`mx-10 pt-[65px] relative z-10 max-w-5xl`}>
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-orange-500 uppercase tracking-wider`}>Intel Database</h1>
        <p className={`text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12 font-mono`}>{`>`} On this page, you will find all the questions you have asked us many times. For your clarification, we provide answers to these questions on this page.</p>
        
        <div className="space-y-12">
          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className={`mb-5 text-2xl md:text-3xl font-semibold text-orange-500 uppercase tracking-wider font-mono`}>// Basic Informations</h2>
            <Accordion faqData={FAQ_DATA}/>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className={`mb-5 text-2xl md:text-3xl font-semibold text-orange-500 uppercase tracking-wider font-mono`}>// Billing Informations</h2>
            <Accordion faqData={faqBillingData}/>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className={`mb-5 text-2xl md:text-3xl font-semibold text-orange-500 uppercase tracking-wider font-mono`}>// Update Informations</h2>
            <Accordion faqData={faqUpdateData}/>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className={`mb-5 text-2xl md:text-3xl font-semibold text-orange-500 uppercase tracking-wider font-mono`}>// Project Informations</h2>
            <Accordion faqData={faqProjectData}/>
          </div>
        </div>
        
        <p className={`text-xs text-gray-500 mt-12 font-mono`}>
          &gt; SYSTEM STATUS: <span className="text-green-500 animate-pulse">ONLINE</span><br />
          &gt; DATABASE: <span className="text-orange-500">ACCESSIBLE</span>
        </p>
        </div>
      </div>
    </main>
  );
}