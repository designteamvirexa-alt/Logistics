"use client";

import { useState, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

/* ---------------- Pricing Config ---------------- */

const BASE_PRICE = 499;
const CHECKED_BAG_PRICE = 300;
const CABIN_BAG_PRICE = 150;
const WEIGHT_PRICE_PER_KG = 20;

const BAG_SIZE_MULTIPLIER = {
  Small: 1,
  Medium: 1.1,
  Large: 1.25,
  XL: 1.4,
};

const calculatePrice = (values) => {
  const checkedBags = Number(values.checkedBags || 0);
  const cabinBags = Number(values.cabinBags || 0);
  const weight = Number(values.weight || 0);
  const bagSize = values.bagSize || "Small";

  let price =
    BASE_PRICE +
    checkedBags * CHECKED_BAG_PRICE +
    cabinBags * CABIN_BAG_PRICE +
    weight * WEIGHT_PRICE_PER_KG;

  price *= BAG_SIZE_MULTIPLIER[bagSize] || 1;

  return Math.round(price);
};

export default function ShipmentBookingForm() {
  const router = useRouter();
  const [values, setValues] = useState({});

  const totalPrice = useMemo(() => calculatePrice(values), [values]);

  /* ---------------- Handlers ---------------- */

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (item, checked) => {
    const luggage = values.luggageType || [];
    const updated = checked
      ? [...luggage, item]
      : luggage.filter((i) => i !== item);

    setValues((prev) => ({ ...prev, luggageType: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.phone) {
      toast.error("Please fill required fields");
      return;
    }

    const toastId = toast.loading("Submitting...");

    try {
      const formData = new URLSearchParams();

      const payload = {
        ...values,
        totalPrice,
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(
          key,
          Array.isArray(value) ? value.join(",") : value ?? ""
        );
      });

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const data = await res.json();
      toast.dismiss(toastId);

      if (data.result === "success") {
        toast.success("Form submitted successfully 🎉");
        setValues({});
        router.push("/thank-you");
      } else {
        toast.error("Submission failed");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  /* ---------------- Common Classes ---------------- */

  const inputClass =
    "peer w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none border-0 focus:ring-2 focus:ring-[#013EFE]";

  const labelClass =
    "absolute left-4 top-3 text-gray-500 text-sm transition-all pointer-events-none " +
    "peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm " +
    "peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 " +
    "peer-focus:bg-white peer-focus:px-1";

  return (
    <section className="w-full py-10 px-4">
      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-center">Shipment Booking Form</h2>
          <p className="mb-10 text-center text-gray-600">
            Book door-to-door luggage delivery
          </p>

          {/* ---------------- Customer Details ---------------- */}
          <h3 className="font-semibold mb-3">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { key: "name", label: "Full Name" },
              { key: "email", label: "Email", type: "email" },
              { key: "phone", label: "Mobile Number" },
            ].map(({ key, label, type = "text" }) => (
              <div key={key} className="relative">
                <input
                  type={type}
                  placeholder=" "
                  value={values[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={inputClass}
                />
                <label className={labelClass}>{label}</label>
              </div>
            ))}
          </div>

          {/* ---------------- Pickup & Delivery ---------------- */}
          <h3 className="font-semibold mb-3">Pickup & Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Preferred Pickup Date & Time
              </label>
              <input
                type="datetime-local"
                value={values.pickupDate || ""}
                onChange={(e) => handleChange("pickupDate", e.target.value)}
                className="w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none focus:ring-2 focus:ring-[#013EFE]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Expected Delivery Date
              </label>
              <input
                type="date"
                value={values.deliveryDate || ""}
                onChange={(e) => handleChange("deliveryDate", e.target.value)}
                className="w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none focus:ring-2 focus:ring-[#013EFE]"
              />
            </div>
          </div>

          {/* ---------------- Luggage Details ---------------- */}
          <h3 className="font-semibold mb-3">Luggage Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                key: "checkedBags",
                label: "Checked-in Bags",
                min: 0,
                max: 10,
              },
              {
                key: "cabinBags",
                label: "Cabin Bags",
                min: 0,
                max: 5,
              },
              {
                key: "weight",
                label: "Total Weight (Kg)",
                min: 1,
                max: 100,
              },
            ].map(({ key, label, min, max }) => (
              <div key={key} className="relative">
                <input
                  type="number"
                  min={min}
                  max={max}
                  placeholder=" "
                  value={values[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={inputClass}
                />
                <label className={labelClass}>{label}</label>
              </div>
            ))}

            {/* Bag Size */}
            <div className="relative">
              <select
                value={values.bagSize || ""}
                onChange={(e) => handleChange("bagSize", e.target.value)}
                className={`${inputClass} peer`}
              >
                <option value="" disabled></option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="XL">XL</option>
              </select>
              <label className={labelClass}>Largest Bag Size</label>
            </div>
          </div>

          {/* ---------------- Luggage Type ---------------- */}
          <div className="mb-8">
            <p className="font-medium mb-2">Luggage Type</p>
            <div className="flex gap-6 flex-wrap">
              {["Suitcase", "Bag", "Box"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={values.luggageType?.includes(item) || false}
                    onChange={(e) => handleCheckbox(item, e.target.checked)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- Price ---------------- */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-sm text-gray-600">Estimated Price</p>
            <p className="text-3xl font-bold text-blue-600">₹{totalPrice}</p>
            <p className="text-xs text-gray-500">
              Final price may vary after verification
            </p>
          </div>

          {/* ---------------- Payment ---------------- */}
          <h4 className="font-semibold mb-3">Payment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <select
                value={values.paymentMethod || ""}
                onChange={(e) => handleChange("paymentMethod", e.target.value)}
                className={inputClass}
              >
                <option value="" disabled></option>
                <option>UPI</option>
                <option>Card</option>
              </select>
              <label className={labelClass}>Payment Method</label>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />I agree to the Terms &
              Conditions
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary hover:scale-105 transition-all"
          >
            Book Shipment
          </button>
        </div>
      </form>
    </section>
  );
}
