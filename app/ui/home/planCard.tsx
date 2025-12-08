"use client";

import React from "react";

interface featuresProp {
  access: boolean;
  text: string;
}

interface planProp {
    id: 'beginner' | 'guru' | 'boss' | 'lifetime',
  name: string;
  tagline: string;
  price: string;
  users: string;
  features: featuresProp[];
  highlight: boolean;
  cta: string;
  color: string;
}

export default function PricingCard({
    id,
  name,
  tagline,
  price,
  users,
  features,
  highlight,
  cta,
  color,
}: planProp) {
  // Placeholder for the click handler function (passed as a prop)
  const handlePlanSelection = (planId: typeof id): void => {
    // In a real app, this would redirect or trigger a state change
    console.log(`User selected plan: ${planId}`);
  };

  // Determine the border color and scale based on highlight status
  const cardClasses = `
        bg-gray-800 p-8 rounded-xl shadow-2xl 
        transition-all duration-500 ease-in-out 
        hover:scale-[1.05] hover:shadow-primary-lg my-10
        border-t-4 ${color} h-full flex flex-col relative
        ${highlight ? "shadow-yellow-500/30" : "hover:shadow-blue-500/30"}
    `;

  return (
    <div className={cardClasses}>
      {highlight && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-yellow-500 text-gray-900 text-xs font-bold uppercase rounded-full tracking-wider shadow-lg">
          Recommended
        </div>
      )}

      <header className="mb-6">
        <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider">
          {name}
        </h2>
        <p className="text-sm text-gray-400 mt-1 italic">{tagline}</p>
      </header>

      <div className="mb-8 border-b border-gray-700 pb-6">
        <span className="text-5xl font-extrabold text-blue-400">{price}</span>
        <span className="text-lg font-medium text-gray-300 ml-2">/ month</span>
        <p className="mt-2 text-xl font-semibold text-gray-200">{users}</p>
      </div>

      <ul className="flex-grow space-y-3 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.access ? (
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="flex-shrink-0 w-6 h-6 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
            <span
              className={`text-lg ${
                feature.access ? "text-gray-300" : "text-gray-500 line-through"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 mt-auto rounded-lg text-lg font-bold uppercase tracking-wider 
                            transition duration-300 
                            ${
                              highlight
                                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/50"
                                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/50"
                            }`}
        onClick={() => handlePlanSelection(id)} // Add your checkout function here
      >
        {cta}
      </button>
    </div>
  );
}
