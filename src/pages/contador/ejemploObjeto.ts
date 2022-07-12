export const ObjetoEjemplo = {
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
