import Link from 'next/link';
import React from 'react'; // Import React for explicit typing

interface SubLinkProps {
  name: string;
  description: string;
  href: string;
  // Use a more specific type for the icon component
  icon: React.ElementType; 
  // Optional: A function to close the menu, passed down from NavBar
  onClick?: () => void; 
}

export default function SubLink({ name, description, href, icon: Icon, onClick }: SubLinkProps) {
  return (
    <Link
      href={href}
      // 1. Structure: Use Flexbox for cleaner alignment (Icon on the left, Text block on the right)
      // 2. Styling: Apply clear hover, focus, and padding for the clickable area
      // 3. Size: Set max-width and min-height for consistent link target size
      className="flex p-4 rounded-lg items-start space-x-4 max-w-xs min-h-[90px]
                 transition duration-150 ease-in-out bg-gray-900 
                 hover:bg-gray-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
      onClick={onClick} // Close the parent menu when a sublink is clicked
    >
      {/* Icon Area */}
      <div className="flex-shrink-0 pt-1">
        {/* Use a clear, vibrant color for the icon */}
        <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
      </div>

      {/* Text Content Area */}
      <div className="flex-1 overflow-hidden">
        {/* Title/Name */}
        <h3 className="font-semibold text-white truncate group-hover:text-blue-300">
          {name}
        </h3>
        {/* Description */}
        <p className="mt-1 text-sm text-gray-400 leading-snug">
          {description}
        </p>
      </div>
    </Link>
  );
}