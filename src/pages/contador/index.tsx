import { useState } from "react";
import ContadorComponent from "../../components/ContadorComponent";
import Saludo from "../../components/Saludo";

const Contador = () => {
  const [numeroActual, setNumeroActual] = useState(1);
  return (
    <div>
      <Saludo mensajeSaludo="Hola" nombre="Jose" />
      <ContadorComponent
        numeroActual={numeroActual}
        setNumeroActual={setNumeroActual}
      />
    </div>
  );
};

export default Contador;
