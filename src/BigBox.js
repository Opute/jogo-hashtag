import React from "react";
import "./styles.css";
import circle from "./img/circle.svg";
import xis from "./img/xis.svg";

export default function BigBox(props) {
  function AddImg(count) {
    if (count !== 0) {
      if (count % 2 === 0) {
        return <img src={xis} alt="xis" />;
      } else {
        return <img src={circle} alt="circle" />;
      }
    }
  }

  function multiplicanine() {
    let shortBox = [];

    for (let c = 0; c < 3; c++) {
      for (let l = 0; l < 3; l++) {
        shortBox.push(
          <div className="shortbox" onClick={() => props.onClick(l, c)}>
            {AddImg(props.table[l][c])}
          </div>
        );
      }
    }
    return shortBox;
  }

  return <div className="bigbox">{multiplicanine()}</div>;
}
