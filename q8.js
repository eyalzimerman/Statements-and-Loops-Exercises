"use strict";

function happy_number(num) {
    let str = num.toString();
    let numList = [];
    let sqrList = [];
    let newNum = 0;

    for (let i = 0; i < str.length; i++) {
        numList.push(Number(str[i]));
    }
    for (let i = 0; i < numList.length; i++) {
        sqrList.push(numList[i] * numList[i]);
        newNum += (numList[i] * numList[i]);
    }

    let attampts = 1000;

    while (newNum != 1 && attampts > 0){
        str = newNum.toString();
        numList = [];
        sqrList = [];
        newNum = 0;
        for (let i = 0; i < str.length; i++) {
            numList.push(Number(str[i]));
        }
        for (let i = 0; i < numList.length; i++) {
            sqrList.push(numList[i] * numList[i]);
            newNum += (numList[i] * numList[i]);
        }
        attampts--;
    }
    if(newNum === 1){
        console.log(num);
    }
}

for (let i = 0; i <= 600; i++) {
    happy_number(i);
}