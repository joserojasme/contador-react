import { useEffect, useState } from "react";
import ContadorComponent from "../../components/ContadorComponent";
import Saludo from "../../components/Saludo";
import PiedraPapelTijera from "../../components/PiedraPapelTijera";
import ToDo from "../../components/ToDo";

const Contador = () => {
  const [numeroActual, setNumeroActual] = useState(1);
  const [seleccion, setSeleccion] = useState("");
  const [contador, setContador] = useState(3);
  const [seleccionComputador, setSeleccionComputador] = useState("");
  const [nombre, setNombre] = useState("Luisa");
  const arreglo = ["Piedra", "Papel", "Tijera"];

  useEffect(() => {
    if (seleccion.length > 0 && contador >= 0) {
      if (contador === 0) {
        const aleatorio = arreglo[Math.floor(Math.random() * arreglo.length)];
        setSeleccionComputador(aleatorio);
      } else {
        setTimeout(() => {
          setContador(contador - 1);
        }, 1000);
      }
    }
  }, [seleccion, contador]);

  useEffect(() => {
    setContador(3);
    setSeleccion("");
  }, [seleccionComputador]);

  return (
    <div>
      <Saludo mensajeSaludo="Hola" nombre={nombre} />
      <ContadorComponent
        numeroActual={numeroActual}
        setNumeroActual={setNumeroActual}
      />
      <PiedraPapelTijera
        contador={contador}
        seleccion={seleccion}
        setSeleccion={setSeleccion}
        seleccionComputador={seleccionComputador}
        setNombre={setNombre}
      />
      <ToDo />
    </div>
  );
};

export default Contador;
