//import { Swal } from "./sweetalert2";


let LadoCuadrado;
let flagCuadrado =false;
let flagRectangulo = false;
// let flagEspesor = false;
let BotonFlag = false; // abilita boton cotizar
let formaPlatina;
let Lado2;
let Lado2Input;
let ladoA;
let ladoB;
let flagValidarEspor = true;

console.log(pageActual)
if(pageActual == 'cuadrada') {

    let TituloCuadrada = document.getElementById('PlatinaCuadradah1');
    let imagen = document.getElementById('tipoPlatina');
    let Lado2Ver = document.getElementById('Lado2');
    let Lado2Etiqueta = document.getElementById('etiquetaRect')
    tipoPlatina = Number(localStorage.getItem(tipoPlatina))
    console.log(tipoPlatina);

    if(tipoPlatina == 1) {
    TituloCuadrada.innerText = 'Platina Cuadrada';
    imagen.setAttribute('src', '../imagenes/Cuadrada.JPG');
    Lado2Ver.setAttribute('type', 'hidden');
    formaPlatina = 'Cuadrada';
    
    }
    if(tipoPlatina == 2) {
        TituloCuadrada.innerText = 'Platina Rectangular';
        imagen.setAttribute('src', '../imagenes/rectangular.JPG');
        Lado2Etiqueta.innerText = 'Lado (L2) en mm (entre 0 y 1500)';
        formaPlatina = 'Rectangular';
    }



let formularioInputs = document.getElementById("PlatinaCuadrada");
console.log(formularioInputs)
formularioInputs.addEventListener("keypress", function(event)  {
    if(event.key === "Enter") {
    event.preventDefault();
    }
}) 

let CantidadInput = document.getElementById('cantidad');
    CantidadInput.setAttribute('type', 'hidden');
    
let BotonCotizar = document.getElementById("cotizar");
BotonCotizar.classList.add('btn-secondary');

let BotonCarritoCuad = document.getElementById("carritoCuad");
BotonCarritoCuad.classList.add('btn-secondary');

let BotonFlagCarrito = false;





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
            BotonCotizar.classList.add('btn-secondary')
            BotonCotizar.classList.remove('btn-primary');
            flagEspesor = false;  

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
        BotonCotizar.classList.add('btn-secondary')
        BotonCotizar.classList.remove('btn-primary');
        flagEspesor = false;
    }

    
}

let LcuadradoInput = document.getElementById('Lcuadrado')

