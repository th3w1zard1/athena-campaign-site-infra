import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // Ensure ThemeProvider.tsx exists in the components folder

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
      <head>
        {/* Load Google Fonts asynchronously via CSS to avoid build-time network calls */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
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
