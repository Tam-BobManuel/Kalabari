import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { LayoutProvider } from "../components/layoutProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';
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
  }
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
      <Head>
        <meta name="google-adsense-account" content="ca-pub-5399131316005652"></meta>
        <title>Kalabari</title>
        <meta name="description" content="A culture brought to the digital realm"></meta>

        {/* Open Graph: Facebook, LinkedIn, and Pinterest */}
        <meta property="og:url" content="https://www.kalabari.vercel.app"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Kalabari"></meta>
        <meta property="og:description" content="A culture brought to the digital realm"></meta>
        <meta property="og:image" content="https://cdn.builder.io/api/v1/image/assets%2Fe645feaee1ad45acb7350181d47f95e0%2Fa828943776664c0cb86d08fa44138134"></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="kalabari.vercel.app"></meta>
        <meta property="twitter:url" content="https://www.kalabari.vercel.app"></meta>
        <meta name="twitter:title" content="Kalabari"></meta>
        <meta name="twitter:description" content="A culture brought to the digital realm"></meta>
        <meta name="twitter:image" content="https://cdn.builder.io/api/v1/image/assets%2Fe645feaee1ad45acb7350181d47f95e0%2Fa828943776664c0cb86d08fa44138134">
        </meta>
      </Head>
      <body>  
        <LayoutProvider>
          {children}  
          <Analytics />
          <SpeedInsights/>
        </LayoutProvider>
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
