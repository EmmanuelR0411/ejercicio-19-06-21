function lista(tipo) {
    tipo.forEach(function (tipo) {
        list.textContent = '';
        let item = document.createElement('li');
        item.textContent = tipo;
        //se crea <li> animal</li>
        list.appendChild(item);
    
    });
}

let list = document.querySelector('#list');

let button= document.querySelector('#animal');
button.addEventListener('click', () => {
    
    var animales =['Lobo','Perro','Gato','Conejo','Aveztruz','Burro'];
    lista(animales);
})

let button2= document.querySelector('#computadoras');
button2.addEventListener('click', () => {
    
    var computadoras =['Dell','Sony','HP','GHIA','MAC','Lenovo','Toshiba','Asus'];
    lista(computadoras);
})


let button3= document.querySelector('#compañeros');
button3.addEventListener('click', () => {
    
    var companeros =['Clara','Felipe','Luis','Marco','Alberto','Emmanuel','Carlos'];
    lista(companeros);
})


