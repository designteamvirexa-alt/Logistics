import RateCalculator from '@/page/RateCalculator'
import React from 'react'


export const metadata = {
  title: "Luggage Delivery Cost Calculator India | Calculate Baggage Shipping Rates | Frisbi",
  description:
    "Calculate exact luggage delivery costs based on distance, weight, and bag size. Frisbi's rate calculator gives instant transparent quotes for baggage shipping across India. Enter dimensions and get your price in 60 seconds. ",
  keywords: [
    "luggage delivery cost calculator, baggage shipping rate calculator india, calculate luggage transport cost, dimensional weight calculator luggage, luggage courier price estimator, distance based luggage rates, baggage delivery cost by weight, transparent luggage shipping rates, calculate baggage courier cost india, luggage delivery pricing calculator"

  ],
};


function page() {
  return (
    <div>
      <RateCalculator />
    </div>
  )
}

export default page
