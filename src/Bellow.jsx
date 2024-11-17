import Accordion from "./Accordion";

function Bellow({ data }) {
  return (
    <div>
      {data.map((obj) => {
        return (
          <Accordion
            key={obj.id}
            title={obj.title}
            description={obj.description}
          />
        );
      })}
    </div>
  );
}

export default Bellow;
