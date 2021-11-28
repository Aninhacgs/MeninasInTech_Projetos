
function Converter(){
    var valor = document.getElementById("valor");
    var conversor = parseFloat(valor.value);
    var valor1 = document.getElementById("cotacao");
    var valorCotacao = parseFloat(valor1.value);

    if(conversor > 0 && valorCotacao > 0){
        conversor *= valorCotacao;
        var elemento = document.getElementById("valorConvertido");
        var mensagem = "O valor em R$: " + conversor;
        elemento.innerHTML = mensagem;
    }
    else{
        var elemento = document.getElementById("valorConvertido");
        var mensagem = "Erro ao calcular conversão!";
        elemento.innerHTML = mensagem;
    }
}