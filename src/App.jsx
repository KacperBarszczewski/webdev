import React from "react";
import { Navbar } from "./components";
import { Download, Features, Hero } from "./features";

const App = () => {
  return <>
    <Navbar />
    <Hero />
    <Features />
    <Download />
  </>;
};

export default App;
