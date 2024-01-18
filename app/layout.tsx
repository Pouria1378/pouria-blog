import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Pouria Blog",
  description: "pouria personal blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir={cookies().get("currentLanguage")?.value === "fa" ? "rtl" : "ltr"}
      className="px-4 md:px-20 lg:px-44"
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
