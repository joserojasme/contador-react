import { IContadorComponent } from "./interface";
import "./styles.css";

const ContadorComponent = ({
  numeroActual,
  setNumeroActual,
}: IContadorComponent) => {
  return (
    <div className="ContadorComponent">
      <button onClick={() => setNumeroActual(numeroActual - 1)}>--</button>
      <span>{numeroActual}</span>
      <button onClick={() => setNumeroActual(numeroActual + 1)}>++</button>
      <button onClick={() => setNumeroActual(0)}>Limpiar</button>
    </div>
  );
};

export default ContadorComponent;
