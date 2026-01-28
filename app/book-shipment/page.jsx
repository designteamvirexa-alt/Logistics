// app/book-shipment/page.jsx

export const dynamic = "force-dynamic";

import BookShipment from "@/page/BookShipment";

export default async function Page({ searchParams }) {
  // 🔥 IMPORTANT: unwrap Promise
  const params = await searchParams;

  const pickup = params?.pickup ?? "";
  const drop = params?.drop ?? "";

  console.log("pickup, drop:", pickup, drop);

  return (
    <BookShipment
      pickupFromUrl={pickup}
      dropFromUrl={drop}
    />
  );
}
