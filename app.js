var min = 0;
var sec = 0;
var milsec = 0;
var minValue = document.getElementById("min");
var secValue = document.getElementById("sec");
var milsecValue = document.getElementById("milsec");
var value;

function digit (){
    milsec++
    milsecValue.innerHTML = milsec;
    
    if(milsec >= 100){
        sec++
        secValue.innerHTML = sec;
        milsec = 0;
    }
    else if(sec >= 60) {
        min++
        minValue.innerHTML = min;
        sec = 0;
    }
}

function start(){
    value = setInterval(digit, 10);
    document.getElementById("start").disabled = true;
}

function pause(){
    clearInterval(value);
    document.getElementById("start").disabled = false;
}

function reset(){
    zero = 0;
    minValue.innerHTML = zero;
    secValue.innerHTML = zero;
    milsecValue.innerHTML = zero;
    pause();
}

