/* los espesores para acero inoxidable y acero al carbono tienen distintos rangos de espesores normalizados.
La tecnología de corte utilizada en este caso tiene limitaciones de espesor mínimo y máximo.
Esta función tiene un array con los espesores normalizados, calcula el mínimo, el máximo y la cantidad de espesores
que se mantienen en catálogo.
recibiendo el material deseado y el espesor que intenta utilizar el cliente, verifica si es un espesor normalizado,
o en caso que el cliente ingresó otro espesor le propone uno por encima y otro por debajo */



function ValidarEspor(Esp, tipo) {

    const EspInox = [0.9, 1, 1.2, 1.5, 1.8, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20, 22, 25];
    const EspCarbono = [0.7, 0.9, 1.1, 1.25, 1.6, 1.8, 2.0, 2.25, 2.51, 3.2, 4.75, 6.35, 7.94, 9.32, 12.7, 15.88, 16.05, 22.22, 25.4];

    let EspInoxMin = EspInox[0];
    let EspInoxCant = EspInox.length;
    let EspInoxMax = EspInox[EspInoxCant - 1];

    let EspCarbMin = EspCarbono[0];
    let EspCarbCant = EspCarbono.length;
    let EspCarbMax = EspCarbono[EspCarbCant - 1];
    let siguiente = 0;



    switch (tipo) {
        case 1:
            while (Esp < EspInoxMin || Esp > EspInoxMax || isNaN(Esp)) {
                Esp = Number(prompt(`el espesor debe ser mayor que ${EspInoxMin} y menor que ${EspInoxMax}\ningrese otro espesor en mm:`))
            }
            for (let i = 0; i < EspInoxCant; i++) {
                siguiente = i + 1;

                if (EspInox[i] == Esp) {           
                    Espesor = EspInox[i];
                    break;
                } else {

                    if (Esp > EspInox[i] && Esp < EspInox[siguiente]) {
                        let Seleccion = parseInt(prompt(`su espesor no es normalizado\nelija espesor normalizado\n ingrese 1 para ${EspInox[i]} mm\n ingrese 2 para ${EspInox[siguiente]} mm`));
                        while (Seleccion != 1 && Seleccion != 2) {
                            Seleccion = parseInt(prompt(`solo puede ingresar 1 o 2\n elija espesor normalizado\n ingrese 1 para ${EspInox[i]} mm\n ingrese 2 para ${EspInox[siguiente]} mm`));
                        }
                        switch (Seleccion) {
                            case 1:
                                Espesor = EspInox[i];
                                break;
                            case 2:
                                Espesor = EspInox[siguiente];
                                break;
                        }break;
                    }

                }
            }
            break;

        case 2:
            while (Esp < EspCarbMin || Esp > EspCarbMax || isNaN(Esp)) {
                Esp = Number(prompt(`el espesor debe ser mayor que ${EspCarbMin} y menor que ${EspCarbMax}\ningrese otro espesor en mm:`))
            }
            for (let i = 0; i < EspCarbCant; i++) {
                siguiente = i + 1;
 
                if (EspCarbono[i] == Esp) {            
                    Espesor = EspCarbono[i];
                    break;
                } else {

                    if (Esp > EspCarbono[i] && Esp < EspCarbono[siguiente]) {
                        let Seleccion = parseInt(prompt(`su espesor no es normalizado\nelija espesor normalizado\n ingrese 1 para ${EspCarbono[i]} mm\n ingrese 2 para ${EspCarbono[siguiente]} mm`));
                        while (Seleccion != 1 && Seleccion != 2) {
                            Seleccion = parseInt(prompt(`solo puede ingresar 1 o 2\n elija espesor normalizado\n ingrese 1 para ${EspCarbono[i]} mm\n ingrese 2 para ${EspCarbono[siguiente]} mm`));
                        }
                        switch (Seleccion) {
                            case 1:
                                Espesor = EspCarbono[i];
                                break;
                            case 2:
                                Espesor = EspCarbono[siguiente];
                                break;
                        }break;
                    }

                }
            }
            break;
    }
}
