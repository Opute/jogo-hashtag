import React from "react";
import "./styles.css";

export default function Reader(props) {
  function exibir() {
    const number = props.turno;
    if (number === 1) {
      return <p>Só Click'a Mano</p>;
    }
    if (number % 2 === 0) {
      return <p>Segundo Jogador</p>;
    } else {
      return <p>Primeiro Jogador</p>;
    }
  }

  function finder() {
    const number = props.turno;
    if (number === 1) {
      return <p>Só Click'a Mano</p>;
    }
    if (number % 2 === 0) {
      return <p>Vitoria Primeiro Jogador</p>;
    } else {
      return <p>Vitoria Segundo Jogador</p>;
    }
  }

  return (
    <div className="header">
      Jogo da Idosa
      <div className="turno">{props.hasWinner ? finder() : exibir()}</div>
    </div>
  );
}
