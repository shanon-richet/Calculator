var rep= document.querySelector('.réponse');

// nombres

var one = document.querySelector('.one').onclick = function(){
    rep.innerHTML += "1";
}
var two = document.querySelector('.two').onclick = function(){
    rep.innerHTML += "2";
}
var three = document.querySelector('.three').onclick = function(){
    rep.innerHTML += "3";
}
var four = document.querySelector('.four').onclick = function(){
    rep.innerHTML += "4";
}
var five = document.querySelector('.five').onclick = function(){
   rep.innerHTML += "5";
}
var six = document.querySelector('.six').onclick = function(){
    rep.innerHTML += "6";
}
var seven = document.querySelector('.seven').onclick = function(){
    rep.innerHTML += "7";
}
var eight = document.querySelector('.eight').onclick = function(){
    rep.innerHTML += "8";
}
var nine = document.querySelector('.nine').onclick = function(){
    rep.innerHTML += "9";
}
var droite = document.querySelector('.droite').onclick = function(){
    rep.innerHTML += ")";
}
var gauche = document.querySelector('.gauche').onclick = function(){
    rep.innerHTML += "(";
}

// opérations

var addition = document.querySelector('.addition').onclick = function(){
    rep.innerHTML += "+";
}
var soustraction = document.querySelector('.soustraction').onclick = function(){
    rep.innerHTML += "-";
}
var multiplication = document.querySelector('.multiplication').onclick = function(){
    rep.innerHTML += "*";
}
var division = document.querySelector('.division').onclick = function(){
    rep.innerHTML += "/";
}
var racine = document.querySelector('.racine').onclick = function(){
rep.innerHTML += '=' + Math.sqrt(rep.innerHTML)
}
var tangente = document.querySelector('.tangente').onclick = function(){
    rep.innerHTML += '=' + Math.tan(rep.innerHTML)
}
var cosinus = document.querySelector('.cosinus').onclick = function(){
    rep.innerHTML += '=' + Math.cos(rep.innerHTML)
}
var sinus = document.querySelector('.sinus').onclick = function(){
    rep.innerHTML += '=' + Math.sin(rep.innerHTML)
}
let today = new Date()
let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();

const section = document.querySelector('.history');

var égal = document.querySelector('.égal').onclick = function égal(){
    rep.innerHTML += "=" + eval(rep.innerHTML); 
    var history = document.createTextNode(date + '(' + (rep.innerHTML) + ')');

    section.appendChild(history)
}

document.body.addEventListener("keydown", keyEvent);
function keyEvent(event){
    var x = event.keyCode;
    if (x = 32){
    égal();
    }
}

var field= document.querySelector('.reset').onclick= function() {
    rep.innerHTML = "";
}




