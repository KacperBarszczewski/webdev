import React, { useState } from "react";
import ArrowIcon from "../../assets/images/icon-arrow.svg";
import "./FAQItem.scss";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq" onClick={() => setOpen(!open)}>
      <div className="faq__question">
        <p>{question}</p>
        <img
          src={ArrowIcon}
          alt="arrow"
          className={`faq__icon ${open ? "faq__icon--open" : ""}`}
        />
      </div>
      <div className={`faq__answer ${open ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
