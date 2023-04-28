import { Inter } from "next/font/google";
import { MainLayout } from "../Components/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <MainLayout>
      <h2>About</h2>
    </MainLayout>
  );
}
