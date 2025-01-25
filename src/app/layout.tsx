import type { Metadata } from "next";
import "@/app/globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

// Import Lato font
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify font weights
  variable: "--font-lato", // Define a CSS variable for Lato
});

const metadata: Metadata = {
  title: "Shop Sphere",
  description: "Ecommerce Management Tool",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export { metadata };
export default Layout;
