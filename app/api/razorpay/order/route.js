export const runtime = "nodejs";

import Razorpay from "razorpay";

export async function POST(req) {
  const { amount } = await req.json();

  const razorpay = new Razorpay({
    key_id:rzp_test_S9MbPhPiYZr1P9,
    key_secret:XqgnLetVkiuJK8wIZcqckftH,
  });

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "shipment_" + Date.now(),
  });

  return Response.json(order);
}
