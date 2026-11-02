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
  title: "Saimon Emon | Software Engineer — Backend Systems & Applied AI",
  description:
    "Portfolio of Saimon Emon, a software engineer focused on backend development, distributed systems, and applied AI. Explore selected projects, experience, and engineering case studies.",
  keywords: [
    "Saimon Hasan Emon",
    "Saimon Emon",
    "Software Engineer",
    "Backend Systems",
    "Distributed Systems",
    "Applied AI",
    "Python",
    "FastAPI",
    "Laravel",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "LedgerCore",
    "MediSA",
  ],
  authors: [{ name: "Saimon Emon", url: "https://github.com/saimonemon46" }],
  creator: "Saimon Emon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saimonemon.vercel.app/",
    title: "Saimon Emon | Software Engineer — Backend Systems & Applied AI",
    description:
      "Software engineer focused on backend development, distributed systems, and applied AI. Explore selected projects, experience, and engineering case studies.",
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
