import React from "react";

function Accordion({ title, description, showUnderline = false }) {
  console.log(showUnderline);

  return (
    <details className="w-52 border-2 bg-gray-50 rounded-lg p-2">
      <summary
        className={`cursor-pointer ${showUnderline ? "hover:underline" : ""}`}
      >
        {title}
      </summary>
      <p className="text-sm">{description}</p>
    </details>
  );
}

export default Accordion;
