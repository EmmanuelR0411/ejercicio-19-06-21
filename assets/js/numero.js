const hastaN = () =>{
    let numero = document.getElementById('numero').value;
        
        numero = parseInt(numero);
        console.log(typeof(numero));
        let resultado = numero * (numero + 1) / 2;

    document.write(`<h2>El resultado de la suma desde 1 hasta ${numero} es: ${resultado}</h2>`)
}