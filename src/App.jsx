import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText); // gsap doesn't automatically activates plugin so we use this line to activate the plugins

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
