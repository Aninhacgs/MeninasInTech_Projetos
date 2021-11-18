
var total = 0;
var mensagem;
mensagem = document.getElementById("valorTotal");

function adicionar(){
    var valor;
    var controle = 0
    var erroQTD = document.getElementById("msqtd")
    var qtd = parseInt(document.getElementById("qtd").value);
    var codigo = document.getElementById("produtos").value;

    if(qtd > 0 && controle == 0){
        switch(codigo){
            case "CACHORRO QUENTE":
                valor = 3.55 * qtd;
                total += valor;
                break;
            case "PIPOCA":
                valor = 2.45 * qtd;
                total += valor;
                break;
            case "FATIA DE PIZZA":
                valor = 4.60 * qtd;
                total += valor;
                break;
            case "FATIA DE TORTA":
                valor = 3.90 * qtd;
                total += valor;
                break;
            case "FATIA DE BOLO":
                valor = 3.70 * qtd;
                total += valor;
                break;
            case "MISTO QUENTE":
                valor = 2.70 * qtd;
                total += valor;
                break;
            case "REFRIGERANTE 200ml":
                valor = 4.50 * qtd;
                total += valor;
                break;
            case "ÁGUA DE COCO":
                valor = 4.90 * qtd;
                total += valor;
                break;
            case "MATTE":
                valor = 3.20 * qtd;
                total += valor;
                break;
            case "CAFÉZINHO":
                valor = 3.60 * qtd;
                total += valor;
                break;
            case "CHOCOLATE QUENTE":
                valor = 3.80 * qtd;
                total += valor;
                break;
            case "SUCO DE LARANJA":
                valor = 3.10 * qtd;
                total += valor;
                break;
            }
    
    }

    else{
        controle = 1;
        erroQTD.innerHTML = "Valor incorreto!"
    }
    
    
}

function notaCompra(){
    mensagem.innerHTML = "R$:" + total.toFixed(2);
}

function finalizaCompra(){
    var controle = 0;
    var erroValorPago = document.getElementById("msValorPago");
    var totalCompra = parseInt(document.getElementById("valorPago").value);

    if(totalCompra > total && controle == 0){
        var troco = totalCompra - total;
        var retornoTroco = document.getElementById("troco")
        retornoTroco.innerHTML = "Troco R$:" + troco.toFixed(2);
        var retornoCompra = document.getElementById("totPago");
        retornoCompra.innerHTML = "Valor Pago R$:" + totalCompra.toFixed(2);
        var retonoValor = document.getElementById("totalCompra");
        retonoValor.innerHTML = "Total da Compra R$:" + total.toFixed(2);

    }

    else{
        controle = 1
        erroValorPago.innerHTML = "Erro ao finalizar a compra!"
    }

   
}

