import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
        <main>
        {/* {children} */}
        hello 
        </main>
      <Footer/>
    </>
  );
}
