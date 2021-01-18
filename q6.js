"use strict";
let mark1 = 80;
let mark2 = 77;
let mark3 = 88;
let mark4 = 95;
let mark5 = 68;
let avgmarks = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
if (avgmarks < 60){
    alert('F');
} else if (avgmarks < 70){
    alert('D');
} else if (avgmarks < 80){
    alert('C');
} else if (avgmarks < 90){
    alert('B');
} else if (avgmarks < 100){
    alert('A');
}