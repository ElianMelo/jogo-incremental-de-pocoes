var click = 0;

function funcaoClick() {
    click += 1;
    document.getElementById("score").innerHTML = "Score: " + click;
}
