import React from "react";
import { Modal, Navbar } from "./components";
import { Download, Features, Hero, Questions, Contact, Footer } from "./features";

const App = () => {
  return <>
  <Modal isOpen={true} />
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
