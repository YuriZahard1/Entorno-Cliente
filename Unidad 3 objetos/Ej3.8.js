const OPCIONES = ["1", "X", "2"];

const obtenerResultadoAleatorio = () =>
  OPCIONES[Math.floor(Math.random() * OPCIONES.length)];

const quiniela = Array.from({ length: 14 }, (_, indice) => ({
  partido: indice + 1,
  resultado: obtenerResultadoAleatorio(),
}));

console.log("=== RESULTADOS DE LA QUINIELA ===");
quiniela.forEach(({ partido, resultado }) => {
  console.log(`Partido ${partido.toString().padStart(2, "0")}: ${resultado}`);
});
