import DonateForm from "@/features/payment/components/DonateForm";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Donate - Kalabari",
};

export default function DonatePage() {
  return (
    <main className="bg-darkk min-h-screen p-4 pt-16 md:p-8 md:pt-20">
      <Suspense>
        <DonateForm />
      </Suspense>
    </main>
  );
}
