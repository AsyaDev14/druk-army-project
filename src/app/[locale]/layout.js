import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider/TranslationsProvider";

import '../globals.css'

const i18nNamespaces = ["header", "footer", "terms", "notfound"];

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const { _, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="uk">
      <body className={font.className}>
        <Providers>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}
