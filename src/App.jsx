import { useState } from "react";
import configs from "./assets/data.json";
import Bellow from "./Bellow.jsx";

function App() {
  const [lastClicked, setLastClicked] = useState("Not clicked");

  return (
    <div className="flex flex-col gap-1 items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Last Selected: {lastClicked}</h1>
      <Bellow
        data={configs}
        showUnderline={true}
        isOpen={false}
        onClick={(value) => {
          setLastClicked(value);
        }}
      />
    </div>
  );
}

export default App;
