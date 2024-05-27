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
    linkedin: {
      type: "website",
      siteName: APP_NAME,
      card: "summary",
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
    facebook: {
      card:"summary",
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
    discord: {
      card:"summary",
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
    }
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
