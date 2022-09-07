
let seconds = 00;
let tens = 00;
let outputSeconds = document.getElementById('seconds');
let outputTens = document.getElementById('tens')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let Interval;

startBtn.addEventListener('click', () => {
clearInterval(Interval);
Interval = setInterval(startTime, 10);

});

stopBtn.addEventListener('click', () => {
clearInterval(Interval);
})

resetBtn.addEventListener('click', () => {
clearInterval(Interval);
tens = "00";
seconds = "00";
outputSeconds.innerHTML = seconds;
outputTens.innerHTML = tens;


})

function startTime(){
tens++;
if(tens <=9){
outputTens.innerHTML = "0" + tens;
}

if(tens > 9){
outputTens.innerHTML = tens;

}

if(tens > 99){
seconds++;
outputSeconds.innerHTML = "0" + seconds;
tens = 0;
outputTens.innerHTML = "0" + tens;

}

if(seconds > 9){
outputSeconds.innerHTML = seconds;

}




}

