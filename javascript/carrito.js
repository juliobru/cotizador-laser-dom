/* este es el constructor del carrito con los tipos de Platina que define el usuario */

class Platinadef {

    
    Platina;
    Acero;
    Dim1;
    Dim2;
    espesor;
    PrecioCorte;
    PrecioMaterial;
    cantidad;
    unitarioN;
    parcialN;

    constructor(Platina,Acero,Dim1,Dim2,espesor,PrecioCorte,PrecioMaterial,cantidad,unitarioN,parcialN){
        
        this.Platina = Platina;
        this.Acero = Acero;
        this.Dim1 = Dim1;
        this.Dim2 = Dim2;
        this.espesor = espesor;
        this.PrecioCorte = PrecioCorte;
        this.PrecioMaterial = PrecioMaterial;
        this.cantidad = cantidad;
        this.unitarioN = parseFloat((Number(this.PrecioCorte) + Number(this.PrecioMaterial)).toFixed(2));
        this.parcialN = parseFloat((this.unitarioN * this.cantidad).toFixed(2));
    }

}





