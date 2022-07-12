import { useState } from "react";

const ToDo = ({ initialValue }: { initialValue: string }) => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState<Array<string>>([initialValue]);

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
      <button style={{ backgroundColor: "red" }} onClick={() => agregarItem()}>
        Agregar
      </button>
      <ol>
        {lista.map((item: string, index: number) => (
          <li style={{ background: `${(index + 1) % 2 === 0 ? "green" : ""}` }}>
            {`${item} - ${index + 1}`}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDo;
