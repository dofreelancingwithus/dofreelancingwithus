import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoFreelancingWithUs | Student Freelancers",
  description:
    "We're student freelancers passionate about Next.js, Django, AI, DevOps, personal branding, and digital marketing. Let's create something amazing together. Blueprints of innovation—before the launch, there’s a plan.",
  keywords: [
    "student freelancers",
    "Next.js developers",
    "Django developers",
    "AI projects",
    "DevOps engineers",
    "personal branding",
    "digital marketing",
    "portfolio website",
    "DoFreelancingWithUs",
    "freelancer collaboration",
    "developer portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/dfwu.png" sizes="any" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-227GS2NYKG"></Script>
        <Script id="google-analytics">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-227GS2NYKG');`
          }
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
