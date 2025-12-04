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
      <div className={`w-full py-16 px-6 ${GRADIENT_HERO} flex flex-col items-center text-center justify-center text-white`}>
        <div className={`mx-10 pt-[65px]`}>
        <h1 className={`text-3xl mb-3`}>Lets Look for your questions</h1>
        <p className={`text-sm text-gray-500`}>On this page, you will find all the questions you have asked us many times. For your clarification, we provide answers to these questions on this page.</p>
        <br />
        <br />
        <h2 className={`mb-5 mt-5 text-xl`}>Basic Informations</h2>
        
        <Accordion faqData={FAQ_DATA}/>

        <h2 className={`mb-5 mt-5 text-xl`}>Billing Informations</h2>
        
        <Accordion faqData={faqBillingData}/>
        <h2 className={`mb-5 mt-5 text-xl`}>Update Informations</h2>
        
        <Accordion faqData={faqUpdateData}/>
        <h2 className={`mb-5 mt-5 text-xl`}>Project Informations</h2>
        
        <Accordion faqData={faqProjectData}/>
        </div>
      </div>
    </main>
  );
}