const validarPaquetes = () => {

    let pesoMuneca = 75;
    let pesoPayaso = 112;
    
    let munecas = document.getElementById("munecas").value;
    let payasos = document.getElementById("payasos").value;
    
    let totalMuneca = pesoMuneca * munecas
    let totalPayaso = pesoPayaso * payasos
    
    let suma = totalMuneca + totalPayaso
    let contador = 0;
    let kg = 0;
    
    if(munecas >= 0 && payasos >= 0 ){
    
        if(suma > 1000){
            kg = suma / 1000;
            document.write(`<h1>Paquetes requeridos</h1>`);
            document.write(`<h3>El peso total de muñecas es: ${totalMuneca} gr</h3>`); 
            document.write(`<h3>El peso total de los payasos es: ${totalPayaso} gr</h3>`); 
            document.write(`<h3>El peso total de ambos en kilogramos: ${kg} kg</h3>`);
    
            while(suma > 0){
    
                contador++
    
                suma -= 1000
            }
    
            document.write(`<h3>Requieres ${contador} paquetes</h3>` )
    
        } else if (suma <= 0){
            document.write(`<h1>Paquetes requeridos</h1>`);
            document.write(`<h3>No se requiere ningun paquete</h3>`);
        }
        else {
            kg = suma / 1000;
            document.write(`<h1>Paquetes requeridos</h1>`);
            document.write(`<h3>Solo es un paquete, peso total: ${kg} kg</h3>`);
            }
    } 
    else {
        alert(`Valores incorrectos, por favor verifique las cantidades vendidas`);
    }  
}
