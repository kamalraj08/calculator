
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function deleteDigit(){
    let display = document.getElementById('display');
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }   
}
