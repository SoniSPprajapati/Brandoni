import React from "react";
import data from "./assets/data.json";
import Bellow from "./Bellow.jsx";

console.log(data[0].description);

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Bellow />
    </div>
  );
}

export default App;
