import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingActions } from "@/components/FloatingActions";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD. Saimon Hasan Emon — Software Engineer | Backend & Distributed Systems",
  description:
    "Portfolio of MD. Saimon Hasan Emon. Backend & Distributed Systems Engineer specializing in high-throughput asynchronous pipelines, distributed media architectures, real-time WebRTC clusters, and applied AI systems.",
  keywords: [
    "Saimon Hasan Emon",
    "Saimon Emon",
    "Backend Engineer",
    "Distributed Systems",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Software Engineer Dhaka",
    "ZeroDrift",
    "MediSA",
  ],
  authors: [{ name: "MD. Saimon Hasan Emon", url: "https://github.com/saimonemon46" }],
  creator: "MD. Saimon Hasan Emon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saimonemon.vercel.app/",
    title: "MD. Saimon Hasan Emon — Backend & Distributed Systems Engineer",
    description:
      "I build resilient backend architectures, asynchronous distributed pipelines, real-time media clusters, and applied AI systems — where correctness is guaranteed and latency is minimized.",
    siteName: "Saimon Emon Portfolio",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F5F1E8] dark:bg-[#161412] text-[#29251F] dark:text-[#F5F1E8] font-sans antialiased selection:bg-[#B66A3C]/20 dark:selection:bg-blue-600/30 selection:text-[#29251F] dark:selection:text-[#F5F1E8] transition-colors duration-200">
        <ThemeProvider>
          {children}
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
