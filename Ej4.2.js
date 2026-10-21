class Animal {
  #nombre;
  #especie;
  #numeroPatas;
  #tieneCola;

  constructor(nombre, especie, numeroPatas, tieneCola) {
    this.#nombre = nombre;
    this.#especie = especie;
    this.#numeroPatas = numeroPatas;
    this.#tieneCola = tieneCola;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get especie() {
    return this.#especie;
  }
  set especie(especie) {
    this.#especie = especie;
  }

  get numeroPatas() {
    return this.#numeroPatas;
  }
  set numeroPatas(numeroPatas) {
    this.#numeroPatas = numeroPatas;
  }

  get tieneCola() {
    return this.#tieneCola;
  }
  set tieneCola(tieneCola) {
    this.#tieneCola = tieneCola;
  }
}

class Vaca extends Animal {
  #cantidadLeche;
  constructor(cantidadLeche) {
    super(nombre, especie, numeroPatas, tieneCola);
    this.#cantidadLeche = cantidadLeche;
  }
  get cantidadLeche() {
    return this.#cantidadLeche;
  }
  set cantidadLeche(nuevaCantidad) {
    this.#cantidadLeche = nuevaCantidad;
  }
  ordenyar(litrosExtraidos) {
    this.#cantidadLeche -= litrosExtraidos;
  }
}

class Tigre extends Animal {
  #numeroVictimas;
  constructor(numeroVictimas) {
    super(nombre, especie, numeroPatas, tieneCola);
    this.#numeroVictimas = numeroVictimas;
  }
  get nuevasVictimas() {
    return this.#numeroVictimas;
  }
  set numeroVictimas(nuevasVictimas) {
    this.#numeroVictimas = nuevasVictimas;
  }
  caza(victimas) {
    this.#numeroVictimas += victimas;
  }
}
