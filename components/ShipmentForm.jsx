"use client";

import { useState, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

/* ---------------- Pricing Config ---------------- */

const SERVICE_BASE_PRICE = {
  Standard: 999,
  Express: 1499,
  Premium: 1999,
};

const CHECKED_BAG_PRICE = 999;
const WEIGHT_PRICE_PER_KG = 99;

const BAG_SIZE_MULTIPLIER = {
  Small: 1,
  Medium: 1.1,
  Large: 1.25,
  XL: 1.4,
};

const LUGGAGE_TYPE_MULTIPLIER = {
  Suitcase: 1,
  Backpack: 0.9,
  Duffel: 0.95,
  Box: 1.2,
};

const ADDON_PRICES = {
  Packing: 199,
  "Priority Pickup": 299,
  Fragile: 149,
  Bubblewrap: 249,
  Insurance: 399,
};

/* ---------------- Corporate & GST ---------------- */

const CORPORATE_DISCOUNT_PERCENT = 10;

const CORPORATE_BULK_DISCOUNT = [
  { min: 20, discount: 15 },
  { min: 10, discount: 10 },
  { min: 5, discount: 5 },
];

const GST_PERCENT = 18;

/* ---------------- Pickup Slots ---------------- */

const PICKUP_SLOTS = [
  "6 AM - 9 AM",
  "9 AM - 12 PM",
  "12 PM - 3 PM",
  "3 PM - 6 PM",
  "6 PM - 9 PM",
];

/* ---------------- Google Sheet Submit ---------------- */

const submitToGoogleSheet = async (values, totalPrice, router) => {
  const toastId = toast.loading("Submitting...");

  try {
    const formData = new URLSearchParams();
    const payload = { ...values, totalPrice };

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(
        key,
        Array.isArray(value) ? value.join(", ") : value ?? ""
      );
    });

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }
    );

    const data = await res.json();
    toast.dismiss(toastId);

    if (data.result === "success") {
      toast.success("Booking confirmed 🎉");
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

/* ---------------- Price Calculation ---------------- */

const calculatePriceBreakup = (values) => {
  const servicePrice = SERVICE_BASE_PRICE[values.serviceType] || 0;
  const bags = Number(values.checkedBags || 0);
  const weight = Number(values.weight || 0);

  let subtotal =
    servicePrice + bags * CHECKED_BAG_PRICE + weight * WEIGHT_PRICE_PER_KG;

  const addonTotal = (values.addons || []).reduce(
    (sum, addon) => sum + (ADDON_PRICES[addon] || 0),
    0
  );

  subtotal += addonTotal;
  subtotal *= BAG_SIZE_MULTIPLIER[values.bagSize || "Small"];
  subtotal *= LUGGAGE_TYPE_MULTIPLIER[values.luggageType || "Suitcase"];

  let discount = 0;
  if (values.customerType === "Corporate") {
    discount += (subtotal * CORPORATE_DISCOUNT_PERCENT) / 100;
    const bulk = CORPORATE_BULK_DISCOUNT.find((b) => bags >= b.min);
    if (bulk) discount += (subtotal * bulk.discount) / 100;
  }

  const discountedTotal = subtotal - discount;

  const gst =
    values.customerType === "Corporate" || values.includeGST
      ? (discountedTotal * GST_PERCENT) / 100
      : 0;

  return {
    subtotal: Math.round(subtotal),
    discount: Math.round(discount),
    gst: Math.round(gst),
    total: Math.round(discountedTotal + gst),
  };
};

export default function ShipmentBookingForm() {
  const router = useRouter();

  const [values, setValues] = useState({
    customerType: "Individual",
    addons: [],
    includeGST: false,
    luggageType: "Suitcase",

    pickupCity: "",
    pickupAddress: "",
    dropCity: "",
    dropAddress: "",
  });

  const price = useMemo(() => calculatePriceBreakup(values), [values]);

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddonChange = (addon, checked) => {
    setValues((prev) => ({
      ...prev,
      addons: checked
        ? [...prev.addons, addon]
        : prev.addons.filter((a) => a !== addon),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.name ||
      !values.phone ||
      !values.serviceType ||
      !values.pickupDate ||
      !values.deliveryDate ||
      !values.pickupTimeSlot
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (
      !values.pickupCity ||
      !values.pickupAddress ||
      !values.dropCity ||
      !values.dropAddress
    ) {
      toast.error("Pickup & Drop location required");
      return;
    }

    if (values.customerType === "Corporate" && !values.companyName) {
      toast.error("Company name required");
      return;
    }

    if (!values.paymentMode) {
      toast.error("Select payment mode");
      return;
    }

    await submitToGoogleSheet(values, price.total, router);
  };

  const fieldClass =
    "w-full h-[48px] rounded-lg px-4 bg-[#f5f5f5] text-sm outline-none border border-transparent focus:ring-1 focus:ring-[#013EFE] focus:border-[#013EFE]";

  return (
    <section className="py-12 md:pt-24 px-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-center text-2xl font-semibold">
          Shipment Booking Form
        </h2>

        {/* Customer Details */}
        <div>
          <h4 className="font-semibold mb-4">Customer Details</h4>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Customer Type
            </label>

            <div className="flex items-center gap-6">
              {/* Individual */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="customerType"
                  value="Individual"
                  checked={values.customerType === "Individual"}
                  onChange={(e) => handleChange("customerType", e.target.value)}
                  className="h-4 w-4 accent-blue"
                />
                <span className="text-sm text-gray-700">Individual</span>
              </label>

              {/* Corporate */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="customerType"
                  value="Corporate"
                  checked={values.customerType === "Corporate"}
                  onChange={(e) => handleChange("customerType", e.target.value)}
                  className="h-4 w-4 accent-"
                />
                <span className="text-sm text-gray-700">Corporate</span>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              placeholder="Full Name"
              className={fieldClass}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
              placeholder="Mobile Number"
              className={fieldClass}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <input
              placeholder="Email"
              className={fieldClass}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            {values.customerType === "Corporate" && (
              <>
                <input
                  placeholder="Company Name"
                  className={fieldClass}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
                <input
                  placeholder="GST Number"
                  className={fieldClass}
                  onChange={(e) => handleChange("gstNumber", e.target.value)}
                />
              </>
            )}
          </div>
        </div>

        {/* Pickup & Drop Location */}
        <div>
          <h4 className="font-semibold mb-4">Pickup & Drop Location</h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                placeholder="Pickup City"
                className={fieldClass}
                onChange={(e) => handleChange("pickupCity", e.target.value)}
              />
              {/* <textarea
                placeholder="Pickup Address"
                className={`${fieldClass} h-[90px] resize-none`}
                onChange={(e) => handleChange("pickupAddress", e.target.value)}
              /> */}
            </div>

            <div className="space-y-4">
              <input
                placeholder="Drop City"
                className={fieldClass}
                onChange={(e) => handleChange("dropCity", e.target.value)}
              />
              {/* <textarea
                placeholder="Drop Address"
                className={`${fieldClass} h-[90px] resize-none`}
                onChange={(e) => handleChange("dropAddress", e.target.value)}
              /> */}
            </div>
          </div>
        </div>

        {/* Pickup & Delivery Date */}
        <div>
          <h4 className="font-semibold mb-4">Pickup & Delivery</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              className={fieldClass}
              onChange={(e) => handleChange("pickupDate", e.target.value)}
            />
            <input
              type="date"
              className={fieldClass}
              onChange={(e) => handleChange("deliveryDate", e.target.value)}
            />
            <select
              className={fieldClass}
              onChange={(e) => handleChange("pickupTimeSlot", e.target.value)}
            >
              <option value="">Pickup Time Slot</option>
              {PICKUP_SLOTS.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-semibold mb-4">Service</h4>
          <select
            className={fieldClass}
            onChange={(e) => handleChange("serviceType", e.target.value)}
          >
            <option value="">Select Service</option>
            <option>Standard</option>
            <option>Express</option>
            <option>Premium</option>
          </select>
        </div>

        {/* Luggage */}
        <div>
          <h4 className="font-semibold mb-4">Luggage</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="number"
              placeholder="No of Bags"
              className={fieldClass}
              onChange={(e) => handleChange("checkedBags", e.target.value)}
            />
            <input
              type="number"
              placeholder="Total Weight (kg)"
              className={fieldClass}
              onChange={(e) => handleChange("weight", e.target.value)}
            />
            <select
              className={fieldClass}
              onChange={(e) => handleChange("bagSize", e.target.value)}
            >
              <option value="">Bag Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>
            <select
              className={fieldClass}
              onChange={(e) => handleChange("luggageType", e.target.value)}
            >
              <option>Suitcase</option>
              <option>Trolley</option>
              <option>BackPack</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h4 className="font-semibold mb-4">Add-ons</h4>
          <div className="flex flex-wrap gap-6">
            {Object.keys(ADDON_PRICES).map((addon) => (
              <label key={addon} className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={values.addons.includes(addon)}
                  onChange={(e) => handleAddonChange(addon, e.target.checked)}
                />
                {addon} (+₹{ADDON_PRICES[addon]})
              </label>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div>
          <h4 className="font-semibold mb-4">Payment Mode</h4>
          <select
            className={fieldClass}
            onChange={(e) => handleChange("paymentMode", e.target.value)}
          >
            <option value="">Select Payment Mode</option>
            <option>UPI</option>
            <option>Card</option>
            <option>Net Banking</option>
            <option>Cash</option>
            {values.customerType === "Corporate" && (
              <option>Corporate Credit</option>
            )}
          </select>
        </div>

        {/* Price */}
        <div className="bg-blue-50 border rounded-xl p-5 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{price.subtotal}</span>
          </div>

          {price.discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Corporate Discount</span>
              <span>-₹{price.discount}</span>
            </div>
          )}

          {price.gst > 0 && (
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{price.gst}</span>
            </div>
          )}

          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total Payable</span>
            <span>₹{price.total}</span>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full md:w-auto">
          Confirm Booking
        </button>
      </form>
    </section>
  );
}
