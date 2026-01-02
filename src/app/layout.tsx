import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "szalik.dev — Backend Engineer",
  description:
    "Backend engineer building production systems trusted by thousands of users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B0D10] text-[#EAEAEA] antialiased relative overflow-x-hidden`}>
        {/* Global ambient gradient field */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(127,90,240,0.08),transparent_70%)]" />
          <div className="absolute top-[30%] right-[-15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(44,182,125,0.06),transparent_70%)]" />
          <div className="absolute bottom-[-20%] left-[20%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(127,90,240,0.05),transparent_70%)]" />
        </div>

        {children}
      </body>

    </html>
  );
}
