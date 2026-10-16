function esPalindromo(cadena) {
  const limpio = cadena.toLowerCase().replaceAll(" ", "");

  const invertido = limpio.split("").reverse().join("");

  if (limpio === invertido) {
    return `"${cadena}" Si es un palíndromo.`;
  } else {
    return `"${cadena}" No es un palíndromo.`;
  }
}

console.log(esPalindromo("La ruta nos aporto otro paso natural"));
