import { useState } from "react";

const ToDo = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState<Array<string>>([]);

  const agregarItem = () => {
    if (tarea.length > 0) {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  return (
    <div>
      <h1>Agregue sus tareas</h1>
      <form>
        <input
          value={tarea}
          type="text"
          placeholder="Aquí..."
          name="tarea"
          onChange={(event) => setTarea(event.target.value)}
        />
      </form>
      <button onClick={() => agregarItem()}>Agregar</button>
      <ol>
        {lista.map((item: string) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ToDo;
