function Accordion({
  title,
  description,
  showUnderline = false,
  isOpen = false,
  onClick = () => {},
}) {
  const URL = "https://wakati.ritoho8508.workers.dev/";
  fetch();

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

        <span className="text-xs text-slate-600">
          {description.split(" ").length} words
        </span>
      </summary>
      <p className="text-sm">{description}</p>
    </details>
  );
}

export default Accordion;
