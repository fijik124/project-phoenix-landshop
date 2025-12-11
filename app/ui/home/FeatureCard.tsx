interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-spartans-gray-dark p-8 rounded-xl shadow-2xl transition-all hover:scale-[1.03] duration-300 
                    border-t-4 border-spartans-red hover:border-red-400 hover:shadow-red-glow h-full flex flex-col relative group">
      {/* Corner accent */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-spartans-red/50 group-hover:border-spartans-red"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-spartans-red/50 group-hover:border-spartans-red"></div>
      
      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 text-base flex-grow font-mono">
        {`>`} {description}
      </p>
    </div>
  );
}