const display= document.getElementById("display");

function appendtoDisplay(input){
display.value+=input;
}

function clearDisplay(){
display.value="";
}

function deleteNumber() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

    

function calculate(){
    //eval function is use for a calculation of the number
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}