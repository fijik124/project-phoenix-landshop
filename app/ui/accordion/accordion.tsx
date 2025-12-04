"use client";

import { ChevronDownIcon, InformationCircleIcon } from '@heroicons/react/24/outline'; 
import { ComponentType } from "react"; 

interface AnimatedFaqItemProps {
    question: string;
    answer: string;
    Icon?: ComponentType<any>;
    isOpen: boolean; 
    onToggle: (question: string) => void;
}

export default function AnimatedFaqItem({ question, answer, isOpen, onToggle, Icon = InformationCircleIcon }: AnimatedFaqItemProps) {

    const safeQuestion = question || 'no-question-provided';

    return (
        <div className="w-full max-w-3xl mx-auto my-1">
            <button 
                onClick={() => onToggle(question)} 
                className="flex w-full items-center justify-between p-4 cursor-pointer 
                           bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 shadow-md"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${safeQuestion.replace(/\s/g, '-')}`}
            >
                <div className="flex items-center gap-3 text-left">
                    <Icon className="h-6 w-6 text-indigo-400" />
                    <h2 className="font-semibold text-lg">{question}</h2>
                </div>
                
                <ChevronDownIcon 
                    className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-indigo-400' : 'rotate-0 text-gray-400'
                    }`}
                />
            </button>
            
            <div 
                id={`accordion-content-${safeQuestion.replace(/\s/g, '-')}`}
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0' 
                }`}
            >
                <div className="p-4 text-gray-300 bg-gray-900 rounded-b-lg border-x border-b border-indigo-500/50">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}