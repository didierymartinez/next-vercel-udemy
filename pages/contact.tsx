import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactElement } from "react";
import { DarkMode } from "../Components/Layouts/DarkMode";
import { MainLayout } from "../Components/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <Link href="/">
        <code>ir a HOME</code>
      </Link>
    </>
  );
}

Contact.getLayout = function getLayout(pagina: ReactElement) {
  return (
    <MainLayout>
      <DarkMode>{pagina}</DarkMode>
    </MainLayout>
  );
};
