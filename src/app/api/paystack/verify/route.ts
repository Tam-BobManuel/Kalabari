import { verifyTransaction } from "@/features/payment/server/paystack/verify";

export async function GET(request: Request) {
  return verifyTransaction(request);
}
