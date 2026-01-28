import crypto from "crypto";

const SECRET = "XqgnLetVkiuJK8wIZcqckftH";

export async function POST(req) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return Response.json({ success: true });
    }

    return Response.json({ success: false }, { status: 400 });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
