import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "MoneyFlow",
  description: "돈 관리를 체계적이고, 시각적으로",
  verification: {
    google: "cwiFwSNi7XWYd2f2LAHNn4Klwf17ebD_55VRkgtU9Ew",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://getmoneyflow.vercel.app",
    siteName: "MoneyFlow",
    title: "MoneyFlow - 돈 관리의 새로운 패러다임",
    description: "쉽고 체계적인 돈 관리 솔루션, MoneyFlow에서 만나보세요.",
    images: [
      {
        url: "https://getmoneyflow.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "MoneyFlow Preview Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://getmoneyflow.vercel.app",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr" suppressHydrationWarning>
      <body className="antialiased scrollbar-hide">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
