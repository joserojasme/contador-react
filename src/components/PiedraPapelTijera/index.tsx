import { IPiedraPapelTijera } from "./interface";

const PiedraPapelTijera = ({
  seleccion,
  setSeleccion,
  contador,
  seleccionComputador,
  setNombre,
}: IPiedraPapelTijera) => {
  return (
    <div>
      <button
        disabled={seleccion.length > 0 && seleccion !== "Piedra" ? true : false}
        onClick={() => setSeleccion("Piedra")}
      >
        Piedra
      </button>
      <button
        disabled={seleccion.length > 0 && seleccion !== "Papel" ? true : false}
        onClick={() => setSeleccion("Papel")}
      >
        Papel
      </button>
      <button
        disabled={seleccion.length > 0 && seleccion !== "Tijera" ? true : false}
        onClick={() => setSeleccion("Tijera")}
      >
        Tijera
      </button>
      <button
        onClick={() => {
          setNombre("Caro");
        }}
      >
        Cambiar nombre
      </button>
      <h1>{seleccion}</h1>
      <h4>{contador}</h4>
      <h4>Seleccion computador: {seleccionComputador}</h4>
    </div>
  );
};

export default PiedraPapelTijera;
