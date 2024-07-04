import Card from "@/components/Cards";
import HamburgerMenu from "@/components/HamburgerMenu";
import { OrbitingCircle } from "@/components/OrbitingCircle";
import { Sticky } from "@/components/StickyScroll";
import { Stick } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className=" flex flex-col items-center">
    <OrbitingCircle/>
    <Sticky/>
    </main>
    </>
  );
}

