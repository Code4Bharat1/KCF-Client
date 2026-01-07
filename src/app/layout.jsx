import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kokan Community Forum",
  description: "Empowering Education, Enriching Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* WhatsApp Floating Button – Global */}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
