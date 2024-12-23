import { useState, useEffect } from "react";

function Accordion({
  title,
  description,
  showUnderline = false,
  isOpen = false,
  onClick = () => {},
}) {
  const [readTime, setReadTime] = useState(0);
  const URL = "https://wakati.ritoho8508.workers.dev/api/calculate";

  useEffect(() => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentence: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReadTime(data.seconds);
      });
  }, []);

  return (
    <details
      className="w-60 border-2 border-collapse bg-gray-50 p-2"
      open={isOpen}
      onToggle={() => onClick()}
    >
      <summary
        className={`cursor-pointer ${
          showUnderline ? "hover:underline" : ""
        } flex justify-between items-center`}
      >
        {title}

        <span className="text-xs text-slate-600">{readTime} seconds</span>
      </summary>
      <p className="text-sm">{description}</p>
    </details>
  );
}

export default Accordion;
