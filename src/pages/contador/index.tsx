import { useEffect, useState } from "react";
import ContadorComponent from "../../components/ContadorComponent";
import Saludo from "../../components/Saludo";
import PiedraPapelTijera from "../../components/PiedraPapelTijera";
import ToDo from "../../components/ToDo";
import ButtonChangeColor from "../../components/ButtonChangeColor";
import ToDoRecargado from "../../components/ToDoRecargado";

const Contador = () => {
  const [numeroActual, setNumeroActual] = useState(1);
  const [seleccion, setSeleccion] = useState("");
  const [contador, setContador] = useState(3);
  const [seleccionComputador, setSeleccionComputador] = useState("");
  const [nombre, setNombre] = useState("Luisa");
  const arreglo = ["Piedra", "Papel", "Tijera"];
  const [colorChanged, setColorChanged] = useState<boolean>(false);

  const ObjetoEjemplo = {
    estudiantes: [
      {
        nombre: "Carolina",
        apellido: "Lagares",
        edad: 24,
        novios: [
          {
            nombre: "Jonatan",
            esFiel: true,
          },
          {
            nombre: "Mario",
            esFiel: false,
          },
        ],
      },
      {
        nombre: "Dayana",
        apellido: "Hernández",
        edad: 24,
        novios: [
          {
            nombre: "Andrés",
            esFiel: false,
          },
          {
            nombre: "Carlos",
            esFiel: true,
          },
        ],
      },
    ],
    profesor: {
      nombre: "Juan",
      edad: 24,
      materias: {
        matematicas: {
          notaGanar: 3,
        },
        espaniol: {
          notaGanar: 4,
        },
      },
    },
  };

  console.log(
    "*el segundo novio de dayi es: ",
    ObjetoEjemplo.estudiantes[1].novios[1].nombre
  );

  console.log(
    "*Nota ganar matematicas: ",
    ObjetoEjemplo.profesor.materias.matematicas.notaGanar
  );

  console.log(
    "*Nota ganar espaniol: ",
    ObjetoEjemplo.profesor.materias.espaniol.notaGanar
  );

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
      {/* <ButtonChangeColor
        colorChanged={colorChanged}
        setColorChanged={setColorChanged}
      />
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
      /> */}
      {/* <ToDo initialValue="Luisa" /> */}
      <ToDoRecargado />
    </div>
  );
};

export default Contador;
