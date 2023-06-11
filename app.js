let AceroCarbonoCheck =false;
let AceroInoxCheck =false;
let tipoAcero = 0;
let flagEspesor = false;
let tipoPlatina = 0;
let PrecioCorte;
let PrecioMaterial;
let Espesor;
let cantidad;
let pageActual = "";
let paginaActual;
let pageant= 'index';


let carrito =[];

let carritoVacio = localStorage.getItem('carrito');
pageant =localStorage.getItem('pageant');
if(pageant == ''){
    pageant = 'index'
}
console.log(carritoVacio)
console.log(pageant)

let PlatinaCuad = document.getElementById('Pcuadrada');
console.log(PlatinaCuad);
let PlatinaRect = document.getElementById('Prectangular');
console.log(PlatinaRect);


window.addEventListener('DOMContentLoaded', traerItems);
paginaActual = String(window.location.href);
console.log(paginaActual)
traerItems()

//if(pageant == 'index') {

    PlatinaCuad.onclick = function() {
    localStorage.setItem('tipoPlatina','1')
        location.href = "./paginas/cuadrada.html"
    }

    PlatinaRect.onclick = function() {
        localStorage.setItem('tipoPlatina','2')
        location.href = "./paginas/cuadrada.html"
    }
//}


function traerItems()  {

cuadradapage = paginaActual.search("cuadrada")
if(cuadradapage != -1) {
    pageActual = 'cuadrada'
}
indexpage = paginaActual.search("index")
if(indexpage != -1) {
    pageActual = 'index'
}
redondapage = paginaActual.search('redonda')
if(redondapage != -1) {
    pageActual = 'redonda'
}




if(carritoVacio) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(pageActual)
    mostrarCarrito(pageActual);
}
}
