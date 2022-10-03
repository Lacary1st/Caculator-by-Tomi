let showdata = document.getElementById("screen");

function zero() {
    showdata . value += "0"
} 

function one() {
    showdata.value += "1"
}

function two() {
    showdata.value += "2"
}

function three() {
    showdata.value += "3"
}

function four() {
    showdata.value += "4"
}

function five() {
    showdata.value += "5"
}

function six() {
    showdata.value += "6"
}

function seven() {
    showdata.value += "7"
}

function eight() {
    showdata.value += "8"
}

function nine() {
    showdata.value += "9"
}

function ac() {
    showdata.value += "ac"
}

function add(){
    showdata.value += "+"
}

function multiply(){
    showdata.value += "*"
}

function minus(){
    showdata.value += "-"
}

function division(){
    showdata.value += "/"
}

function decimal(){
    showdata.value += "."
}

function modulus(){
    showdata.value += "%"
}

function del(){
    showdata.value += "del"
}

function negation(){
    showdata.value += "~"
}

function equalto() {
    let output = document.getElementById("screen");
    let result = eval(output.value); 
    output.value = result
}



