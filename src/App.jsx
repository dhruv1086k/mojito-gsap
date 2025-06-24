import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText); // gsap doesn't automatically activates plugin so we use this line to activate the plugins

const App = () => {
  return <div className="">App component</div>;
};

export default App;
