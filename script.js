let showdata = document.getElementById("screen");

function zero() {
    showdata . value += "0"
} 

function one() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 1
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "2"
}


function two() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 2
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "2"
}

function three() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 3
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "3"
}

function four() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 4
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "4"
}

function five() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 5
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "5"
}

function six() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 6
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "6"
}

function seven() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 7
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "7"
}

function eight() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 8
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "8"
}

function nine() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += 9
}
    else{
        showdata.value ="on";
    }
    // showdata.value += "9"
}

function ac() {
    let showdatavalue =  showdata.value
    if( showdatavalue  !='off' && showdatavalue != "on"){

   if(showdatavalue == 0){
    showdata.value = "";
   }
   showdata.value += ""
}
    else{
        showdata.value ="on";
    }
    // showdata.value = ""
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
    let showdata = document.getElementById('screen');
    let result = showdata.value
    let slicevalue = result.slice(0, -1)
    showdata.value = slicevalue
}

function equalto() {
    let output = document.getElementById("screen");
    let result = eval(output.value); 
    output.value = result
}

function onandoff(){
    let showdata = document.getElementById("screen");
    var showdatavalue = showdata.value;
    if(showdatavalue == "off" || showdatavalue == "on"){
        showdata.value = 0
    }
    else{
        showdata.value = "off"
    }
} 



