"use client";

import { Button } from "@/features/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/features/shared/ui/card";
import { Input } from "@/features/shared/ui/input";
import { Label } from "@/features/shared/ui/label";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import DonationAmountSelector from "./DonationAmountSelector";
import DonationSuccess from "./DonationSuccess";

export default function DonateForm() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") ?? undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | "">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (reference) {
      const verify = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `/api/paystack/verify?reference=${reference}`,
          );
          const data = await res.json();
          if (data.status === "success") {
            setSuccess(true);
          } else {
            setError("We could not confirm your donation. Please try again.");
          }
        } catch {
          setError("We could not confirm your donation. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      verify();
    }
  }, [reference]);

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    const parsed = Number(value);
    setAmount(Number.isNaN(parsed) ? "" : parsed);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !amount || amount <= 0) {
      setError("Please enter a valid email and donation amount.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount, name }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(
          data.error || "Unable to start your donation. Please try again.",
        );
        setLoading(false);
        return;
      }

      window.location.href = data.authorizationUrl;
    } catch {
      setError("Unable to start your donation. Please try again.");
      setLoading(false);
    }
  };

  if (success) {
    return <DonationSuccess />;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl alt-font text-white">
          Support Kalabari Culture
        </h1>
        <p className="text-lg text-[#8D8D8D] mt-4">
          Your donations help us document, preserve, and share the rich heritage
          of the Kalabari people. Every amount counts, and we are grateful for
          your support.
        </p>
      </div>

      <Card className="w-full max-w-lg mx-auto bg-[#26262D] border-[#3c3d45] text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Make a Donation</CardTitle>
          <CardDescription className="text-base text-[#8D8D8D]">
            Donations are processed securely with Paystack.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <DonationAmountSelector
              amount={amount}
              customAmount={customAmount}
              onSelect={handleAmountSelect}
              onCustomAmount={handleCustomAmount}
            />

            <div>
              <Label htmlFor="name" className="text-base mb-2 block">
                Name (optional)
              </Label>
              <Input
                id="name"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-black text-base"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black text-base"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full text-base py-6 bg-[#5F7FFF] hover:bg-[#5F7FFF]/90"
            >
              {loading ? (
                <ClipLoader size={20} color="#ffffff" />
              ) : (
                "Donate Securely"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
