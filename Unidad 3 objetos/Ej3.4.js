const palabras = "PALABRA";

function informacion(palabra) {
  if (palabra.toUpperCase() === palabra) {
    console.log("La palabra esta toda en mayusculas");
  } else if (palabra.toLowerCase() === palabra) {
    console.log("La palabra esta toda en minusculas");
  } else {
    console.log("La palabra esta en mayusculas y minusculas");
  }
}

informacion(palabras);
