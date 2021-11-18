function calcMedia(){
    let aux = 0;
    let controle;
    let av1 = parseFloat(document.getElementById("av1").value);
    if(av1 < 0 || av1 > 10){
        aux = 1;
        controle = "Valor incorreto!";
        let retornMS = document.getElementById("msAV1");
        retornMS.innerHTML = controle;


    }
    let av2 = parseFloat(document.getElementById("av2").value);
    if(av2 < 0 || av2 > 10){
        aux = 1;
        controle = "Valor incorreto!";
        let retornMS = document.getElementById("msAV2");
        retornMS.innerHTML = controle;


    }
    let av3 = parseFloat(document.getElementById("av3").value);
    if(av3 < 0 || av3 > 10){
        aux = 1;
        controle = "Valor incorreto!";
        let retornMS = document.getElementById("msAV3");
        retornMS.innerHTML = controle;


    }
    let av4 = parseFloat(document.getElementById("av4").value);
    if(av4 < 0 || av4 > 10){
        aux = 1;
        controle = "Valor incorreto!";
        let retornMS = document.getElementById("msAV4");
        retornMS.innerHTML = controle;


    }

    let media = (av1 + av2 + av3 + av4) / 4;

    let mediaTotal = document.getElementById("media");

    if(media >= 6 && aux!=1){
        let mensagem = "Parabéns você foi aprovado com média "+media;
        mediaTotal.innerHTML = mensagem;
    }

    else if (media < 6 && aux!=1){
        let mensagem = "Infelizmente você foi reprovado com média "+media;
        mediaTotal.innerHTML = mensagem;
    }

    else{
        let mensagem = "Erro ao calcular a média!";
        mediaTotal.innerHTML = mensagem;
    }

}