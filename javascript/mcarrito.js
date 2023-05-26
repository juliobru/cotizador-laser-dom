
function mostrarCarrito() {
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
    mostrarCarrito();
    localStorage.setItem('carrito',JSON.stringify(carrito));
}


  let tdEliminar = document.createElement('td')
  tdEliminar.appendChild(btnEliminar);
  row.appendChild(tdEliminar);
  tabla.appendChild(row);
})}


