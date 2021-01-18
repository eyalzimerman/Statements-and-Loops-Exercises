"use strict";
let number1 = Number(prompt('Enter number'));
let number2 = Number(prompt('Enter number'));
let number3 = Number(prompt('Enter number'));
if ((number1 * number2 * number3) > 0){
    alert('the sign is +');
} 
else if ((number1 * number2 * number3) < 0){
    alert('the sign is -');
}
else{
    alert('no sign, equal to 0');
}
 