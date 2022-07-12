import { useState } from "react";
import { IListaTareas } from "./interface";

const ToDoRecargado = () => {
  const [tarea, setTarea] = useState("");
  const [minutos, setMinutos] = useState<number>(0);
  const [lista, setLista] = useState<Array<IListaTareas>>([]);

  const agregarItem = () => {
    if (tarea.length > 0 && minutos > 0) {
      const newItem: IListaTareas = {
        tarea: tarea,
        minutos: minutos,
      };
      setLista([...lista, newItem]);
      setTarea("");
      setMinutos(0);
    } else {
      alert("Debe completar todos los campos");
    }
  };

  return (
    <div>
      <h1>Agregue sus tareas</h1>
      <form>
        <input
          value={tarea}
          type="text"
          placeholder="Escriba la tarea..."
          name="tarea"
          onChange={(event) => setTarea(event.target.value)}
        />
        <br />
        <input
          value={minutos}
          type="number"
          placeholder="Escriba los minutos..."
          name="minutos"
          onChange={(event) => setMinutos(Number(event.target.value))}
        />
        <br />
        <label>
          <input type="checkbox" value={`aaa`} />
          ¿Es mujer?
        </label>
      </form>
      <button style={{ backgroundColor: "red" }} onClick={() => agregarItem()}>
        Agregar
      </button>
      <ol>
        {lista.map((item: IListaTareas) => (
          <li>{`${item.tarea} - Minutos: ${item.minutos}`}</li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoRecargado;
