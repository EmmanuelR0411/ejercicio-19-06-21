/**
 * Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice *de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa *corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales. 
 */

const imc = () => {
    
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    

    let resultado = peso/(altura * altura);
    let im = resultado.toFixed(2);
     
    document.write(`<h2>Tu indice de masa corporal es: ${im}</h2>`);
    //alert(`Tu IMC es: ${im}`);
}