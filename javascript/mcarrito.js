const total = document.getElementById('total')
const totalText = document.getElementById('totalText')

let ultimaFila;
let th;
let Vaciar;

//let ubicacionCuadrada = document.getElementById('PlatinaCuadrada')

// let vaciarcarrito = document.getElementById('vaciarCarro');
//vaciarcarrito.setAttribute('disable', true)
//vaciarcarrito.classList.add('btn-secondary')

function mostrarCarrito(page) {

    if(pageant == page){
        flagbotonVaciar = false
    } else{
        flagbotonVaciar = true;
        pageant = page
        localStorage.setItem('pageant', page)
    }
    console.log(pageant)
    let tabla = document.getElementById('items');
    
    tabla.innerHTML = '';
    carrito.forEach((item, index) => {
        pos= index + 1;
 
  const row = document.createElement('tr'); ///creo la fila
 
  let tdpos = document.createElement('td');
  tdpos.textContent = pos;
  row.appendChild(tdpos);

  let tdPlatina = document.createElement('td');
  tdPlatina.textContent = item.Platina;
  row.appendChild(tdPlatina);

 let tdAcero = document.createElement('td');
  tdAcero.textContent = item.Acero;
  row.appendChild(tdAcero);

 let tdDim1 = document.createElement('td');
  tdDim1.textContent = item.Dim1;
  row.appendChild(tdDim1);

 let tdDim2 = document.createElement('td');
  tdDim2.textContent = item.Dim2;
  row.appendChild(tdDim2);

 let tdespesor = document.createElement('td');
  tdespesor.textContent = item.espesor;
  row.appendChild(tdespesor);

  let tdPreciocorte = document.createElement('td');
  tdPreciocorte.textContent = item.PrecioCorte;
  row.appendChild(tdPreciocorte);

  let tdPrecioMaterial = document.createElement('td');
  tdPrecioMaterial.textContent = item.PrecioMaterial;
  row.appendChild(tdPrecioMaterial);

  let tdcantidad = document.createElement('td');
  tdcantidad.textContent = item.cantidad;
  row.appendChild(tdcantidad);

  let tdunitarioN= document.createElement('td');
  tdunitarioN.textContent = item.unitarioN;
  row.appendChild(tdunitarioN);

  let tdparcialN= document.createElement('td');
  tdparcialN.textContent = item.parcialN;
  row.appendChild(tdparcialN);

  let btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn btn-danger';
  btnEliminar.textContent = 'Eliminar';

  btnEliminar.onclick = () => 
  {
    carrito.splice(index,1); 
    mostrarCarrito(page);
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

  let tdEliminar = document.createElement('td')
  tdEliminar.appendChild(btnEliminar);
  row.appendChild(tdEliminar);
  tabla.appendChild(row);


})
total.innerText = (carrito.reduce((acumulador,item) => (acumulador = acumulador + parseFloat(item.parcialN)),0)).toFixed(2)
console.log(total.innerText)






//ultimaFila = document.getElementById('ultimaFila')
//ultimaFila.innerHTML = '';
//if( flagbotonVaciar == true) {
 //  console.log(flagbotonVaciar)

Vaciar = document.createElement('button');
Vaciar.className = 'btn';
Vaciar.textContent = 'Vaciar!!';
Vaciar.setAttribute('disable', true)

th = document.getElementById('Vaciar')
th.innerHTML = ''


th.appendChild(Vaciar)
//console.log(th)

//ultimaFila.appendChild(th)
//flagbotonVaciar = false
//}





Vaciar.addEventListener('click', ()=> {
    carrito = [];
    localStorage.removeItem('carrito')
    let tabla = document.getElementById('items');
    tabla.innerHTML = '';
    totalText.textContent = "";
    total.innerText = ''; //(0).toFixed(2);
    Vaciar.setAttribute('disable', true)
    Vaciar.classList.remove('btn-danger')
    Vaciar.classList.add('btn-secondary')
    

})

console.log(total.innerText)

if(total.innerText > 0) {
    totalText.textContent = "Total : ";
    Vaciar.removeAttribute('disable')
    Vaciar.classList.remove('btn-secondary')
    Vaciar.classList.add('btn-danger')
} else {
    Vaciar.setAttribute('disable', true)
    Vaciar.classList.remove('btn-danger')
    Vaciar.classList.add('btn-secondary')
    total.innerText = ""
    //flagbotonVaciar = true;
}

}



