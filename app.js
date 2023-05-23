let carrito =[];

let carritoVacio = localStorage.getItem('carrito');
console.log(carrito)

if(carritoVacio) {
    console.log('hola')
    carrito = JSON.parse(localStorage.getItem('carrito'));
    mostrarCarrito();
}

