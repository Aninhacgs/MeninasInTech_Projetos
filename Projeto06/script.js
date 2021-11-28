
var candidato1 = {nome:"Clara",pontos:75,situacao:"Indefinido"}
var candidato2 = {nome:"Cecilia",pontos:90,situacao:"Indefinido"}
var candidato3 = {nome:"Daniela",pontos:65,situacao:"Indefinido"}
var candidato4 = {nome:"Marta",pontos:70,situacao:"Indefinido"}
var candidato5 = {nome:"Maria",pontos:85,situacao:"Indefinido"}
var candidato6 = {nome:"Rafaela",pontos:60,situacao:"Indefinido"}
var candidato7 = {nome:"Paula",pontos:80,situacao:"Indefinido"}
var candidato8 = {nome:"Paloma",pontos:95,situacao:"Indefinido"}
var candidato9 = {nome:"Sara",pontos:68,situacao:"Indefinido"}

var candidatos = [candidato1,candidato2,candidato3,candidato4,candidato5,candidato6,candidato7,candidato8,candidato9];

function imprimeCandidatos(candidatos){
    var elemento = "";

    for(let i=0;i<candidatos.length;i++){
        elemento += "<tr><td>" + candidatos[i].nome + "</td>";
        elemento += "<td>" + candidatos[i].pontos + "</td>";
        if(candidatos[i].pontos >= 70){
            candidatos[i].situacao = "Aprovado";
        }
        else{
            candidatos[i].situacao = "Reprovado";
        }

        elemento += "<td>" + candidatos[i].situacao + "</td></tr>"
    }

    var tabela = document.getElementById("tabelaCandidatos");
    tabela.innerHTML = elemento;
}

imprimeCandidatos(candidatos);