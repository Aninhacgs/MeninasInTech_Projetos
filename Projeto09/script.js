
function Converter(){
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var tipo = document.getElementById("tipo").value;

    if(tipo == "FAHRENHEIT"){
        var tempConvertido = ((temperatura / 5)*9) + 32;
    }
    else{
        var tempConvertido = ((temperatura - 32)/9) * 5;
    }

    var elemento = document.getElementById("valorConvertido");
    var mensagem = "A temperatura em "+tipo+" é "+tempConvertido+"°";
    elemento.innerHTML = mensagem;
}