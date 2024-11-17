import Accordion from "./Accordion";

function Bellow({
  data,
  showUnderline = false,
  isOpen = false,
  onClick = () => {},
}) {
  return (
    <div>
      {data.map((obj) => {
        return (
          <Accordion
            key={obj.id}
            title={obj.title}
            description={obj.description}
            showUnderline={showUnderline}
            isOpen={isOpen}
            onClick={() => onClick(obj.title)}
          />
        );
      })}
    </div>
  );
}

export default Bellow;
