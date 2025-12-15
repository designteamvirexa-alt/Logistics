"use client";

import { useState } from "react";

// Floating input component with validation
const FloatingInput = ({ label, value, onChange, type = "text", error }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`peer w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none border 
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:ring-2 focus:ring-[#013EFE] transition placeholder-transparent`}
        placeholder=" "
      />

      <label
        className={`absolute left-4 top-3 bg-white px-1 transition-all duration-200
          peer-focus:-top-2 peer-focus:text-xs 
          peer-valid:-top-2 peer-valid:text-xs
          ${error ? "text-red-600" : "text-gray-500"}`}
      >
        {label}
      </label>

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
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
  const [total, setTotal] = useState(null);
  const [errors, setErrors] = useState({});

  // -------- Validation Function ----------
  const validateForm = () => {
    const newErrors = {};

    if (!pickup.trim()) newErrors.pickup = "Pickup address is required";
    if (!drop.trim()) newErrors.drop = "Drop address is required";

    if (!weight) newErrors.weight = "Weight is required";
    else if (Number(weight) <= 0) newErrors.weight = "Enter a valid weight";

    ["length", "width", "height"].forEach((dim) => {
      if (!eval(dim)) newErrors[dim] = `${dim.toUpperCase()} is required`;
      else if (Number(eval(dim)) <= 0)
        newErrors[dim] = `Enter a valid ${dim.toUpperCase()}`;
    });

    if (!bags) newErrors.bags = "Select number of bags";
    if (!service) newErrors.service = "Select a service type";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ---------- Price Calculation ----------
  const calculatePrice = () => {
    if (!validateForm()) return;

    const base = 999;
    const w = Number(weight) * 10;
    const volume = (Number(length) + Number(width) + Number(height)) * 0.5;
    const bagsCost = Number(bags) * 20;

    const result = base + w + volume + bagsCost;
    setTotal(result || 0);
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)] rounded-3xl p-10">

        <h2 className="text-center text-xl font-semibold">
          Calculate your shipment cost
        </h2>
        <p className="text-center text-second mt-2 text-sm">
          Prices are estimates. Final cost may vary.
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <FloatingInput
            label="Pickup address"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            error={errors.pickup}
          />

          <FloatingInput
            label="Dropping address"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            error={errors.drop}
          />

          {/* Weight + L W H */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FloatingInput
              label="Weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              error={errors.weight}
            />
            <FloatingInput
              label="L"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              error={errors.length}
            />
            <FloatingInput
              label="W"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              error={errors.width}
            />
            <FloatingInput
              label="H"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              error={errors.height}
            />
          </div>

          {/* Bags + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                value={bags}
                onChange={(e) => setBags(e.target.value)}
                className={`w-full border rounded-lg px-4 py-3 
                  ${errors.bags ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select No of Bags</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              {errors.bags && (
                <p className="text-red-600 text-xs mt-1">{errors.bags}</p>
              )}
            </div>

            <div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`w-full border rounded-lg px-4 py-3 
                  ${errors.service ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select Service</option>
                <option>Standard</option>
                <option>Express</option>
                <option>Premium</option>
              </select>
              {errors.service && (
                <p className="text-red-600 text-xs mt-1">{errors.service}</p>
              )}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculatePrice}
            className="w-full text-white font-semibold py-3 rounded-full bg-blue-600 hover:bg-blue-700 mt-3"
          >
            Calculate Price
          </button>

          {/* Total Box */}
          {total !== null && (
            <div className="bg-[#E7ECFF] rounded-3xl p-6 mt-4">
              <h3 className="text-lg font-semibold">Total Price</h3>
              <p className="text-3xl font-bold mt-2">₹{total.toFixed(2)}</p>

              <button className="mt-4 w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 font-semibold">
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
