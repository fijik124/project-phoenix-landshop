"use client";

import { useState } from "react";
// Import your individual item component
import AnimatedFaqItem from "./accordion";

// Example data structure
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  faqData: FAQItem[];
}

export default function AccordionContainer(FAQ_DATA: FAQData) {
  // State holds the unique identifier (the question string) of the open item
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const handleToggle = (clickedQuestion: string) => {
    // If the clicked item is already open, close it (set to null)
    // Otherwise, open the clicked item
    setActiveIndex(clickedQuestion === activeIndex ? null : clickedQuestion);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {FAQ_DATA.faqData.map((item) => (
        <AnimatedFaqItem
          key={item.question} // Crucial for React performance and tracking
          question={item.question}
          answer={item.answer}
          // CONTROLLED STATE: Pass boolean for if it should be open
          isOpen={item.question === activeIndex}
          // CONTROLLED HANDLER: Pass the setter function
          onToggle={handleToggle}
          // Icon prop can be passed here if needed (e.g., Icon={InformationCircleIcon})
        />
      ))}
    </div>
  );
}
