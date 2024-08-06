import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Galery from "@/Components/Galery";
import Main from "@/Components/Main";
import Map from "@/Components/Map";
import NavBar from "@/Components/NavBar";
import Services from "@/Components/Services";
import Services2 from "@/Components/Services2";
import Signup from "@/Components/Signup";
import Whatsapp from "@/Components/Whatsapp";
import Footer from "@/Components/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Services />
      <Services2 />
      <Signup />
      <Galery />
      <Contact />
      <Map />
      <Footer />
      <Whatsapp />
    </>
  );
}






