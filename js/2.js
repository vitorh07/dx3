function score(){
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    var valor3 = parseInt(document.getElementById('valor3').value);
    const texto = document.querySelector("h3");

    if (valor1 < valor2 && valor1 > valor3 || (valor1 < valor3 && valor1 > valor2)){
        texto.innerHTML = valor1;
    } 
    else if (valor2 < valor1 && valor2 > valor3 || (valor2 < valor3 && valor2 > valor1)){
        texto.innerHTML = valor2;
    } 

    else if (valor3 < valor2 && valor3 > valor1 || (valor3 < valor1 && valor3 > valor2)){
        texto.innerHTML = valor3;
    } 
}