export async function initializeTransaction(request: Request) {
  const { email, amount, name } = await request.json();

  if (!email || !amount || amount <= 0) {
    return Response.json(
      { error: "A valid email and amount are required" },
      { status: 400 },
    );
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return Response.json(
      { error: "Paystack secret key is not configured" },
      { status: 500 },
    );
  }

  const reference = `DON_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const origin = new URL(request.url).origin;
  const callbackUrl = `${origin}/donate?reference=${reference}`;

  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: Math.round(amount * 100),
          name,
          reference,
          callback_url: callbackUrl,
          currency: "NGN",
        }),
      },
    );

    const data = await response.json();

    if (!data.status) {
      return Response.json(
        { error: data.message || "Unable to initialize transaction" },
        { status: 400 },
      );
    }

    return Response.json({
      authorizationUrl: data.data.authorization_url,
      reference,
    });
  } catch {
    return Response.json(
      { error: "Failed to initialize transaction" },
      { status: 500 },
    );
  }
}
