import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import { Header } from "@/components/header/client";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { useTranslation } from "../i18n";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Pouria Seifi Blog",
  description: "this blog is pouria seifi personal blog",
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng);
  return (
    <html lang={lng} dir={dir(lng)} className="px-4 md:px-20 lg:px-44">
      <GoogleAnalytics gaId="G-6J86TGZXCT" />
      <body>
        <Header lng={lng} />
        {children}
        <Footer t={t} />
      </body>
    </html>
  );
}
