/*Para calcular el precio del corte es necesario calcular el perímetro y el valor del corte que se toma base 1mm 
Para calcular el material es necesario calcular la superficie con su respectivo scrap, multiplicarla por el espesor
y la densidad para obtener el peso y luego aplicarle el precio del material.
Se a cortado con precio de corte y material para piezas muy pequeñas que su valor sea inferior a U$D 1 */



function Precio(Esp, tipoPlatina, tipoAcero) {
    let precioCorteInox = 1.25; /* U$D/mt base 1mm de espesor*/
    let precioCorteCarbono = 0.70; /* U$D/mt base 1mm de espesor*/
    let Scrap = 5; /* mm*/
    let precioMaterialInox = 5; /* U$d/kg */
    let precioMaterialCarbono = 1.5; /* U$d/kg */
    let DensidadInox = 8; /* kg/cm3 */
    let DensidadCarbono = 7.8; /* kg/cm3 */
    let Perimetro = 0;
    let PrecioEsp = 0;
    let Superficie = 0;
    let PrecioMaterial1 = 0;
    let PrecioCorte1 = 0;

    switch (tipoPlatina) {
        case 1:
            Perimetro = LadoCuadrado * 4;
            Superficie = (LadoCuadrado + Scrap) * (LadoCuadrado + Scrap)
            console.log(Perimetro, Superficie)
            break;
        case 2:
            Perimetro = 2 * ladoA + 2 * ladoB;
            Superficie = (ladoA + Scrap) * (ladoB + Scrap);
            break;
        case 3:
            Perimetro = Math.PI * Diametro;
            Superficie = (Diametro + Scrap) * (Diametro + Scrap);
            break;
    }

    switch (tipoAcero) {
        case 1:
            PrecioEsp = precioCorteInox * Esp;
            PrecioCorte1 = (PrecioEsp * Perimetro / 1000).toFixed(2);
            if (PrecioCorte1 >= 1) {
                PrecioCorte = PrecioCorte1;
            }
            else {
                PrecioCorte = (1).toFixed(2);
            }
            Peso = Superficie * DensidadInox * Esp / 1000000;
            PrecioMaterial1 = (Peso * precioMaterialInox).toFixed(2);
            if (PrecioMaterial1 >= 1) {
                PrecioMaterial = PrecioMaterial1;
            }
            else {
                PrecioMaterial = (1).toFixed(2);
            }
            break;
        case 2:
            PrecioEsp = precioCorteCarbono * Esp;
            PrecioCorte1 = (PrecioEsp * Perimetro / 1000).toFixed(2);
            if (PrecioCorte1 >= 1) {
                PrecioCorte = PrecioCorte1;
            }
            else {
                PrecioCorte = (1).toFixed(2);
            }
            Peso = Superficie * DensidadCarbono * Esp / 1000000;
            PrecioMaterial1 = (Peso * precioMaterialCarbono).toFixed(2);
            if (PrecioMaterial1 >= 1) {
                PrecioMaterial = PrecioMaterial1;
            }
            else {
                PrecioMaterial = (1).toFixed(2);
            }
            break;

    }
}