import { Check, X } from "lucide-react";

export default function ServiceComparison() {
  const rows = [
    {
      feature: "Delivery Speed",
      standard: "2–5 Days",
      express: "1–3 Days",
      premium: "Same / 48 hrs",
    },
    {
      feature: "Priority Handling",
      standard: <X className="w-5 h-5 text-red-500" />,
      express: <Check className="w-5 h-5 text-green-600" />,
      premium: <span className="text-yellow-500">⭐⭐⭐</span>,
    },
    {
      feature: "Insurance",
      standard: "Basic",
      express: "Enhanced",
      premium: "High-Value",
    },
    {
      feature: "Support",
      standard: "9AM–9PM",
      express: "Extended",
      premium: "24×7 Dedicated",
    },
    {
      feature: "Ideal For",
      standard: "Budget",
      express: "Urgent",
      premium: "High-Value",
    },
  ];

  return (
    <section className="py-24 sm:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold  mb-8 text-center">
          Service Comparison
        </h2>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <table className="min-w-full divide-y divide-purple-200">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-4 text-left text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-white">Standard</th>
                    <th className="px-6 py-4 text-center text-white">Express</th>
                    <th className="px-6 py-4 text-center text-white bg-yellow-400/20">
                      Premium
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-purple-100">
                  {rows.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-black font-semibold">
                        {row.feature}
                      </td>

                      <td className="px-6 py-4 text-center text-black font-medium">
                        {row.standard}
                      </td>

                      <td className="px-6 py-4 text-center text-black font-medium">
                        {row.express}
                      </td>

                      <td className="px-6 py-4 text-center font-semibold text-primary bg-blue-50">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
