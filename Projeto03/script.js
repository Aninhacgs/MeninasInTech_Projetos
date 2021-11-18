function calcMilimetros(){
    let aux = 0;
    let controle;
    let chuva = parseFloat(document.getElementById("chuva").value);
    if(chuva <= 0){
        aux = 1;
        controle = "Valor incorreto!";
        let retornMS = document.getElementById("msChuva");
        retornMS.innerHTML = controle;

    }
    
    let qtd = chuva * 25.4;

    let qtdTotal = document.getElementById("qtdChuva");

    if(aux!=1){
        let mensagem = "Quantidade de chuva "+qtd.toFixed(2)+"mm";
        qtdTotal.innerHTML = mensagem;
    }

    else{
        let mensagem = "Erro ao calcular conversão!";
        qtdTotal.innerHTML = mensagem;
    }

}