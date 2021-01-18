"use strict";

let number1 = 0;
let number2 = 1;
let number3 = 6;
if(number1 > number2 && number1 > number3){
    if(number2 > number3){
        alert(number1 + ", " + number2 + ", " + number3);
    } else{
        alert(number1 + ", " + number3 + ", " + number2);
    }
}
if(number2 > number1 && number2 > number3){
    if(number1 > number3){
        alert(number2 + ", " + number1 + ", " + number3);
    } else{
        alert(number2 + ", " + number1 + ", " + number3);
    }
}
if(number3 > number1 && number3 > number2){
    if(number2 > number1){
        alert(number3 + ", " + number2 + ", " + number1);
    } else{
        alert(number3 + ", " + number1 + ", " + number2);
    }
}