import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { LayoutProvider } from "../features/shared/components/LayoutProvider";

const APP_NAME = "Kalabari culture";
const APP_DEFAULT_TITLE = "Kalabari";
const APP_DESCRIPTION = "A culture brought to the digital realm";
const OG_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2Fe645feaee1ad45acb7350181d47f95e0%2Fa828943776664c0cb86d08fa44138134";

export const metadata: Metadata = {
  metadataBase: new URL("https://kalabari.vercel.app"),
  title: {
    default: APP_DEFAULT_TITLE,
    template: "%s",
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: "https://www.kalabari.vercel.app",
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: {
    "google-adsense-account": "ca-pub-5399131316005652",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5399131316005652"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
