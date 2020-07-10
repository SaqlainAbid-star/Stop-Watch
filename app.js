var min=0;
var sec=0;
var mili=0;
var minDisplay = document.getElementById("min");
var secDisplay = document.getElementById("sec");
var miliDisplay = document.getElementById("mili");
var interval;

function timer(){
    mili++
    miliDisplay.innerHTML = mili;
    if(mili>=100){
        sec++
        secDisplay.innerHTML= sec;
        mili = 0;
    }
    else if(sec>=60){
        min++
        minDisplay.innerHTML = min
        sec = 0;
    }
}

function hideBtn(){
    document.getElementById("myBtn")
    // disabled = true; 
    myBtn.style.visibility = "hidden";
}

function showBtn(){
    document.getElementById("myBtn") 
    myBtn.style.visibility = "visible";
}

function start(){ 
    interval = setInterval(timer,10)
    hideBtn()

}

function stop(){
    clearInterval(interval)
    showBtn()
}

function reset(){
    min=0;
    sec=0;
    mili=0;
    miliDisplay.innerHTML = mili;
    secDisplay.innerHTML= sec;
    minDisplay.innerHTML = min
    stop()
    showBtn()
}