function zerinho(){
    var valorA = parseInt(document.getElementById('valorA').value);
    var valorB = parseInt(document.getElementById('valorB').value);
    var valorC = parseInt(document.getElementById('valorC').value);
    const texto = document.querySelector("h3");

    if (valorA != valorB && (valorA != valorC)){
        texto.innerHTML = 'A'
    }
    else if (valorB != valorA && ( valorB != valorC)){
        texto.innerHTML = 'B'
    }
    else if (valorC != valorA && ( valorC != valorB)){
        texto.innerHTML = 'C'
    }
    else {
        texto.innerHTML = '*'
    }
}