"use client";

import { useState } from "react";

// Floating input component
const FloatingInput = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="
          peer w-full border border-gray-300 rounded-lg px-4 py-3 
          bg-transparent focus:border-black focus:outline-none
        "
      />

      <label
        className="
          absolute left-4 top-3 text-gray-500 bg-white px-1
          transition-all duration-200 ease-out
          peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
          peer-valid:-top-3 peer-valid:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
};

export default function ShipmentCalculator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [bags, setBags] = useState("");
  const [service, setService] = useState("");
  const [total, setTotal] = useState(0);

  // Simple calculation
  const calculatePrice = () => {
    const base = 50;
    const w = Number(weight) * 10;
    const volume = (Number(length) + Number(width) + Number(height)) * 0.5;
    const bagsCost = Number(bags) * 20;

    const result = base + w + volume + bagsCost;
    setTotal(result || 0);
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        <h2 className="text-center text-2xl font-semibold">
          Calculate your shipment cost
        </h2>
        <p className="text-center text-gray-500 mt-2 text-sm">
          Prices are estimates. Final cost may vary based on actual shipment details.
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-5">

          <FloatingInput
            label="Pickup address"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <FloatingInput
            label="Dropping address"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />

          {/* Weight + L W H */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FloatingInput
              label="Weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <FloatingInput
              label="L"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <FloatingInput
              label="W"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <FloatingInput
              label="H"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          {/* Bags + Service  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                value={bags}
                onChange={(e) => setBags(e.target.value)}
                required
                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >
                <option value="" disabled>Select No of Bags</option>
                <option>1</option><option>2</option><option>3</option>
              </select>
            </div>

            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >
                <option value="" disabled>Select Service</option>
                <option>Standard</option>
                <option>Express</option>
                <option>Premium</option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculatePrice}
            className="
              w-full text-white font-semibold py-3 
              rounded-full bg-blue-600 hover:bg-blue-700 mt-3
            "
          >
            Calculate Price
          </button>

          {/* Total Box */}
          <div className="bg-gray-100 shadow-inner rounded-2xl p-6 mt-4">
            <h3 className="text-lg font-semibold">Total Price</h3>
            <p className="text-3xl font-bold mt-2">₹{total.toFixed(2)}</p>

            <button
              className="
                mt-4 w-full bg-black text-white py-3 rounded-full
                hover:bg-gray-900 font-semibold
              "
            >
              Book Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
