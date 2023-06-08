

let Diametro;
let flagDiametro =false;
let BotonDiamFlag = false; // abilita boton cotizar






let formularioDiamInputs = document.getElementById("PlatinaRedonda");
console.log(formularioDiamInputs)
formularioDiamInputs.addEventListener("keypress", function(event)  {
    if(event.key === "Enter") {
    event.preventDefault();
    }
}) 

let CantidadDiamInput = document.getElementById('cantidadRedonda');
    CantidadDiamInput.setAttribute('type', 'hidden');
    
let BotonCotizarRedonda = document.getElementById("cotizarRedonda");
BotonCotizarRedonda.classList.add('btn-secondary');

let BotonCarritoRedonda = document.getElementById("carritoRedonda");
BotonCarritoRedonda.classList.add('btn-secondary');

let BotonFlagCarritoRedonda = false;





let EspesorRedondaInput = document.getElementById('EspesorRedonda')
    EspesorRedondaInput.setAttribute('type', 'hidden');
let EtiquetaRedonda = document.getElementsByClassName('etiquetaRedonda')
    EtiquetaRedonda[3].textContent = 'Debe seleccionar material previo a espesor';
    EtiquetaRedonda[8].textContent = '';

let AceroInoxSelRedonda = document.getElementById("AceroInoxR")
AceroInoxSelRedonda.addEventListener("click", intercon1R)
let AceroCarbSelRedonda = document.getElementById("AceroCarbonoR")
AceroCarbSelRedonda.addEventListener('click', intercon2R)

function intercon1R(test1) {
    
        if(AceroInoxSelRedonda.checked) {
            AceroCarbSelRedonda.checked = false;
            AceroInoxCheckRedonda =true;
            AceroCarbonoCheckRedonda =false;
            Acero = "Acero Inoxidable"
            tipoAcero = 1;
            EspesorRedondaInput.setAttribute('type', 'number');
            EspesorRedondaInput.value = '';
            EspesorRedondaInput.classList.remove('Validado')
            EtiquetaRedonda[3].textContent = 'Espesor de la Platina en mm.'
        }else {
            EspesorRedondaInput.setAttribute('type', 'hidden');
            EtiquetaRedonda[3].textContent = 'Debe seleccionar material previo a espesor';  

        }
    
}

function intercon2R(test1) {
    
    if(AceroCarbSelRedonda.checked) {
    AceroInoxSelRedonda.checked = false
    AceroCarbonoCheckRedonda =true;
    AceroInoxCheckRedonda =false;
    Acero = "Acero al Carbono"
    tipoAcero = 2;
    EspesorRedondaInput.setAttribute('type', 'number');
    EspesorRedondaInput.value = '';
    EspesorRedondaInput.classList.remove('Validado')
    EtiquetaRedonda[3].textContent = 'Espesor de la Platina en mm.'
    } else {
        EspesorRedondaInput.setAttribute('type', 'hidden');
        EtiquetaRedonda[3].textContent = 'Debe seleccionar material previo a espesor'; 
    }

    
}

let DiametroInput = document.getElementById('Diametro')

