
var maquina = parseInt(Math.random()*4);

function jogar(){
    var jogador = parseInt(document.getElementById("valor").value);

    if((jogador == 1 || jogador == 2 || jogador == 3) && (maquina == 1 || maquina == 2 || maquina == 3)){
        if(jogador == maquina){
            var resultado = "Empate";
            if(jogador == 1){
                var jogada1 = "Pedra";
                var jogada2 = "Pedra";
            }
            else if(jogador == 2){
                var jogada1 = "Papel";
                var jogada2 = "Papel";
            }
            else{
                var jogada1 = "Tesoura";
                var jogada2 = "Tesoura";
            }
        }
        else if(jogador == 1 && maquina == 3){
            var resultado = "Você Venceu!";
            var jogada1 = "Pedra";
            var jogada2 = "Tesoura";
        }
        else if(jogador == 3 && maquina == 2){
            var resultado = "Você Venceu!";
            var jogada1 = "Tesoura";
            var jogada2 = "Papel";
        }
        else if(jogador == 2 && maquina == 1){
            var resultado = "Você Venceu!";
            var jogada1 = "Papel";
            var jogada2 = "Pedra"
        }

        else if(maquina== 1 && jogador == 3){
            var resultado = "Você perdeu!";
            var jogada2 = "Pedra";
            var jogada1 = "Tesoura";
        }
        else if(maquina== 3 && jogador == 2){
            var resultado = "Você perdeu!";
            var jogada2 = "Tesoura";
            var jogada1 = "Papel";
        }
        else if(maquina== 2 && jogador == 1){
            var resultado = "Você perdeu!";
            var jogada2 = "Papel";
            var jogada1 = "Pedra"
        }

        var elemento = document.getElementById("resultado");
        var mensagem = "Sua Jogada -> "+jogada1+" Jogada da máquina -> "+jogada2+" Resultado -> "+resultado;
        elemento.innerHTML = mensagem;
    }
    else{
        var resultado = "Erro ao calcular resultado" + "Jogada jogador -> "+jogador+" Jogada Máquina -> "+maquina;
        var elemento = document.getElementById("resultado");
        elemento.innerHTML = resultado;

    }

}