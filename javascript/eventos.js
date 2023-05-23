let AceroCarbonoCheck =false;
let AceroInoxCheck =false;
let tipoAcero = 0;
let flagCuadrado =false;
let flagEspesor = false;
let tipoPlatina = 1;
let PrecioCorte;
let PrecioMaterial;
let LadoCuadrado;
let Espesor;
let cantidad;
let BotonFlag = false;

let formularioInputs = document.getElementById("PlatinaCuadrada");
formularioInputs.addEventListener("keypress", function(event)  {
    if(event.key === "Enter") {
    event.preventDefault();
    }
}) 

let CantidadInput = document.getElementById('cantidad');
    CantidadInput.setAttribute('type', 'hidden');
    
let BotonCotizar = document.getElementById("cotizar");
BotonCotizar.classList.add('btn-outline-secondary');

let BotonCarritoCuad = document.getElementById("carritoCuad");
BotonCarritoCuad.classList.add('btn-outline-secondary')



let EspesorInput = document.getElementById('Espesor')
    EspesorInput.setAttribute('type', 'hidden');
let Etiqueta = document.getElementsByClassName('etiqueta')
    Etiqueta[3].textContent = 'Debe seleccionar material previo a espesor';
    Etiqueta[9].textContent = '';

let AceroInoxSel = document.getElementById("AceroInoxC")
AceroInoxSel.addEventListener("click", intercon1)
let AceroCarbSel = document.getElementById("AceroCarbonoC")
AceroCarbSel.addEventListener('click', intercon2)

function intercon1(test1) {
    
        if(AceroInoxSel.checked) {
            AceroCarbSel.checked = false;
            AceroInoxCheck =true;
            AceroCarbonoCheck =false;
            Acero = "Acero Inoxidable"
            tipoAcero = 1;
            EspesorInput.setAttribute('type', 'number');
            EspesorInput.value = '';
            EspesorInput.classList.remove('Validado')
            Etiqueta[3].textContent = 'Espesor de la Platina en mm.'
        }else {
            EspesorInput.setAttribute('type', 'hidden');
            Etiqueta[3].textContent = 'Debe seleccionar material previo a espesor';  

        }
    
}

function intercon2(test1) {
    
    if(AceroCarbSel.checked) {
    AceroInoxSel.checked = false
    AceroCarbonoCheck =true;
    AceroInoxCheck =false;
    Acero = "Acero al Carbono"
    tipoAcero = 2;
    EspesorInput.setAttribute('type', 'number');
    EspesorInput.value = '';
    EspesorInput.classList.remove('Validado')
    Etiqueta[3].textContent = 'Espesor de la Platina en mm.'
    } else {
        EspesorInput.setAttribute('type', 'hidden');
        Etiqueta[3].textContent = 'Debe seleccionar material previo a espesor'; 
    }

    
}

let LcuadradoInput = document.getElementById('Lcuadrado')

LcuadradoInput.addEventListener('change', () => {
    LadoCuadrado = LcuadradoInput.value;
    if ((LadoCuadrado <= 0) || (LadoCuadrado > 1500) || (isNaN(LadoCuadrado))) {
        alert("el valor no es válido, debe ser 0 < L < 1500 mm");
        LcuadradoInput.value = '';
        flagCuadrado = false;
        BotonCotizar.classList.add('btn-outline-secondary')
        BotonCotizar.classList.remove('btn-primary');

    } else {
        LadoCuadrado = parseFloat(LcuadradoInput.value);
        LcuadradoInput.classList.add('Validado')
        flagCuadrado = true;
        BotonFlag = true;
        console.log(LadoCuadrado)
        if(flagEspesor) {
            BotonCotizar.classList.remove('btn-outline-secondary')
            BotonCotizar.classList.add('btn-primary');
        }

    }
})

LcuadradoInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
    let LadoCuadrado = LcuadradoInput.value;
    if ((LadoCuadrado <= 0) || (LadoCuadrado > 1500) || (isNaN(LadoCuadrado))) {
        alert("el valor no es válido, debe ser 0 < L < 1500 mm");
        LcuadradoInput.value = '';
        flagCuadrado = false;
        BotonCotizar.classList.add('btn-outline-secondary')
        BotonCotizar.classList.remove('btn-primary');
    } else {
        LadoCuadrado = parseFloat(LcuadradoInput.value);
        LcuadradoInput.classList.add('Validado');
        flagCuadrado = true;
        BotonFlag = true;
        console.log(LadoCuadrado)
        if(flagEspesor) {
            BotonCotizar.classList.remove('btn-outline-secondary')
            BotonCotizar.classList.add('btn-primary');
        }

    }
}
})






