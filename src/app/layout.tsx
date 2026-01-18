import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { LayoutProvider } from "../components/layoutProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const APP_NAME="Kalabari culture";
const APP_DEFAULT_TITILE = "Kalabari";
const APP_TITLE_TEMPLATE = "%s - APP";
const APP_DESCRIPTION = "A culture brought to the digital realm"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITILE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITILE
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITILE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2Fe645feaee1ad45acb7350181d47f95e0%2Fa828943776664c0cb86d08fa44138134',
        width: 720,
        height: 542,
        alt: 'Kalabari Culture OG Image',
      }
    ],
  },
  // Move meta tags that can be in metadata to here
  verification: {
    google: 'KMkWS2UsCPd9Snyuuhq3hzwUXeDiE1NSau-mN_UcVMA',
  },
  other: {
    'google-adsense-account': 'ca-pub-5399131316005652',
  },
  openGraph: {
    url: "https://www.kalabari.vercel.app",
    // ... rest of your openGraph properties
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalabari",
    description: "A culture brought to the digital realm",
    images: ["https://cdn.builder.io/api/v1/image/assets%2Fe645feaee1ad45acb7350181d47f95e0%2Fa828943776664c0cb86d08fa44138134"],
  },
};


export const viewport: Viewport ={
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
        <LayoutProvider>
          {children}  
          <Analytics />
          <SpeedInsights/>
        </LayoutProvider>
        
        {/* Replace inline script with Next.js Script component */}
        <Script
          id="bmc-widget"
          strategy="lazyOnload"
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="TamManuel"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for your support!"
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        />
      </body>
    </html>
  );
}