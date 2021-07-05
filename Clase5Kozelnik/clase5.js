class mamposteria{
    constructor(largo,ancho,aberturas){
    this.largo=largo;
    this.ancho=ancho;
    this.aberturas=aberturas;
    this.ladrillos=0;
   

}

sumaLadrillos(largo,ancho,aberturas){
this.ladrillos = ((largo*ancho)-aberturas)*17;
}

toString(){
    return `Se necesitan: ${this.ladrillos} ladrillos`;
}
}

const largo = Number(prompt("Ingrese el largo de la pared"));
const ancho = Number(prompt("Ingrese el ancho de la pared"));
const aberturas = Number(prompt("Ingrese los m2 de aberturas"));
let ladrillos = 0;


const mamposteria1= new mamposteria(largo,ancho,aberturas,ladrillos);

mamposteria1.sumaLadrillos(largo,ancho,aberturas,ladrillos);
const valoresActuales = mamposteria1.toString();
alert(valoresActuales);

