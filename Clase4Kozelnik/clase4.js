
alert("Materiales para la construcción de un muro de ladrillos del 18 ceramicos")

function datos(){
    const largo = parseInt(prompt("Ingrese el largo de pared")); 
    const ancho = parseInt(prompt("Ingrese el ancho de pared")); 
    const ventanas = parseInt(prompt("Ingrese los m2 de ventanas")); 

    const metrosCuadrados = parseInt((largo * ancho) - ventanas);
    const ladrillos = parseInt (metrosCuadrados * 17);
    const cemento = parseInt (metrosCuadrados * 6);
    const cal = parseInt (metrosCuadrados * 6.2);
    alert ("La cantidad de ladrillos ceramicos del 18 son: " + ladrillos + " unidades \n" + "La cantidad de cal es: " + cal + " kilos " + "La cantidad de cemento es: " + cemento + " kilos"); 

}

datos();

