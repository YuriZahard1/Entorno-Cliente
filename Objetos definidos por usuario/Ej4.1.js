class Articulo {
  #nombre;
  #precio;
  #descuento;

  constructor(nombre, precio, descuento) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descuento = descuento;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }
  get precio() {
    return this.#precio;
  }
  get descuento() {
    return this.#descuento;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
  set descuento(nuevoDescuento) {
    this.#descuento = nuevoDescuento;
  }
}

class ELement {
  #articulo;
  #cantidad;

  constructor(articulo, cantidad) {
    this.#articulo = articulo;
    this.#cantidad = cantidad;
  }

  // Getters
  get articulo() {
    return this.#articulo;
  }
  get cantidad() {
    return this.#cantidad;
  }

  // Setters
  set articulo(nuevoArticulo) {
    this.#articulo = nuevoArticulo;
  }
  set cantidad(nuevaCantidad) {
    this.#cantidad = nuevaCantidad;
  }
}

class Cliente {
  #nombre;
  #address;
  #phone;
  #nif;

  constructor(nombre, address, phone, nif) {
    this.#nombre = nombre;
    this.#address = address;
    this.#phone = phone;
    this.#nif = nif;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }
  get address() {
    return this.#address;
  }
  get phone() {
    return this.#phone;
  }
  get nif() {
    return this.#nif;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set address(nuevaAddress) {
    this.#address = nuevaAddress;
  }
  set phone(nuevoPhone) {
    this.#phone = nuevoPhone;
  }
  set nif(nuevoNif) {
    this.#nif = nuevoNif;
  }
}

class Empresa {
  #nombre;
  #address;
  #phone;
  #nif;

  constructor(nombre, address, phone, nif) {
    this.#nombre = nombre;
    this.#address = address;
    this.#phone = phone;
    this.#nif = nif;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }
  get address() {
    return this.#address;
  }
  get phone() {
    return this.#phone;
  }
  get nif() {
    return this.#nif;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set address(nuevaAddress) {
    this.#address = nuevaAddress;
  }
  set phone(nuevoPhone) {
    this.#phone = nuevoPhone;
  }
  set nif(nuevoNif) {
    this.#nif = nuevoNif;
  }
}

class Factura {
  #empresa;
  #cliente;
  #elementos;
  #importeTotal;
  #tipoIva;
  #formaPago;

  constructor(empresa, cliente, tipoIva, formaPago) {
    this.#empresa = empresa;
    this.#cliente = cliente;
    this.#elementos = [];
    this.#importeTotal = 0;
    this.#tipoIva = tipoIva;
    this.#formaPago = formaPago;
  }

  // Getters
  get empresa() {
    return this.#empresa;
  }
  get cliente() {
    return this.#cliente;
  }
  get elementos() {
    return this.#elementos;
  }
  get importeTotal() {
    return this.#importeTotal;
  }
  get tipoIva() {
    return this.#tipoIva;
  }
  get formaPago() {
    return this.#formaPago;
  }

  // Setters
  set empresa(nuevaEmpresa) {
    this.#empresa = nuevaEmpresa;
  }
  set cliente(nuevoCliente) {
    this.#cliente = nuevoCliente;
  }
  set tipoIva(nuevoIva) {
    this.#tipoIva = nuevoIva;
  }
  set formaPago(nuevaFormaPago) {
    this.#formaPago = nuevaFormaPago;
  }

  agregarElemento(elemento) {
    this.#elementos.push(elemento);
  }

  calcularImporteTotal() {
    let subtotal = 0;

    for (let i = 0; i < this.#elementos.length; i++) {
      let item = this.#elementos[i];
      let articulo = item.articulo;

      // Aplicamos el descuento del artículo (en porcentaje) al precio unitario
      let precioConDescuento =
        articulo.precio - articulo.precio * (articulo.descuento / 100);

      subtotal += precioConDescuento * item.cantidad;
    }

    this.#importeTotal = subtotal + subtotal * (this.#tipoIva / 100);
    return this.#importeTotal;
  }

  mostrarImporteTotal() {
    console.log(
      `El importe total de la factura es: ${this.#importeTotal.toFixed(2)} €`,
    );
  }
}

let clientes = [
  {
    nombre: "Carlos",
    address: "123Street",
    phone: "666666666",
    nif: "12345678Z",
  },
  {
    nombre: "Pedro",
    address: "231Street",
    phone: "888888888",
    nif: "98765432D",
  },
  {
    nombre: "Carmen",
    address: "321Street",
    phone: "777777777",
    nif: "87654321Z",
  },
];

const miEmpresa = new Empresa(
  "Tecnología SL",
  "Calle Principal 10",
  "961112233",
  "B98765432",
);

const datosCarlos = clientes[0];
const unCliente = new Cliente(
  datosCarlos.nombre,
  datosCarlos.address,
  datosCarlos.phone,
  datosCarlos.nif,
);

// Artículo con 10% de descuento de prueba
const art1 = new Articulo("Monitor 24 pulgadas", 150, 10);
const art2 = new Articulo("Cable HDMI", 10, 0);

const miFactura = new Factura(miEmpresa, unCliente, 21, "Efectiu");

miFactura.agregarElemento(new ELement(art1, 2));
miFactura.agregarElemento(new ELement(art2, 3));

miFactura.calcularImporteTotal();
miFactura.mostrarImporteTotal();
