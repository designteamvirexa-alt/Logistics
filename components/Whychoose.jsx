import { MapPin, Shield, Smartphone, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Doorstep Pickup & Delivery",
    description: "From your home, hotel, or stay—straight to your destination.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Handling",
    description: "Sealed, tracked, and handled with care at every step.",
  },
  {
    icon: Smartphone,
    title: "Real-Time Tracking",
    description: "Know exactly where your luggage is, anytime.",
  },
  {
    icon: Clock,
    title: "Flexible Time Slots",
    description: "Choose pickup and delivery times that fit your schedule.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Pay only for the distance and number of bags—no surprises.",
  },
];

export function WhyChoose() {
  return (
    <section className="md:py-24 py-12  bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-center mb-4">Why Choose Frisbi?</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Experience hassle-free travel with our comprehensive luggage delivery service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="
                  flex gap-4 p-6 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  hover:bg-white/15 transition-all
                "
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="mb-2 font-semibold">{benefit.title}</h4>
                  <p className="text-white/80 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
