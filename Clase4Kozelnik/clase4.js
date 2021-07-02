
alert("Materiales para la construcción de un muro de ladrillos del 18 ceramicos")


const largo = parseInt(prompt("Ingrese el largo de pared")); 
const ancho = parseInt(prompt("Ingrese el ancho de pared")); 
const ventanas = parseInt(prompt("Ingrese los m2 de ventanas")); 
let SumarMetrosCuadrados = parseInt(0);
let ladrillos = parseInt (0);

function MetrosCuadrados (largo,ancho,ventanas){
    SumarMetrosCuadrados= parseInt((largo * ancho) - ventanas);
}

function SumarLadrillos (SumarMetrosCuadrados){
    ladrillos = parseInt (SumarMetrosCuadrados * 17);
}

function mostrar(mensaje){
    alert("El total de ladrillos necesarios es: " + mensaje);
}

MetrosCuadrados(largo,ancho,ventanas);
SumarLadrillos(SumarMetrosCuadrados);
mostrar(ladrillos);


    //const ladrillos = parseInt (metrosCuadrados * 17);
  // const cemento = parseInt (metrosCuadrados * 6);
   // const cal = parseInt (metrosCuadrados * 6.2);
   //alert ("La cantidad de ladrillos ceramicos del 18 son: " + ladrillos + " unidades \n" + "La cantidad de cal es: " + cal + " kilos " + "La cantidad de cemento es: " + cemento + " kilos"); 
