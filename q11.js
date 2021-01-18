"use strict";
let number1 = 45;
let number2 = 15;
let count;
if(number1 < number2){
    count = number1;
} else {
    count = number2;
}

for (let i = count; i >= 1; i--) {
    if( number1 % i === 0 && number2 % i === 0){
        console.log(i);
        break;
    }   
}