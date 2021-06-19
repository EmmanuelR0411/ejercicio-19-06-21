/**
    *Recibes la tarea de construir un sistema de alarma para 
    *una fábrica de champús. Tu sistema recibe las siguientes 
    *variables: temperatura ambiente, humedad ambiental, número 
    *de trabajadores en la planta y nivel de líquido en los 
    *tanques. La alarma debe sonar siempre que la temperatura 
    *ambiente sea superior o inferior a los umbrales(90% y 30%), si la humedad es superior al 50%, 
    *si hay más de 100 trabajadores en la planta al mismo tiempo, o si el nivel del 
    *líquido es superior al 90% (para evitar el desbordamiento).
 */

const alarma = () => {
    let tempA = document.getElementById('ItempA').value;
    let humedad = document.getElementById('Ihumedad').value;
    let trabajadores = document.getElementById('Itrabajadores').value;
    let tanques = document.getElementById('Itanques').value;
       
    if(trabajadores > 100)
        {
        alert('¡ALERTA! Hay demasiados trabajadores en la planta');
        } else if(tempA>90)
        {
            alert('¡Alerta! Los niveles de temperatura son demasiado altos');
        } else if(tempA<30)
        {
            alert('¡Alerta! Los niveles de temperatura son demasiado bajos');
        } else if (tanques>90)
        {
            alert('¡Alerta de desbordamiento! Los tanques hay demasiado liquido en los tanques');
        } else if (humedad>50)
        {
            alert('¡Alerta! Hay demasiada humedad en la planta');
        } else
        {
            alert('Optimas condiciones para trabajar');
        }
}

