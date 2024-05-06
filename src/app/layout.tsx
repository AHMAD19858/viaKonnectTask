import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from '@/components/Provider'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "news app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
    <html lang="en">
    <head>
    <link
      rel="stylesheet"
      href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
    />
    
  </head>
      <body className={inter.className}>{children}</body>
    </html>
    </Provider>
  );
}
