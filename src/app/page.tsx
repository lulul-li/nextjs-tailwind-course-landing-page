"use client";

// components
import { Navbar, Footer } from "../components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
// @ts-ignore
import {useRef} from "react";

export default function Campaign() {
    const statsRef = useRef(null);

    const handleScrollToStats = () => {
        statsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <>
      <Navbar />
        <Hero onScrollToStats={handleScrollToStats} />
        <div ref={statsRef}>
            <OutImpressiveStats />
        </div>
      <Footer />
    </>
  );
}
