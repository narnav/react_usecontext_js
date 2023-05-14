import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ColorContext } from "./ColorContext";

const App = () => {
  const [color, setcolor] = useState("red");
  return (
    <div>
      <h1 style={{ color: color }}> Samp</h1>

      <ColorContext.Provider value={{ color, setcolor }}>
        <Outlet></Outlet>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
