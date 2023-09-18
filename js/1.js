function coordenadas(){
    var valorAltura = parseInt(document.getElementById("valorAltura").value);
    var valorLargura = parseInt(document.getElementById("valorLargura").value);
    const texto = document.querySelector("h1");

    if ((valorLargura <= 432 && valorAltura >= 0) && (valorAltura <= 468 && valorAltura >= 0)){
        texto.innerHTML = "DENTRO";
    }
    else {
        texto.innerHTML = "FORA";
    }
}