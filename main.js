// One of the bugs is with numbers of more than 2, think of an order of operations scheme
// and maybe putting values into an array and getting sum of array? If addition that is.


// Global Variables (used for number storage)
let beforeOperatorVals = '';
let operatorBefore = false;

function squareRootNum() {
    if (Math.pow(Number(document.getElementById('output').innerHTML), 0.5) > 999999999999) {
        document.getElementById('output').innerHTML = `Out of Bound`;
    } else {
        const currValsRoot = Math.pow(Number(document.getElementById('output').innerHTML), 0.5).toString().substring(0,12);
        document.getElementById('output').innerHTML = `${currValsRoot}`;
    }
}

function squared() {
    if (Number(document.getElementById('output').innerHTML) * Number(document.getElementById('output').innerHTML) > 999999999999) {
        document.getElementById('output').innerHTML = `Out of Bound`;
    } else {
        const currValsSquared = (Number(document.getElementById('output').innerHTML) * Number(document.getElementById('output').innerHTML)).toString().substring(0,12);
        document.getElementById('output').innerHTML = `${currValsSquared}`;
    }
}

function plusMinus() {
    if (Number(document.getElementById('output').innerHTML) * -1 < -99999999999) {
        document.getElementById('output').innerHTML = `Out of Bound`;
    } else {
        const currValsDiffSign = Number(document.getElementById('output').innerHTML) * -1;
        document.getElementById('output').innerHTML = `${currValsDiffSign}`;
    }
}

function addition() {
    document.getElementById('addition').style.backgroundColor = "gray";
    beforeOperatorVals = Number(document.getElementById('output').innerHTML);
    operatorBefore = true;
}

function subtraction() {
    document.getElementById('subtraction').style.backgroundColor = "gray";
    beforeOperatorVals = Number(document.getElementById('output').innerHTML);
    operatorBefore = true;
}

function multiplication() {
    document.getElementById('multiplication').style.backgroundColor = "gray";
    beforeOperatorVals = Number(document.getElementById('output').innerHTML);
    operatorBefore = true;
}

function division() {
    document.getElementById('division').style.backgroundColor = "gray";
    beforeOperatorVals = Number(document.getElementById('output').innerHTML);
    operatorBefore = true;
}

function equals() {
    if (document.getElementById('addition').style.backgroundColor == "gray") {
        if ((beforeOperatorVals + Number(document.getElementById('output').innerHTML)) > 999999999999) {
            document.getElementById('output').innerHTML = `Out of Bound`;
        } else {
            let add_answer = (beforeOperatorVals + Number(document.getElementById('output').innerHTML)).toString().substring(0,12);
            document.getElementById('output').innerHTML = add_answer;
            document.getElementById('addition').style.backgroundColor = "white";
        }
    } else if (document.getElementById('subtraction').style.backgroundColor == "gray") {
        if ((beforeOperatorVals - Number(document.getElementById('output').innerHTML)) < -99999999999) {
            document.getElementById('output').innerHTML = `Out of Bound`;
        } else {
            let sub_answer = (beforeOperatorVals - Number(document.getElementById('output').innerHTML)).toString().substring(0,12);
            document.getElementById('output').innerHTML = sub_answer;
            document.getElementById('subtraction').style.backgroundColor = "white";
        }
    } else if (document.getElementById('multiplication').style.backgroundColor == "gray") {
        if ((beforeOperatorVals * Number(document.getElementById('output').innerHTML)) > 999999999999) {
            document.getElementById('output').innerHTML = `Out of Bound`;
        } else {
            let mult_answer = (beforeOperatorVals * Number(document.getElementById('output').innerHTML)).toString().substring(0,12);
            document.getElementById('output').innerHTML = mult_answer;
            document.getElementById('multiplication').style.backgroundColor = "white";
        }
    } else if (document.getElementById('division').style.backgroundColor == "gray") {
        if ((beforeOperatorVals / Number(document.getElementById('output').innerHTML)) < -99999999999) {
            document.getElementById('output').innerHTML = `Out of Bound`;
        } else {
            let div_answer = (beforeOperatorVals / Number(document.getElementById('output').innerHTML)).toString().substring(0,12);
            document.getElementById('output').innerHTML = div_answer;
            document.getElementById('division').style.backgroundColor = "white";
        }
    } 
}

function dot() {
    if (document.getElementById('output').innerHTML.length != 0 && document.getElementById('output').innerHTML.includes(".") == false){
        document.getElementById('output').innerHTML += '.';
    }
}

function ac() {
    if (document.getElementById('addition').style.backgroundColor == "gray") {
        document.getElementById('addition').style.backgroundColor = "white";
        document.getElementById('output').innerHTML = '';
    } else if (document.getElementById('subtraction').style.backgroundColor == "gray") {
        document.getElementById('subtraction').style.backgroundColor = "white";
        document.getElementById('output').innerHTML = '';
    } else if (document.getElementById('multiplication').style.backgroundColor == "gray") {
        document.getElementById('multiplication').style.backgroundColor = "white";
        document.getElementById('output').innerHTML = '';
    } else if (document.getElementById('division').style.backgroundColor == "gray") {
        document.getElementById('division').style.backgroundColor = "white";
        document.getElementById('output').innerHTML = '';
    }
    document.getElementById('output').innerHTML = '';
}

function zero() {
    let len = document.getElementById('output').innerHTML.length;
    if (0 < len && len < 12 && !operatorBefore){
        document.getElementById('output').innerHTML += '0';
    }
}

function one() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '1';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '1';
        }
    }
}

function two() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '2';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '2';
        }
    }
}

function three() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '3';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '3';
        }
    }
}

function four() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '4';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '4';
        }
    }
}

function five() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '5';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '5';
        }
    }
}

function six() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '6';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '6';
        }
    }
}

function seven() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '7';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '7';
        }
    }
}

function eight() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '8';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '8';
        }
    }
}

function nine() {
    let len = document.getElementById('output').innerHTML.length;
    if (operatorBefore) {
        document.getElementById('output').innerHTML = '';
        operatorBefore = false;
        if (len < 12){
            document.getElementById('output').innerHTML += '9';
        }
    } else {
        if (len < 12){
            document.getElementById('output').innerHTML += '9';
        }
    }
}