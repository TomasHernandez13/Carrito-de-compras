class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre
        this._precio = precio
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }

    get precio() {
        return this._precio
    }

    set precio(nuevoPrecio) {
        if(nuevoPrecio > 0) {
            this._precio = nuevoPrecio
        } else {
            console.log("el valor es menor que cero")
        }
    }
}

class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        this.productos.push(producto)
        alert(`${producto.nombre} agregado`)
    }

    CalcularTotal() {
        console.log("calculando el total de la compra...")
        return this.productos.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.precio
        }, 0)
    }

    mostrarProductos() {
        console.log("Mostrando productos en el carrito...")
        this.productos.forEach(producto => {
            alert(`nombre: ${producto.nombre}, precio: ${producto.precio}`)
        })
    }

}

let producto0 = new Producto("Leche", 1000)
let producto1 = new Producto("Pan de Molde", 2000)
let producto2 = new Producto("Queso", 1200)
let producto3 = new Producto("Mermelada", 890)
let producto4 = new Producto("Azúcar", 1000)


let carrito0 = new Carrito()


alert(`Productos disponibles \n \n 1.- ${producto0.nombre} $${producto0.precio} \n 2.- ${producto1.nombre} $${producto1.precio} \n 3.- ${producto2.nombre} $${producto2.precio} \n 4.- ${producto3.nombre} $${producto3.precio} \n 5.- ${producto4.nombre} $${producto4.precio} `)

let repetir = true
do {
    let prodSeleccionado = Number(prompt("Ingresa el numero del producto que deseas agregar al carrito:"))
    if(prodSeleccionado >= 1 && prodSeleccionado <= 5){

        switch (prodSeleccionado) {
            case 1: 
                carrito0.agregarProducto(producto0)

            break;

            case 2:
                carrito0.agregarProducto(producto1)

            break;

            case 3:
                carrito0.agregarProducto(producto2)

            break

            case 4:
                carrito0.agregarProducto(producto3)

            break

            case 5:
                carrito0.agregarProducto(producto4)

            break
        }
        
        let repetirAgregar
        do {
            repetirAgregar = prompt("desea agregar otro producto? (s/n)")
            if(repetirAgregar === "s") {
                repetir = true
            }
            else if(repetirAgregar === "n"){
                repetir = false
            } else {
                alert("opcion no valida")
            }
        } while(repetirAgregar !== "s" && repetirAgregar !== "n")

    } else{
        alert("el numero seleccionado no corresponde a ningun producto disponible")
        repetir = true
    }

    
} while(repetir)
    
alert(`El total de la compra es: ${carrito0.CalcularTotal()}`)