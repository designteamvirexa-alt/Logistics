"use client";

import { useState, useRef, useEffect } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { AnimatePresence, motion } from "framer-motion";

const GOOGLE_MAPS_KEY = "AIzaSyCUFg0FXQzrsLAuQ0Cs59mkQlwp6mzIQHc";
const libraries = ["places"];

export default function PorterPickupDrop() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_KEY,
    libraries,
  });

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pickupAuto = useRef(null);
  const dropAuto = useRef(null);
  const popupAuto = useRef(null);

  /* ---------- MOBILE DETECTION ---------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isLoaded) return null;

  /* ---------- DESKTOP HANDLERS ---------- */
  const handlePickupChange = () => {
    const place = pickupAuto.current?.getPlace();
    if (place?.formatted_address) setPickup(place.formatted_address);
  };

  const handleDropChange = () => {
    const place = dropAuto.current?.getPlace();
    if (place?.formatted_address) setDrop(place.formatted_address);
  };

  /* ---------- MOBILE POPUP SELECT ---------- */
  const handlePopupSelect = () => {
    const place = popupAuto.current?.getPlace();
    if (!place?.formatted_address) return;

    open === "pickup"
      ? setPickup(place.formatted_address)
      : setDrop(place.formatted_address);

    setOpen(null);
  };

  /* ---------- CURRENT LOCATION ---------- */
 const useCurrentLocation = (type) => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;

      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`
      );
      const data = await res.json();
      const address = data.results?.[0]?.formatted_address;

      if (!address) return;

      if (type === "pickup") setPickup(address);
      if (type === "drop") setDrop(address);

      setOpen(null);
    },
    () => alert("Location permission denied")
  );
};


  return (
    <>
      {/* ================= BOOKING CARD ================= */}
      <div className="bg-white shadow-2xl p-6 rounded-3xl max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">
          Your Booking is a Step Away!
        </h3>

        {/* PICKUP */}
        {isMobile ? (
          <input
            readOnly
            value={pickup}
            placeholder="Pickup Location"
            onClick={() => setOpen("pickup")}
            className="w-full p-4 mb-3 border rounded-xl"
          />
        ) : (
          <Autocomplete
            onLoad={(a) => (pickupAuto.current = a)}
            onPlaceChanged={handlePickupChange}
          >
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup Location"
              className="w-full p-4 mb-3 border rounded-xl"
            />
          </Autocomplete>
        )}

        {/* DROP */}
        {isMobile ? (
          <input
            readOnly
            value={drop}
            placeholder="Drop Location"
            onClick={() => setOpen("drop")}
            className="w-full p-4 mb-4 border rounded-xl"
          />
        ) : (
          <Autocomplete
            onLoad={(a) => (dropAuto.current = a)}
            onPlaceChanged={handleDropChange}
          >
            <input
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Drop Location"
              className="w-full p-4 mb-4 border rounded-xl"
            />
          </Autocomplete>
        )}

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Book Now
        </button>
      </div>

      {/* ================= MOBILE FULL SCREEN POPUP ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white p-4"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-lg">
                {open === "pickup" ? "Pickup Location" : "Drop Location"}
              </h4>
              <button onClick={() => setOpen(null)}>✕</button>
            </div>

            <button
              onClick={useCurrentLocation}
              className="w-full mb-4 p-3 border rounded-xl text-blue-600 font-medium"
            >
              📍 Use Current Location
            </button>

            <Autocomplete
              onLoad={(a) => (popupAuto.current = a)}
              onPlaceChanged={handlePopupSelect}
            >
              <input
                autoFocus
                placeholder="Type location..."
                className="w-full p-4 border rounded-xl"
              />
            </Autocomplete>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
