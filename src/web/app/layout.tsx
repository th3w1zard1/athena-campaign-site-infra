import type { Metadata } from "next";
import { Inter, Montserrat, Source_Sans_3, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // Ensure ThemeProvider.tsx exists in the components folder

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Political campaign fonts - clean, trustworthy, readable
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Athena Aguiar for Eugene Ward 5 City Council | Progressive Leadership",
  description: "Official campaign website for Athena Aguiar, candidate for Eugene Ward 5 City Council in Oregon. Learn about her progressive platform, events, and how to get involved.",
  keywords: "Athena Aguiar, Eugene Ward 5, City Council, Oregon, campaign, election, politics, progressive leadership, housing justice, climate action",
  authors: [{ name: "Athena for Eugene Campaign Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://athenaforeugene.org",
    title: "Athena Aguiar for Eugene Ward 5 City Council | Progressive Leadership",
    description: "Official campaign website for Athena Aguiar, candidate for Eugene Ward 5 City Council in Oregon.",
    siteName: "Athena for Eugene Ward 5",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Aguiar for Eugene Ward 5 City Council | Progressive Leadership",
    description: "Official campaign website for Athena Aguiar, candidate for Eugene Ward 5 City Council in Oregon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${sourceSans.variable} ${openSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip navigation link for screen readers */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
