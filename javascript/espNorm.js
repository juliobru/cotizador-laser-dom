//let flagObtenerInput = false;



async function EspNorm(Esp,OpEsp1,OpEsp2) {
    return new Promise((resolve, reject) => {
  //      flagObtenerInput = true;

  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        OpEsp1: `${OpEsp1}`,
        OpEsp2: `${OpEsp2}`,
        
      })
    }, 1000)
  })



        Swal.fire({
        title: `Seleccione el espesor Normalizado, los mas próximos son:`,
        input: 'radio',
        inputOptions: inputOptions,
        //inputLabel: `el espesor debe ser mayor que {EspInoxMin} y menor que {EspInoxMax}\ningrese otro espesor en mm:`,
        //inputPlaceholder: Esp ,
        icon: 'info',
        confirmButtonText: 'OK',

        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return 'Debe seleccionar un valor';
          }
        }
    }).then((result) => {
        if (result.isConfirmed) {
          resolve(result.value);
        } else {
          reject(new Error('El usuario canceló la entrada'));
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }  

function revisarEspNorm(Esp,OpEsp1,OpEsp2) {

 (async () => {
    let valor = null;
    
   while (valor === null) {
     try {
       valor = await EspNorm(Esp,OpEsp1,OpEsp2);
       console.log(valor);
     } catch (error) {
       console.log('Ocurrió un error:', error);
      
     }
   }
   if (valor == 'OpEsp1') {
   Espesor = Number(OpEsp1);
   } else {
    Espesor = Number(OpEsp2);
   }
   flagValidarEspor = false;
   console.log('El usuario ingresó:',Espesor);
   formStilo()
   //Ajusteform(Esp, tipoAcero)
    
 })()
}
