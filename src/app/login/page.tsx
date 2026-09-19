import type { Metadata } from "next";
import LoginPlaceholder from "@/features/login/components/LoginPlaceholder";

export const metadata: Metadata = {
  title: "Login - Kalabari",
};

export default function LoginPage() {
  return <LoginPlaceholder />;
}
