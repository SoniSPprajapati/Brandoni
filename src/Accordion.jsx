import React from "react";

function Accordion() {
  return (
    <details className="w-52 border-2 bg-gray-50 rounded-lg p-2">
      <summary className="cursor-pointer">Click to expand</summary>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
    </details>
  );
}

export default Accordion;
