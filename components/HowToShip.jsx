import {
  MessageSquare,
  FileText,
  Calendar,
  Radar,
  CheckCircle,
} from "lucide-react";

export function HowToShip() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Get an Instant Quote",
      description: "Enter your pickup city, destination city, and number of bags to get a clear, upfront price—no hidden charges",
    },
    {
      number: "2",
      icon: FileText,
      title: "Schedule Your Pickup",
      description: "Choose a convenient pickup date, time, and location (home, hotel, office, hostel, PG or Airbnb). We’ll confirm everything and assign a coordinator.",
    },
    {
      number: "3",
      icon: Calendar,
      title: "Handover Your Luggage",
      description: "Our executive arrives at your location, scans and secures your bags, applies seals, and shares digital proof of pickup. Optional premium packaging is available.",
    },
    {
      number: "4",
      icon: Radar,
      title: "Track & Receive Delivery",
      description: "Track your shipment through our website with live status updates. Your luggage is delivered safely at your destination with digital proof of delivery.",
    },
    {
      number: "5",
      icon: CheckCircle,
      title: "Support & Rewards",
      description: "Benefit from 24/7 dedicated customer support and real-time shipment tracking to ensure a seamless service experience.",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4">
          How to Ship with <span className="text-primary">Frisbi</span>
        </h2>
        <p className="mb-6 text-center text-second">
          Sending packages with Frisbi is effortless. Simply pack your items
          securely, and we’ll take care of everything else
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* <div className="absolute -top-1 -right-1 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold">
                    {step.number}
                  </div> */}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-second">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToShip;
