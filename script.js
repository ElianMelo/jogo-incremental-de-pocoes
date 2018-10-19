var pontos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var upgrades = [false, false, false];

//Início do Jogo
function inicioJogo(){
    setInterval(funcaoCronometro, 1000);
    setInterval(funcaoVerificacao, 100);
}

//Cronometro
function funcaoCronometro() {
    var strSegundos, strMinutos, strHoras;

    segundos += 1;

    if(segundos >= 60){
        segundos = 0;
        minutos += 1;
    }

    if(minutos >= 60){
        minutos = 0;
        horas += 1;
    }

    if(segundos < 10){
        strSegundos = "0" + segundos;
    }else{
        strSegundos = segundos;
    }

    if(minutos < 10){
        strMinutos = "0" + minutos;
    }else{
        strMinutos = minutos;
    }

    if(horas < 10){
        strHoras = "0" + horas;
    }else{
        strHoras = horas;
    }

    document.getElementById("cronometro").innerHTML = strHoras + ":" + strMinutos + ":" + strSegundos;

}

//Clique do mouse
function funcaoPontos() {
    pontos += 20;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

//Upgrades
function funcaoUpgrade1(){
    pontos += 1;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

function funcaoUpgrade2(){
    pontos += 1;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

function funcaoUpgrade3(){
    pontos += 5;
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
}

//Verificação
function funcaoVerificacao() {
    if((pontos >= 20) && (upgrades[0] === false)){
        document.getElementById("upgrade1").style.opacity = "1";
        upgrades[0] = true;
        setInterval(funcaoUpgrade1, 20000);
    }
    if((pontos >= 250) && (upgrades[1] === false)){
        document.getElementById("upgrade2").style.opacity = "1";
        upgrades[1] = true;
        setInterval(funcaoUpgrade2, 1000);
    }
    if((pontos >= 500) && (upgrades[2] === false)){
        document.getElementById("upgrade3").style.opacity = "1";
        upgrades[2] = true;
        setInterval(funcaoUpgrade3, 10000);
    }
}
