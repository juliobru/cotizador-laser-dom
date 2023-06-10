let flagObtenerInput = false;



async function obtenerInput(Esp) {
    return new Promise((resolve, reject) => {
        flagObtenerInput = true;
        Swal.fire({
        title: 'Ingresa un valor',
        input: 'text',
        inputLabel: `el espesor debe ser mayor que {EspInoxMin} y menor que {EspInoxMax}\ningrese otro espesor en mm:`,
        inputPlaceholder: Esp ,
        icon: 'error',
        confirmButtonText: 'Enviar',
       // showCancelButton: true,
       // confirmButtonText: 'Aceptar',
       // cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return 'Debes ingresar un valor';
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

function revisarEsp(Esp) {

 (async () => {
    let valor = Esp;
    
   while (valor < 0.9 || valor > 25.4 || isNaN(valor)) {
     try {
       valor = await obtenerInput(Esp);
       console.log(valor);
     } catch (error) {
       console.log('Ocurrió un error:', error);
       // Puedes agregar lógica adicional en caso de error
     }
   }
   Esp = Number(valor);
   console.log('El usuario ingresó:', Esp,valor);
   Ajusteform(Esp, tipoAcero)
    
 })()
}
