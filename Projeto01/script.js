
function calcularCompra(){
    var codigo = document.getElementById("codigo").value;
    var controle = 0;
    var valor = parseFloat(document.getElementById("valor").value);
    if(valor <= 0){
        var mensagemErro = "Valor incorreto!";
        var retornoErro = document.getElementById("msValor");
        retornoErro.innerHTML = mensagemErro;
        controle = 1;
    }
    var qtd = parseInt(document.getElementById("quantidade").value);
    if(qtd <= 0){
        var mensagemErro = "Valor incorreto!";
        var retornoErro = document.getElementById("msQtd");
        retornoErro.innerHTML = mensagemErro;
        controle = 1;
    }

    if(controle == 0){
        var resultado = valor*qtd;
        var retorno = document.getElementById("compra")
        var mensagem = "R$:"+ resultado.toFixed(2);
    }
    else{
        var retorno = document.getElementById("compra")
        var mensagem = "Erro ao calcular compra!"
    }
    
    retorno.innerHTML = mensagem;
}