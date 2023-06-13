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
let errorflag;



let carrito =[];

/*let textologin = document.getElementById('login');

                              

   flalogin = localStorage.getItem('flaglogin');
   console.log(flalogin)


if(flalogin) {
    textologin.setAttribute('type','hidden');
    //usuariologeado = `<h2>${usuario}</h2>`
    //textologin.appendChild.usuariologeado
}*/




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
let PlatinaRed = document.getElementById('Predonda');
console.log(PlatinaRed);

window.addEventListener('DOMContentLoaded', traerItems);
paginaActual = String(window.location.href);

indexpage = paginaActual.search("index")
if(indexpage != -1) {
    pageant = 'index'
}

console.log(paginaActual)
    if(paginaActual == ''){
        pageant = 'index';
    }
traerItems()

if(pageant == 'index') {

    PlatinaCuad.onclick = function() {
    localStorage.setItem('tipoPlatina','1')
        location.href = "./paginas/cuadrada.html"
    }

    PlatinaRect.onclick = function() {
        localStorage.setItem('tipoPlatina','2')
        location.href = "./paginas/cuadrada.html"
    }

    PlatinaRed.onclick = function() {
        localStorage.setItem('tipoPlatina','3')
        location.href = "./paginas/cuadrada.html"
    }


}


function traerItems()  {

cuadradapage = paginaActual.search("cuadrada")
if(cuadradapage != -1) {
    pageActual = 'cuadrada'
}
indexpage = paginaActual.search("index")
if(indexpage != -1) {
    pageActual = 'index'
}
if (paginaActual == "http://127.0.0.1:5501/") {
    pageActual = 'index';

}




if(carritoVacio) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(pageActual)
    mostrarCarrito(pageActual);
}
}
