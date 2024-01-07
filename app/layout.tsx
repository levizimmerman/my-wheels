import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cx from "classnames";
import "./globals.css";
import Header from "@/src/features/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyWheels - Challenge 🚙",
  description: "Searching cars by location and availability",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "dark:bg-slate-800")}>
        <Header title={metadata.title} description={metadata.description} />
        {children}
      </body>
    </html>
  );
}
