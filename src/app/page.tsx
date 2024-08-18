// components
import { Navbar, Footer } from "../components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import Login from "./login";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <Footer />
    </>
  );
}
