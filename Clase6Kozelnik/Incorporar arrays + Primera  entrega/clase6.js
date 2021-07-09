
class mamposteria{
    constructor(largo,ancho,aberturas){
    this.largo=largo;
    this.ancho=ancho;
    this.aberturas=aberturas;
    this.ladrillos=0;
    this.cal=0;
    this.cemento=0;

 }

sumaLadrillos(largo,ancho,aberturas){
this.ladrillos = ((largo*ancho)-aberturas)*17;
}
sumaCal(largo,ancho,aberturas){
this.cal = ((largo*ancho)-aberturas)*6;
}
sumaCemento(largo,ancho,aberturas){
this.cemento = ((largo*ancho)-aberturas)*7;
}

toString(){
    return `Se necesitan: ${this.ladrillos} ladrillos, ${this.cemento} kilos de cemento y ${this.cal} kilos de cal, `;
}
}

class empresa {
    constructor(){
        this.productos = [];
    }
    
    agregarProducto(mamposteria){
        this.productos.push(mamposteria);
    }


}

const largo = Number(prompt("Ingrese el largo de la pared"));
const ancho = Number(prompt("Ingrese el ancho de la pared"));
const aberturas = Number(prompt("Ingrese los m2 de aberturas"));
let ladrillos = 0;
let cemento = 0;
let cal = 0;


const mamposteria1= new mamposteria(largo,ancho,aberturas,ladrillos,cemento,cal);

mamposteria1.sumaLadrillos(largo,ancho,aberturas,ladrillos,cemento,cal);
mamposteria1.sumaCemento(largo,ancho,aberturas,ladrillos,cemento,cal);
mamposteria1.sumaCal(largo,ancho,aberturas,ladrillos,cemento,cal);

const valoresActuales = mamposteria1.toString();

alert(valoresActuales);

