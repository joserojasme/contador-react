import { IButtonChangeColor } from "./interface";

const ButtonChangeColor = ({
  colorChanged,
  setColorChanged,
}: IButtonChangeColor) => {
  return (
    <div>
      <button
        onClick={() => setColorChanged(!colorChanged)}
        style={{
          background: `${colorChanged ? "green" : "red"}`,
          cursor: "pointer",
        }}
      >
        {colorChanged ? "verdadero" : "false"}
      </button>
    </div>
  );
};

export default ButtonChangeColor;
