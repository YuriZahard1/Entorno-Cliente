function random() {
  let numeros = [];

  for (let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random(1) * 1000);

    numeros.push(num);
  }
  return console.log(numeros.sort((a, b) => a - b));
}
random();
