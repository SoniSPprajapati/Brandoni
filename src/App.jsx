import configs from "./assets/data.json";
import Bellow from "./Bellow.jsx";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Bellow data={configs} />
    </div>
  );
}

export default App;
