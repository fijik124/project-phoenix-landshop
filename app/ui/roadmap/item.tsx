interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition-transform hover:scale-[1.03] duration-300 
                    border-t-4 border-blue-600 hover:border-blue-400 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-400 text-base flex-grow">
        {description}
      </p>
    </div>
  );
}