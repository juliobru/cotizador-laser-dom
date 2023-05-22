let carrito = [];

let carritoVacio = localStorage.getItem('carrito');

if(carritoVacio !== null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    mostrarCarrito();
}

