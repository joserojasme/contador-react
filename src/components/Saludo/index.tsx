import { ISaludo } from "./interface";

const Saludo = ({ mensajeSaludo, nombre }: ISaludo) => {
  return (
    <div>
      <h1>{`${mensajeSaludo} ${nombre}`}</h1>
    </div>
  );
};

export default Saludo;