EspesorInput.addEventListener('click', () => {
    EspesorInput.classList.remove('Validado')
    Etiqueta[3].textContent = 'Espesor de la Platina en mm.';
    EspesorInput.value = '';
    flagEspesor = false;
    BotonCotizar.classList.add('btn-outline-secondary')
    BotonCotizar.classList.remove('btn-primary');
})
EspesorInput.addEventListener('change', () => {
    let Esp = EspesorInput.value;
    console.log(Esp, tipoAcero)
    if(tipoAcero == 1 || tipoAcero == 2) {
    ValidarEspor(Esp, tipoAcero);
    EspesorInput.value = Espesor;
    Etiqueta[3].textContent = `Espesor NORMALIZADO para ${Acero} en mm`;
    EspesorInput.classList.add('Validado')
    flagEspesor = true;
    BotonFlag = true;
    if(flagCuadrado) {
        BotonCotizar.classList.remove('btn-outline-secondary')
        BotonCotizar.classList.add('btn-primary');
    }
    }
})

EspesorInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
    let Esp = EspesorInput.value;
    console.log(Esp, tipoAcero)
    if(tipoAcero == 1 || tipoAcero == 2) {
    ValidarEspor(Esp, tipoAcero);
    EspesorInput.value = Espesor;
    Etiqueta[3].textContent = `Espesor NORMALIZADO para ${Acero} en mm`;
    EspesorInput.classList.add('Validado');
    flagEspesor = true;
    BotonFlag = true;
    if(flagCuadrado) {
        BotonCotizar.classList.remove('btn-outline-secondary')
        BotonCotizar.classList.add('btn-primary');
    }
    }
}
})


//BotonCotizar.innerHTML = '<button type="button" id="cotizar" class="btn btn-outline-secondary" disabled>Cotizar Platina</button>'
//BotonCotizar.hidden
// BotonCotizar.setAttribute('type', 'hidden');


BotonCotizar.addEventListener("click", ()=> {
    if(flagCuadrado && flagEspesor && BotonFlag) {
        Precio(Espesor, tipoPlatina, tipoAcero)
            Etiqueta[8].textContent = `Precio Material U$D ${PrecioMaterial} Precio Corte = U$D ${PrecioCorte}`
            PrecioCorte = parseFloat(PrecioCorte);
            PrecioMaterial = parseFloat(PrecioMaterial)
            Etiqueta[9].textContent = 'cantidad';
            CantidadInput.setAttribute('type', 'number');

        }
    })


CantidadInput.addEventListener('change', ()=> {
    cantidad = parseFloat(CantidadInput.value);
    if(cantidad > 0) {
        let Subtotal = ((PrecioCorte + PrecioMaterial)*cantidad).toFixed(2);
        let IVA = (Subtotal*0.22).toFixed(2);
        Etiqueta[10].textContent = `Total U$D ${Subtotal} + IVA U$D ${IVA}`
        BotonCarritoCuad.classList.remove('btn-outline-secondary')
        BotonCarritoCuad.classList.add('btn-primary');
        BotonCotizar.classList.add('btn-outline-secondary')
        BotonCotizar.classList.remove('btn-primary');
        BotonFlag =false;
        BotonFlagCarrito = true;
    } else {
        alert('la cantidad debe ser mayor que cero')
    }
})

BotonCarritoCuad.addEventListener('click', () => {
    if(BotonFlagCarrito) {
    Dim1 = LadoCuadrado;
    Dim2 = 0;
    switch(tipoAcero) {
        case 1 :
            Acero = "Inoxidable";
        break;
        case 2:
            Acero = "Carbono";
        break;
    }

    carrito.push(new Platinadef('Cuadrada',Acero,Dim1,Dim2,Espesor,PrecioCorte,PrecioMaterial,cantidad));
    localStorage.setItem('carrito',JSON.stringify(carrito));
    
    console.table(carrito)
    mostrarCarrito();
    limpiar(formularioInputs)
}
})

function limpiar(form) {
    form.reset();
    BotonCotizar.classList.add('btn-outline-secondary')
    BotonCotizar.classList.remove('btn-primary');
    BotonCarritoCuad.classList.add('btn-outline-secondary')
    BotonCarritoCuad.classList.remove('btn-primary');
    Etiqueta[8].textContent = '';
    Etiqueta[9].textContent = '';
    Etiqueta[10].textContent = '';
    CantidadInput.setAttribute('type', 'hidden');
    EspesorInput.setAttribute('type', 'hidden');
    Etiqueta[3].textContent = 'Debe seleccionar material previo a espesor';
    flagCuadrado =false;
    flagEspesor = false; 
    BotonFlag =false;
    BotonFlagCarrito = false;
}

let vaciarcarrito = document.getElementById('vaciarCarro');
vaciarcarrito.addEventListener('click', ()=> {
    carrito = [];
    localStorage.removeItem('carrito')
    let tabla = document.getElementById('items');
    tabla.innerHTML = '';

})





