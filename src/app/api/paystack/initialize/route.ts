import { initializeTransaction } from "@/features/payment/server/paystack/initialize";

export async function POST(request: Request) {
  return initializeTransaction(request);
}
