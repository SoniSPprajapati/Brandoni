import React from "react";
import Accordion from "./Accordion";

function Bellow() {
  return (
    <div>
      <Accordion
        title="React vs Angular"
        description="This is some text"
        showUnderline
        isOpen
      />
      <Accordion
        title="Flutter vs React Native"
        description="This is some text"
        isOpen
      />
      <Accordion title="React vs Angular" description="This is some text" />
    </div>
  );
}

export default Bellow;