DiametroInput.addEventListener('change', () => {
    Diametro = DiametroInput.value;
    if ((Diametro <= 0) || (Diametro > 1500) || (isNaN(Diametro))) {
        Swal.fire({
            title: 'Error!',
            text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        Diametro.value = '';
        flagDiametro = false;
        BotonCotizarRedonda.classList.add('btn-secondary')
        BotonCotizarRedonda.classList.remove('btn-primary');

    } else {
        Diametro= parseFloat(DiametroInput.value);
        DiametroInput.classList.add('Validado')
        flagDiametro = true;
        BotonDiamFlag = true;
        if(flagEspesor) {
            BotonCotizar.classList.remove('btn-secondary')
            BotonCotizar.classList.add('btn-primary');
        }

    }
})

DiametroInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
    let Diametro = DiametroInput.value;
    if ((Diametro <= 0) || (Diametro > 1500) || (isNaN(Diametro))) {
        Swal.fire({
            title: 'Error!',
            text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        DiametroInput.value = '';
        flagDiametro = false;
        BotonCotizarRedonda.classList.add('btn-secondary')
        BotonCotizarRedonda.classList.remove('btn-primary');
    } else {
        Diametro = parseFloat(DiametroInput.value);
        DiametroInput.classList.add('Validado');
        flagDiametro = true;
        BotonDiamFlag = true;
        if(flagEspesor) {
            BotonCotizarRedonda.classList.remove('btn-secondary')
            BotonCotizarRedonda.classList.add('btn-primary');
        }

    }
}
})






EspesorRedondaInput.addEventListener('click', () => {
    EspesorRedondaInput.classList.remove('Validado')
    EtiquetaRedonda[3].textContent = 'Espesor de la Platina en mm.';
    EspesorRedondaInput.value = '';
    flagEspesor = false;
    BotonCotizarRedonda.classList.add('btn-secondary')
    BotonCotizarRedonda.classList.remove('btn-primary');
})
EspesorRedondaInput.addEventListener('change', () => {
    let Esp = EspesorRedondaInput.value;
    if(tipoAcero == 1 || tipoAcero == 2) {
    ValidarEspor(Esp, tipoAcero);
    EspesorRedondaInput.value = Espesor;
    EtiquetaRedonda[3].textContent = `Espesor NORMALIZADO para ${Acero} en mm`;
    EspesorRedondaInput.classList.add('Validado')
    flagEspesor = true;
    BotonDiamFlag = true;
    if(flagDiametro) {
        BotonCotizarRedonda.classList.remove('btn-secondary')
        BotonCotizarRedonda.classList.add('btn-primary');
    }
    }
})

EspesorRedondaInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
    let Esp = EspesorRedondaInput.value;
    if(tipoAcero == 1 || tipoAcero == 2) {
    ValidarEspor(Esp, tipoAcero);
    EspesorRedondaInput.value = Espesor;
    EtiquetaRedonda[3].textContent = `Espesor NORMALIZADO para ${Acero} en mm`;
    EspesorRedondaInput.classList.add('Validado');
    flagEspesor = true;
    BotonDiamFlag = true;
    if(flagDiametro) {
        BotonCotizarRedonda.classList.remove('btn-secondary')
        BotonCotizarRedonda.classList.add('btn-primary');
    }
    }
}
})


BotonCotizarRedonda.addEventListener("click", ()=> {
    if(flagDiametro && flagEspesor && BotonDiamFlag) {
        Precio(Espesor, 3, tipoAcero)
            EtiquetaRedonda[7].textContent = `Precio Material U$D ${PrecioMaterial} Precio Corte = U$D ${PrecioCorte}`
            PrecioCorte = parseFloat(PrecioCorte);
            PrecioMaterial = parseFloat(PrecioMaterial)
            EtiquetaRedonda[8].textContent = 'cantidad';
            CantidadDiamInput.setAttribute('type', 'number');

        }
    })


CantidadDiamInput.addEventListener('change', ()=> {
    cantidad = parseFloat(CantidadDiamInput.value);
    if(cantidad > 0) {
        let Subtotal = ((PrecioCorte + PrecioMaterial)*cantidad).toFixed(2);
        let IVA = (Subtotal*0.22).toFixed(2);
        EtiquetaRedonda[9].textContent = `Total U$D ${Subtotal} + IVA U$D ${IVA}`
        BotonCarritoRedonda.classList.remove('btn-secondary')
        BotonCarritoRedonda.classList.add('btn-primary');
        
        BotonCotizarRedonda.classList.add('btn-secondary')
        BotonCotizarRedonda.classList.remove('btn-primary');
        BotonDiamFlag =false;
        BotonFlagCarritoRedonda = true;
    } else {
        alert('la cantidad debe ser mayor que cero')
    }
})

BotonCarritoRedonda.addEventListener('click', () => {
    if(BotonFlagCarritoRedonda) {
    Dim1 = Diametro;
    Dim2 = 0;
    switch(tipoAcero) {
        case 1 :
            Acero = "Inoxidable";
        break;
        case 2:
            Acero = "Carbono";
        break;
    }

    


    carrito.push(new Platinadef('Redonda',Acero,Dim1,Dim2,Espesor,PrecioCorte,PrecioMaterial,cantidad));
    localStorage.setItem('carrito',JSON.stringify(carrito));
    
    console.table(carrito)
    mostrarCarrito('redonda');
    limpiar(formularioDiamInputs)
}
} 

)

function limpiar(form) {
    form.reset();
    BotonCotizarRedonda.classList.add('btn-secondary')
    BotonCotizarRedonda.classList.remove('btn-primary');
    BotonCarritoRedonda.classList.add('btn-secondary')
    BotonCarritoRedonda.classList.remove('btn-primary');
 
    EtiquetaRedonda[7].textContent = '';
    EtiquetaRedonda[8].textContent = '';
    EtiquetaRedonda[9].textContent = '';
    CantidadDiamInput.setAttribute('type', 'hidden');
    EspesorRedondaInput.setAttribute('type', 'hidden');
  
    EtiquetaRedonda[3].textContent = 'Debe seleccionar material previo a espesor';
    flagRedonda =false;
    flagEspesor = false; 
    BotonDiamFlag =false;
    BotonFlagCarritoRedonda = false;
}








