var valors = [true, 5, false, "hola", "adeu", 2];

const textoMasLargo = valors
  .filter((item) => typeof item === "string")
  .reduce((max, actual) => (actual.length > max.length ? actual : max), "");

console.log("1) Texto mayor:", textoMasLargo);

const booleans = valors.filter((item) => typeof item === "boolean");

const resultadoTrue = booleans.reduce((acc, val) => acc || val, false);

const resultadoFalse = booleans.reduce((acc, val) => acc && val, true);

console.log("2) Resultado true:", resultadoTrue); // true
console.log("2) Resultado false:", resultadoFalse); // false

const [num1, num2] = valors.filter((item) => typeof item === "number");

const operaciones = {
  suma: num1 + num2,
  resta: num1 - num2,
  multiplicacio: num1 * num2,
  divisio: num1 / num2,
  modul: num1 % num2,
};

console.log("3) Operaciones matematicas:", operaciones);