LcuadradoInput.addEventListener('change', () => {
    LadoCuadrado = LcuadradoInput.value;
    if ((LadoCuadrado <= 0) || (LadoCuadrado > 1500) || (isNaN(LadoCuadrado))) {
        Swal.fire({
            title: 'Error!',
            text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        LcuadradoInput.value = '';
        flagCuadrado = false;
        BotonCotizar.classList.add('btn-secondary')
        BotonCotizar.classList.remove('btn-primary');

    } else {
        LadoCuadrado = parseFloat(LcuadradoInput.value);
        LcuadradoInput.classList.add('Validado')
        flagCuadrado = true;
        BotonFlag = true;
        if(flagEspesor) {
            BotonCotizar.classList.remove('btn-secondary')
            BotonCotizar.classList.add('btn-primary');
        }

    }
})

LcuadradoInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
    let LadoCuadrado = LcuadradoInput.value;
    if ((LadoCuadrado <= 0) || (LadoCuadrado > 1500) || (isNaN(LadoCuadrado))) {
        Swal.fire({
            title: 'Error!',
            text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        LcuadradoInput.value = '';
        flagCuadrado = false;
        BotonCotizar.classList.add('btn-secondary')
        BotonCotizar.classList.remove('btn-primary');
    } else {
        LadoCuadrado = parseFloat(LcuadradoInput.value);
        LcuadradoInput.classList.add('Validado');
        flagCuadrado = true;
        BotonFlag = true;
        if(flagEspesor) {
            BotonCotizar.classList.remove('btn-secondary')
            BotonCotizar.classList.add('btn-primary');
        }

    }
}
})
Lado2Input = document.getElementById('Lado2');
if(tipoPlatina == 2) {

    
    console.log(Lado2Input)

    Lado2Input.addEventListener('change', () => {
        Lado2 = Lado2Input.value;
        console.log(Lado2)
        if ((Lado2 <= 0) || (Lado2 > 1500) || (isNaN(Lado2))) {
            Swal.fire({
                title: 'Error!',
                text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            
            Lado2Input.value = '';
            flagRectangulo = false;
            BotonCotizar.classList.add('btn-secondary')
            BotonCotizar.classList.remove('btn-primary');
    
        } else {
            Lado2 = parseFloat(Lado2Input.value);
            ladoA = Lado2
            ladoB = LadoCuadrado
            Lado2Input.classList.add('Validado');
            flagRectangulo = true;
            BotonFlag = true;
            if(flagEspesor) {
                BotonCotizar.classList.remove('btn-secondary')
                BotonCotizar.classList.add('btn-primary');
            }
    
        }
    })
    
    Lado2Input.addEventListener("keypress", (e) => {
        console.log(Lado2Input)
        if(e.key === "Enter") {
        Lado2 = Lado2Input.value;
        if ((Lado2 <= 0) || (Lado2 > 1500) || (isNaN(Lado2))) {
            Swal.fire({
                title: 'Error!',
                text: 'el valor no es válido, debe ser 0 < L < 1500 mm',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            Lado2Input.value = '';
            flagRectangulo = false;
            BotonCotizar.classList.add('btn-secondary')
            BotonCotizar.classList.remove('btn-primary');
        } else {
            Lado2 = parseFloat(Lado2Input.value);
            ladoA = Lado2;
            ladoB = LadoCuadrado;
            Lado2Input.classList.add('Validado');
            flagRectangulo = true;
            BotonFlag = true;
            if(flagEspesor) {
                BotonCotizar.classList.remove('btn-secondary')
                BotonCotizar.classList.add('btn-primary');
            }
    
        }
    }
    })   

}






EspesorInput.addEventListener('click', () => {
    EspesorInput.classList.remove('Validado')
    Etiqueta[3].textContent = 'Espesor de la Platina en mm.';
    EspesorInput.value = '';
    flagEspesor = false;
    BotonCotizar.classList.add('btn-secondary')
    BotonCotizar.classList.remove('btn-primary');
})
EspesorInput.addEventListener('change', () => {
    let Esp = EspesorInput.value;

    


    if(tipoAcero == 1 || tipoAcero == 2) {

       if(Esp < 0.7 || Esp > 25.4|| isNaN(Esp)) {
            //Etiqueta[3].textContent = 'el espesor debe ser mayor que 0.7 y menor que 25.5\ningrese otro espesor en mm:'
            revisarEsp(Esp);
            flagEspesorrev = true;
       }else { 
        flagValidarEspor = true;
        Ajusteform(Esp, tipoAcero)

    }

    }
})

function Ajusteform(Esp, tipoAcero) {
    if(flagValidarEspor) {
    ValidarEspor(Esp, tipoAcero);
    } else {
        formStilo()
    }

}

function formStilo() {
    EspesorInput.value = Espesor;
    Etiqueta[3].textContent = `Espesor NORMALIZADO para ${Acero} en mm`;
    EspesorInput.classList.add('Validado')
    flagEspesor = true;
    BotonFlag = true;
    flagValidarEspor = true;
    console.log('test', flagValidarEspor)
    if(flagCuadrado) {
        BotonCotizar.classList.remove('btn-secondary')
        BotonCotizar.classList.add('btn-primary');
    }

}



EspesorInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
    let Esp = EspesorInput.value;
    if(tipoAcero == 1 || tipoAcero == 2) {

     if(Esp < 0.7 || Esp > 25.4|| isNaN(Esp)) {
           revisarEsp(Esp);
           flagEspesorrev = true;

     }else {
        flagValidarEspor = true;
        Ajusteform(Esp, tipoAcero)
    }

    }
}
})


BotonCotizar.addEventListener("click", ()=> {
    if((flagCuadrado || flagRectangulo) && flagEspesor && BotonFlag) {
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
        BotonCarritoCuad.classList.remove('btn-secondary')
        BotonCarritoCuad.classList.add('btn-primary');
        
        BotonCotizar.classList.add('btn-secondary')
        BotonCotizar.classList.remove('btn-primary');
        BotonFlag =false;
        BotonFlagCarrito = true;
    } else {
        Swal.fire('la cantidad debe ser mayor que cero')
    }
})

BotonCarritoCuad.addEventListener('click', () => {
    if(BotonFlagCarrito) {
        switch(tipoPlatina){
            case 1 :
            Dim1 = LadoCuadrado;
            Dim2 = 0;
            break;
            case 2 :
                Dim1 = LadoCuadrado;
                Dim2 = Lado2;
            break;
        }
    switch(tipoAcero) {
        case 1 :
            Acero = "Inoxidable";
        break;
        case 2:
            Acero = "Carbono";
        break;
    }

    


    carrito.push(new Platinadef(formaPlatina,Acero,Dim1,Dim2,Espesor,PrecioCorte,PrecioMaterial,cantidad));
    localStorage.setItem('carrito',JSON.stringify(carrito));
    
    console.table(carrito)
    mostrarCarrito('cuadrada');
    limpiar(formularioInputs)
}
} 

)

function limpiar(form) {
    form.reset();
    BotonCotizar.classList.add('btn-secondary')
    BotonCotizar.classList.remove('btn-primary');
    BotonCarritoCuad.classList.add('btn-secondary')
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

}






