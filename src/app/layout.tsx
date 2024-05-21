import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { AuthProvider } from "@/contexts/auth";
import { Toaster } from "sonner";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "ELEGOS",
  description: "Unifique o controle de dispositivos IOT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster richColors position="top-right" />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
