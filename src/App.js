import React from "react";
import "./styles.css";

import BigBox from "./box";

export default function App() {
  return (
    <div className="App">
      <br />
      <h1>
        <b>Jogo da Velha</b>
      </h1>
      <br />
      <BigBox className="bigbox" />
    </div>
  );
}
