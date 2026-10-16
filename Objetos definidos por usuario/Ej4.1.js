// 1. Clase Articulo
class Articulo {
  #nombre;
  #precio;
  #descuento;

  constructor(nombre, precio, descuento) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descuento = descuento;
  }

  // Getters para acceder a las propiedades privadas
  get nombre() {
    return this.#nombre;
  }
  get precio() {
    return this.#precio;
  }
  get descuento() {
    return this.#descuento;
  }
}

// 2. Clase ELement (relaciona un artículo con su cantidad)
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
}

// 3. Clase Cliente
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
}

// 4. Clase Empresa
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
}

// 5. Clase Factura (Corregida con empresa, cliente, elementos y los métodos pedidos)
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
    this.#elementos = []; // Array que almacenará objetos de la clase ELement
    this.#importeTotal = 0;
    this.#tipoIva = tipoIva;
    this.#formaPago = formaPago;
  }

  // Método para añadir elementos a la factura
  agregarElemento(elemento) {
    this.#elementos.push(elemento);
  }

  // Método que calcula el importe total y actualiza la propiedad correspondiente
  calcularImporteTotal() {
    let subtotal = 0;

    for (let i = 0; i < this.#elementos.length; i++) {
      let item = this.#elementos[i];
      // Multiplica el precio del artículo por la cantidad de unidades
      subtotal += item.articulo.precio * item.cantidad;
    }

    // Aplicar el IVA al subtotal y actualizar la propiedad privada
    this.#importeTotal = subtotal + subtotal * (this.#tipoIva / 100);
    return this.#importeTotal;
  }

  // Método que muestra por pantalla el importe total
  mostrarImporteTotal() {
    console.log(
      `El importe total de la factura es: ${this.#importeTotal.toFixed(2)} €`,
    );
  }
}

// --- Array de clientes de ejemplo que ya tenías ---
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

// --- Ejemplo de uso completo ---

// Creamos los datos de la Empresa
const miEmpresa = new Empresa(
  "Tecnología SL",
  "Calle Principal 10",
  "961112233",
  "B98765432",
);

// Cogemos un cliente del array que ya tenías y creamos el objeto Cliente
const datosCarlos = clientes[0];
const unCliente = new Cliente(
  datosCarlos.nombre,
  datosCarlos.address,
  datosCarlos.phone,
  datosCarlos.nif,
);

// Creamos artículos
const art1 = new Articulo("Monitor 24 pulgadas", 150, 0);
const art2 = new Articulo("Cable HDMI", 10, 0);

// Creamos la factura (pasando la empresa, el cliente, 21% de IVA y forma de pago)
const miFactura = new Factura(miEmpresa, unCliente, 21, "Efectiu");

// Añadimos elementos a la factura (usando tu clase ELement)
miFactura.agregarElemento(new ELement(art1, 2)); // 2 monitores a 150€ = 300€
miFactura.agregarElemento(new ELement(art2, 3)); // 3 cables HDMI a 10€ = 30€
// Subtotal = 330 € + 21% IVA (69.30 €) = 399.30 €

// Ejecutamos los métodos requeridos
miFactura.calcularImporteTotal();
miFactura.mostrarImporteTotal(); // Imprime en consola: El importe total de la factura es: 399.30 €
