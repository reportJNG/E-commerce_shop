import type { Metadata } from "next";
import { ThemeProvider } from "./Components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Clothes",
  description: "Created By Hamza Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
