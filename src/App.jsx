import data from "./assets/data.json";
import Bellow from "./Bellow.jsx";

function App() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center min-h-screen">
      <Bellow data={data} />
    </div>
  );
}

export default App;
