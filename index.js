const botonProducto1 = document.getElementById("añadir-producto1")
botonProducto1.addEventListener("click", function agregarProducto1() {
    const nombre = document.getElementById("nombre-producto1").textContent
    const carritoProductos = JSON.parse(localStorage.getItem("carrito"))
    const listaProductos = []
    const carrito = carritoProductos || listaProductos
    carrito.push(nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.removeItem("nombre")
    window.location.reload();
})

const botonProducto2 = document.getElementById("añadir-producto2")
botonProducto2.addEventListener("click", function agregarProducto2() {
    const nombre = document.getElementById("nombre-producto2").textContent
    const carritoProductos = JSON.parse(localStorage.getItem("carrito"))
    const listaProductos = []
    const carrito = carritoProductos || listaProductos
    carrito.push(nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.removeItem("nombre")
    window.location.reload();
})

const botonProducto3 = document.getElementById("añadir-producto3")
botonProducto3.addEventListener("click", function agregarProducto3() {
    const nombre = document.getElementById("nombre-producto3").textContent
    const carritoProductos = JSON.parse(localStorage.getItem("carrito"))
    const listaProductos = []
    const carrito = carritoProductos || listaProductos
    carrito.push(nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    localStorage.removeItem("nombre")
    window.location.reload();
})


const carrito = JSON.parse(localStorage.getItem("carrito"))

let contadorProducto1 = 0
let contadorProducto2 = 0
let contadorProducto3 = 0

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i] === "Terraria") {
        contadorProducto1 += 1
    }
    if (carrito[i] === "Hollow Knight") {
        contadorProducto2 += 1
    }
    if (carrito[i] === "Hollow Knight Silksong") {
        contadorProducto3 += 1
    }
}
console.log(localStorage)

const contador1 = document.getElementById("contador1")
contador1.textContent = "cantidad seleccionada: "  + contadorProducto1
if (contadorProducto1 > 0) {
    contador1.textContent = "cantidad seleccionada: "  + contadorProducto1
} else {
    contador1.textContent = "cantidad seleccionada: 0"
}

const contador2 = document.getElementById("contador2")
contador2.textContent = "cantidad seleccionada: "  + contadorProducto2
if (contadorProducto2 > 0) {
    contador2.textContent = "cantidad seleccionada: "  + contadorProducto2

} else {
    contador2.textContent = "cantidad seleccionada: 0"
}
const contador3 = document.getElementById("contador3")
contador3.textContent = "cantidad seleccionada: "  + contadorProducto3
if (contadorProducto3 > 0) {
    contador3.textContent = "cantidad seleccionada: "  + contadorProducto3

} else {
    contador3.textContent = "cantidad seleccionada: 0"
}

const boton1 = document.getElementById("boton-producto1")
boton1.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Terraria") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton2 = document.getElementById("boton-producto2")
boton2.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Hollow Knight") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const boton3 = document.getElementById("boton-producto3")
boton3.addEventListener("click", function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] === "Hollow Knight Silksong") {
            carrito.splice(i, 1)
            i--;
            break
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    window.location.reload();
})

const precioProducto1 = document.getElementById("precio-producto1").textContent
const precioPorCantidadProducto1 = precioProducto1 * contadorProducto1
const precioProducto2 = document.getElementById("precio-producto2").textContent
const precioPorCantidadProducto2 = precioProducto2 * contadorProducto2
const precioProducto3 = document.getElementById("precio-producto3").textContent
const precioPorCantidadProducto3 = precioProducto3 * contadorProducto3

const cantidadTotal = document.getElementById("cantidad-total")
const sumaCantidad = contadorProducto1 + contadorProducto2 + contadorProducto3
cantidadTotal.textContent = sumaCantidad.toString()

const precioTotal = document.getElementById("precio-total")
const sumaPrecios = precioPorCantidadProducto1 + precioPorCantidadProducto2 + precioPorCantidadProducto3
precioTotal.innerHTML = sumaPrecios.toString()

