import { Lock, Umbrella, UserCheck, FileText } from 'lucide-react';

export function Safety() {
  const features = [
    { icon: Lock, text: 'Skip carrying heavy bags to airports or stations' },
    { icon: Umbrella, text: 'Avoid excess baggage hassles' },
    { icon: UserCheck, text: 'Travel comfortably with kids or elders' },
    { icon: FileText, text: 'Move luggage ahead during long or multi-stop trips' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">
          When to Use Frisbi
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-bold">{feature.text}</h5>
            </div>
          ))}
        </div>
        
        <p className="text-center text-second">
          From a single suitcase to multiple bags, Frisbi ensures your belongings move safely while you move freely.
        </p>
      </div>
    </div>
  );
}
