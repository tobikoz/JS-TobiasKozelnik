const nombre = prompt("Por favor ingrese un nombre valido");

if(nombre !=""){ 
    alert("Su nombre es:" + nombre )
}else{
    alert("ERROR: Ingrese un nombre valido")
}

const numero =  parseInt(prompt("Por favor ingrese un numero entre 20 y 30"));

if((numero >=20) && (numero <=30)){
    alert("Bien hecho, es un numero valido!")
}else{
    const numeroDos =  parseInt(prompt("ERROR! Por favor ingrese un numero entre 20 y 30"));
    if((numeroDos >=20) && (numeroDos <=30)){
        alert("La segunda es la vencida! es un numero valido!")
    }else{
        const numeroTres =  parseInt(prompt("ERROR! Ultima oportunidad! ingrese un numero entre 20 y 30"));
        if((numeroTres >=20) && (numeroTres <=30)){
            alert("Al fin! es un numero valido!")
            }else{
                alert("Vamos a tener que volver a primaria")}
        }
    }


