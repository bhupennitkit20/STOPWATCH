var getStartBtn = document.getElementById("startBtn");
var getStopBtn = document.getElementById("stopBtn");
var getResetBtn = document.getElementById("resetBtn");
var displayTime1 = document.getElementById("timeShow1"); // in min
var displayTime2 = document.getElementById("timeShow2"); // in sec
var displayTime3 = document.getElementById("timeShow3");  // in milisecond


var time1 = 0;
var time2 = 0;
var time3 = 0;

function stopwatch(){
    console.log('Start');
    time3 = time3 + 1;
    displayTime3.innerText = time3;
    if(displayTime3.innerText > 99){
        time3 = 0;
        displayTime3.innerText = time3;
        time2 = time2 + 1;
        displayTime2.innerText = time2;
    }
    if(displayTime2.innerText > 59){
        time3 = 0;
        time2 = 0;
        displayTime3.innerText = time3;
        displayTime2.innerText = time2;
        time1 = time1 +1;
        displayTime1.innerText = time1;
    }
}


getStartBtn.addEventListener('click', () => {
    var id = setInterval(stopwatch, 10);

    getStopBtn.addEventListener('click', () => {
        console.log('Stop');
        clearInterval(id);
    })
    getResetBtn.addEventListener('click', () => {
        time1 = 0;
        time2 = 0
        time3 = 0;
        displayTime3.innerText = time3;
        displayTime2.innerText = time2;
        displayTime1.innerText = time1;
        clearInterval(id);
        console.log('Reset');
    })
})


