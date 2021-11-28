
var sorte = parseInt(Math.random()*11);

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    if(chute == sorte){
        resultado.innerHTML = "Você acertou!";
    }
    else if(chute>10 || chute < 0){
        resultado.innerHTML = "Digite um valor de 0 a 10";
    }
    else{
        resultado.innerHTML = "Você errou! O número da sorte é "+sorte;
    }
}