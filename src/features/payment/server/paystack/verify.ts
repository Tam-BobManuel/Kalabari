export async function verifyTransaction(request: Request) {
  const reference = new URL(request.url).searchParams.get("reference");

  if (!reference) {
    return Response.json({ error: "Reference is required" }, { status: 400 });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return Response.json(
      { error: "Paystack secret key is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
      }
    );

    const data = await response.json();

    if (!data.status) {
      return Response.json(
        { error: data.message || "Unable to verify transaction" },
        { status: 400 }
      );
    }

    return Response.json({
      status: data.data.status,
      amount: data.data.amount,
      currency: data.data.currency,
      reference: data.data.reference,
    });
  } catch {
    return Response.json(
      { error: "Failed to verify transaction" },
      { status: 500 }
    );
  }
}
