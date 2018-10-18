var pontos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var upgrades = [false, false, false];

//Início do Jogo
function inicioJogo(){
    setInterval(funcaoCronometro, 1000);
}

//Cronometro
function funcaoCronometro() {
    segundos += 1;

    if(pontos >= 20){
        document.getElementById("upgrade1").style.opacity = "1";
    }
    if(pontos >= 250){
        document.getElementById("upgrade2").style.opacity = "1";
    }
    if(pontos >= 500){
        document.getElementById("upgrade3").style.opacity = "1";
    }

    if(segundos < 10){
        document.getElementById("cronometro").innerHTML = "00:00:0" + segundos;
    }else{
        document.getElementById("cronometro").innerHTML = "00:00:" + segundos;
    }

}

//Clique do mouse
function funcaoPontos() {
    pontos += 20;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

//Upgrades
function funcaoUpgrade1(verificacao){
    pontos += 1;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

function funcaoUpgrade2(verificacao){
    pontos += 1;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

function funcaoUpgrade3(verificacao){
    pontos += 5;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

//Comprar Upgrades
function comprarUpgrade1(){
    if((document.getElementById("upgrade1").style.opacity === "1") && (upgrades[0] === false)){
        upgrades[0] = true;
        setInterval(funcaoUpgrade1, 20000);
    }
}
function comprarUpgrade2(){
    if((document.getElementById("upgrade2").style.opacity === "1") && (upgrades[1] === false)){
        upgrades[1] = true;
        setInterval(funcaoUpgrade2, 1000);
    }
}
function comprarUpgrade3(){
    if((document.getElementById("upgrade3").style.opacity === "1") && (upgrades[2] === false)){
        upgrades[2] = true;
        setInterval(funcaoUpgrade3, 10000);
    }
}
