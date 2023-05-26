let carrito =[];

let carritoVacio = localStorage.getItem('carrito');
console.log(carrito)

if(carritoVacio) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    mostrarCarrito();
}

