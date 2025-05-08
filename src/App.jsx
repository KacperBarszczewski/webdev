import React from "react";
import { Navbar } from "./components";
import { Download, Features, Hero, Questions, Contact, Footer } from "./features";

const App = () => {
  return <>
    <Navbar />
    <Hero />
    <Features />
    <Download />
    <Questions />
    <Contact />
    <Footer />
  </>;
};

export default App;
