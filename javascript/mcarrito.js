let btnEliminar =document.createElement('button');
btnEliminar.className = 'btn btn-danger';
btnEliminar.innerText = 'ELIMINAR';




btnEliminar.onclick = () => {
    console.log('ver')
    carrito.splice(poscarrito,1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito()
}


function mostrarCarrito() {
    let tabla = document.getElementById('items');
    tabla.innerHTML = '';
    carrito.forEach((item, index) => {
        pos= index + 1;
        tabla.innerHTML = tabla.innerHTML +
            `
            <tr>
                <td>${pos}</td>
                <td>${item.Platina}</td>
                <td>${item.Acero}</td>
                <td>${item.Dim1}</td>
                <td>${item.Dim2}</td>
                <td>${item.espesor}</td>
                <td>${item.PrecioCorte}</td>
                <td>${item.PrecioMaterial}</td>
                <td>${item.cantidad}</td>
                <td>${item.unitarioN}</td>
                <td>${item.parcialN}</td>
                <td>${btnEliminar.outerHTML}</td>
 
            </tr>
            `;

    })
}





/*
btnEliminar.addEventListener('click' , () => {
    carrito.splice(poscarrito,1);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    mostrarCarrito();

})
*/

//               <td><button type="button" class = "btn btn-danger" >ELIMINAR</button></td>

/*
td = document.createElement('td');
td.appendChild(btnEliminar);
row.appendChild(td);
tabla.appendChild(row); */


