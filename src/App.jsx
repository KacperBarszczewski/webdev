import React, { useState, useEffect, useRef } from "react";
import { Modal, Navbar } from "./components";
import { Download, Features, Hero, Questions, Contact, Footer } from "./features";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleTopHover = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const handleHoverEnd = () => {
    clearTimeout(hoverTimeout.current);
  };

  return <>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    <div
      onMouseEnter={handleTopHover}
      onMouseLeave={handleHoverEnd}>
      <Navbar />
    </div>

    <Hero />
    <Features />
    <Download />
    <Questions />
    <Contact />
    <Footer />

  </>;
};

export default App;
