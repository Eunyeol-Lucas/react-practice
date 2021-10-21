import React from "react";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import ColorContext, { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
