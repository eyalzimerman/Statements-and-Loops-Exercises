"use strict";
let piramid = '';
for( let i = 1 ; i <= 5 ; i++){
    for (let j = 0 ; j < i ; j++){
        piramid = piramid + '*';
    }
    console.log(piramid);
    piramid = '';  
}