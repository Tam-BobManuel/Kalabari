import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import "../../globals.css";
import { LayoutProvider } from "../components/layoutProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


// const inter = Inter({ subsets: ["latin"] });
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
        url: '/images/regions/AbonnemaWharf.jpeg', // path to your image file
        width: 720,
        height: 542,
        alt: 'Kalabari Culture OG Image',
      }
    ],
  },
  twitter: {
    card: "summary",
    site: APP_NAME,
    title: {
      default: APP_DEFAULT_TITILE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: '/images/GI5YHyFXsAAHRGi.jpeg', // path to your image file
        width: 720,
        height: 542,
        alt: 'Kalabari Culture OG Image',
      }
    ],
  },
  other: {
    pinterest: "abeg na work!",
    
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
      <meta name="google-adsense-account" content="ca-pub-5399131316005652"></meta>
      <title>Kalabari</title>
      <meta name="description" content="A culture brought to the digital realm"></meta>

      <meta property="og:url" content="https://www.kalabari.vercel.app"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Kalabari"></meta>
      <meta property="og:description" content="A culture brought to the digital realm"></meta>

      <meta property="og:image" content="/images/GI5YHyFXsAAHRGi.jpeg"></meta>
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:domain" content="kalabari.vercel.app"></meta>
      <meta property="twitter:url" content="https://www.kalabari.vercel.app"></meta>
      <meta name="twitter:title" content="Kalabari"></meta>
      <meta name="twitter:description" content="A culture brought to the digital realm"></meta>
      <meta name="twitter:image" content="/images/GI5YHyFXsAAHRGi.jpeg">
      </meta>
      <body>  
        <LayoutProvider>
          {children}  
          <Analytics />
          <SpeedInsights/>
        </LayoutProvider>
      </body>
    </html>
  );
}
