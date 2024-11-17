function Accordion({
  title,
  description,
  showUnderline = false,
  isOpen = false,
  onClick = () => {},
}) {
  return (
    <details
      className="w-52 border-2 border-collapse bg-gray-50 p-2"
      open={isOpen}
      onToggle={() => onClick()}
    >
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
