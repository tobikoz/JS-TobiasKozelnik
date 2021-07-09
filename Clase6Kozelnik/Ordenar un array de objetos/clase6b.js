class arreglos{
    constructor(){
    this.arreglo=[numero1,numero2,numero3,numero4,numero5];
    this.arregloOrdenado=[];
}

ordenarNumeros(numero1,numero2,numero3,numero4,numero5){
    this.arregloOrdenado = this.arreglo.sort(numero1,numero2,numero3,numero4,numero5);

   console.log(arregloOrdenado);
}
}


const numero1 = Number(prompt("Ingrese el numero 1"));
const numero2 = Number(prompt("Ingrese el numero 2"));
const numero3 = Number(prompt("Ingrese el numero 3"));
const numero4 = Number(prompt("Ingrese el numero 4"));    
const numero5 = Number(prompt("Ingrese el numero 5"));


const arregloNuevo = new arreglos (numero1,numero2,numero3,numero4,numero5);
arregloNuevo.ordenarNumeros (numero1,numero2,numero3,numero4,numero5);






