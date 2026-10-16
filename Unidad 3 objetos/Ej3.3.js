const LETRAS_DNI = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const calcularLetra = (numero) => LETRAS_DNI[numero % 23];

const parsearDNI = (entrada) => {
  if (!entrada) return null;

  const textoLimpio = entrada.trim().toUpperCase();
  const esFormatoValido = /^\d{8}[A-Z]$/.test(textoLimpio);

  if (!esFormatoValido) return null;

  return {
    numero: parseInt(textoLimpio.slice(0, 8), 10),
    letra: textoLimpio.slice(-1),
  };
};

const validarDNI = (datosDNI) => {
  if (!datosDNI) {
    return {
      esValido: false,
      motivo:
        "El formato del DNI no es correcto (debe tener 8 números y 1 letra).",
    };
  }

  const letraCalculada = calcularLetra(datosDNI.numero);
  const esCorrecto = datosDNI.letra === letraCalculada;

  return {
    esValido: esCorrecto,
    motivo: esCorrecto
      ? `¡DNI válido! El número ${datosDNI.numero} corresponde a la letra ${datosDNI.letra}.`
      : `DNI incorrecto. Para el número ${datosDNI.numero}, la letra correcta debería ser ${letraCalculada} (has indicado ${datosDNI.letra}).`,
  };
};

const entradaUsuario = "12345678Z";

//const entradaUsuarioo = prompt(
//  "Por favor, introduce tu DNI con letra (ej: 12345678Z):",
//);

const resultado = validarDNI(parsearDNI(entradaUsuario));

console.log(resultado.motivo);
//alert(resultado.motivo);
console.log(12345678 % 23);
