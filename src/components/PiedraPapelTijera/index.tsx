import React from "react";
import { IPiedraPapelTijera } from "./interface";

const PiedraPapelTijera = ({
  seleccion,
  setSeleccion,
  contador,
  seleccionComputador,
}: IPiedraPapelTijera) => {
  return (
    <div>
      <button onClick={() => setSeleccion("Piedra")}>Piedra</button>
      <button onClick={() => setSeleccion("Papel")}>Papel</button>
      <button onClick={() => setSeleccion("Tijera")}>Tijera</button>
      <h1>{seleccion}</h1>
      <h4>{contador}</h4>
      <h4>Seleccion computador: {seleccionComputador}</h4>
    </div>
  );
};

export default PiedraPapelTijera;
