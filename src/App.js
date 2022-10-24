import React, { useState } from "react";
import "./styles.css";

import BigBox from "./BigBox";
import Header from "./Header";
import Verific from "./Verific";

export default function App() {
  const [win, setWin] = useState(false);

  const [count, setCount] = useState(1);

  const [table, setTable] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  function onClick(linha, coluna) {
    if (table[linha][coluna] === 0) {
      table[linha][coluna] = count;
      setTable(table);
      increment();
      setWin(Verific(table));
      if (count === 9 && win !== true) {
        tryAgain();
      }
    }
  }

  const increment = () => {
    setCount(count + 1);
  };

  function tryAgain() {
    setCount(1);
    setTable([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setWin(false);
  }

  return (
    <div className="App">
      <Header className="header" turno={count} hasWinner={win} />
      {win ? (
        <button class="button button2" onClick={tryAgain}>
          Play again
        </button>
      ) : (
        <BigBox className="bigbox" onClick={onClick} table={table} />
      )}
    </div>
  );
}
