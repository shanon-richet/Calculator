const main = document.querySelector('main');

const form = document.createElement('form');
form.setAttribute("name", "calculette");

const field = document.createElement('fieldset');
const legend = document.createElement('legend');

const grid = document.createElement('div');
grid.setAttribute("class", "grid");


legend.innerHTML = "Calculatrice";
legend.setAttribute("style", "background-color:red");
field.appendChild(legend);


const div = document.createElement('div');
div.setAttribute("class", "grid-item");
const un = document.createElement("input");
un.innerText = "1";
un.setAttribute("type","button");
un.setAttribute("value","1");


const div2 = document.createElement('div');
div2.setAttribute("class", "grid-item");
const deux = document.createElement("input");
deux.innerText = "2";
deux.setAttribute("type","button");
deux.setAttribute("value","2");


const div3 = document.createElement('div');
div3.setAttribute("class", "grid-item");
const trois = document.createElement("input");
trois.innerText = "3";
trois.setAttribute("type","button");
trois.setAttribute("value","3");


const div4 = document.createElement('div');
div4.setAttribute("class", "grid-item");
const quatre = document.createElement("input");
quatre.innerText = "4";
quatre.setAttribute("type","button");
quatre.setAttribute("value","4");


const div5 = document.createElement('div');
div5.setAttribute("class", "grid-item");
const cinq = document.createElement("input");
cinq.innerText = "5";
cinq.setAttribute("type","button");
cinq.setAttribute("value","5");


const div6 = document.createElement('div');
div6.setAttribute("class", "grid-item");
const six = document.createElement("input");
six.innerText = "6";
six.setAttribute("type","button");
six.setAttribute("value","6");


const div7 = document.createElement('div');
div7.setAttribute("class", "grid-item");
const sept = document.createElement("input");
sept.innerText = "7";
sept.setAttribute("type","button");
sept.setAttribute("value","7");


const div8 = document.createElement('div');
div8.setAttribute("class", "grid-item");
const huit = document.createElement("input");
huit.innerText = "8";
huit.setAttribute("type","button");
huit.setAttribute("value","8");


const div9 = document.createElement('div');
div9.setAttribute("class", "grid-item");
const neuf = document.createElement("input");
neuf.innerText = "9";
neuf.setAttribute("type","button");
neuf.setAttribute("value","9");



const opérateurs = document.createElement('div');
opérateurs.setAttribute("class", "opérateurs");

const addition = document.createElement("input");
addition.innerText = "+";
addition.setAttribute("type","button");
addition.setAttribute("value","+");


const soustraction = document.createElement("input");
soustraction.innerText = "-";
soustraction.setAttribute("type","button");
soustraction.setAttribute("value","-");


const division = document.createElement("input");
division.innerText = "/";
division.setAttribute("type","button");
division.setAttribute("value","/");


const multiplication = document.createElement("input");
multiplication.innerText = "*";
multiplication.setAttribute("type","button");
multiplication.setAttribute("value","*");

const égalité = document.createElement("input");
égalité.innerText = "=";
égalité.setAttribute("type","button");
égalité.setAttribute("value","=");

const réponse = document.createElement('input');
réponse.setAttribute("type", "textfield");
réponse.setAttribute("class", "réponse");
réponse.setAttribute("name", "reponse");
réponse.setAttribute("value", "");

const réinitialiser = document.createElement('input');
réinitialiser.setAttribute("type", "reset");
réinitialiser.setAttribute("class", "reset");
réinitialiser.setAttribute("value", "reset");


div.appendChild(un);
div2.appendChild(deux);
div3.appendChild(trois);
div4.appendChild(quatre);
div5.appendChild(cinq);
div6.appendChild(six);
div7.appendChild(sept);
div8.appendChild(huit);
div9.appendChild(neuf);

un.addEventListener("click", function() {
document.calculette.reponse.value += '1';
});
deux.addEventListener("click", function() {
    document.calculette.reponse.value += '2';
    });
    trois.addEventListener("click", function() {
        document.calculette.reponse.value += '3';
        });
        quatre.addEventListener("click", function() {
            document.calculette.reponse.value += '4';
            });
            cinq.addEventListener("click", function() {
                document.calculette.reponse.value += '5';
                });
                six.addEventListener("click", function() {
                    document.calculette.reponse.value += '6';
                    });
                    sept.addEventListener("click", function() {
                        document.calculette.reponse.value += '7';
                        });
                        huit.addEventListener("click", function() {
                            document.calculette.reponse.value += '8';
                            });
                            neuf.addEventListener("click", function() {
                                document.calculette.reponse.value += '9';
                                });
                                addition.addEventListener("click", function() {
                                    document.calculette.reponse.value += '+';
                                    });
                                    soustraction.addEventListener("click", function() {
                                        document.calculette.reponse.value += '-';
                                        });
                                        division.addEventListener("click", function() {
                                            document.calculette.reponse.value += '/';
                                            });
                                            multiplication.addEventListener("click", function() {
                                                document.calculette.reponse.value += '*';
                                                });

égalité.addEventListener("click", function() {
    document.calculette.reponse.value = eval(document.calculette.reponse.value);
    });

grid.appendChild(div);
grid.appendChild(div2);
grid.appendChild(div3);
grid.appendChild(div4);
grid.appendChild(div5);
grid.appendChild(div6);
grid.appendChild(div7);
grid.appendChild(div8);
grid.appendChild(div9);

opérateurs.appendChild(addition);
opérateurs.appendChild(soustraction);
opérateurs.appendChild(division);
opérateurs.appendChild(multiplication);
opérateurs.appendChild(égalité)
field.appendChild(opérateurs)

form.appendChild(réinitialiser);
form.appendChild(réponse);


field.appendChild(grid);
field.appendChild(legend);
form.appendChild(field);
main.appendChild(form);

