// TIME VARIABLES
var workMinutes = 1;
var breakMinutes = 5;
var minutes = workMinutes;
var seconds = 0;
var displayedTime = null;
var sessionType = 'Work'; // work or break
var runningTimer = null;

var workMinutesContainer = document.getElementById('workMinutesContainer');
var breakMinutesContainer = document.getElementById('breakMinutesContainer');
workMinutesContainer.innerHTML = 'Work minutes: ' + workMinutes;
breakMinutesContainer.innerHTML = 'Break minutes: ' + breakMinutes;

// Show initial timer
displayTime();

function displayTime(){
  var timerContainer = document.getElementById('timerContainer');

  if(seconds.toString().length === 1){
    displayedTime = minutes + ':0' + seconds;
  } else {
    displayedTime = minutes + ':' + seconds;
  }

  timerContainer.innerHTML = sessionType + ': ' + displayedTime;
}

function resetTimer(){
  clearInterval(runningTimer);
  minutes = workMinutes;
  seconds = 0;
  sessionType = 'Work';
  displayTime();
}

function countDown(){
  if(displayedTime === '0:00'){
    clearInterval(runningTimer);
    if(sessionType === 'Work'){
      sessionType = 'Break';
      minutes = breakMinutes;
      seconds = 0;
    } else {
      sessionType = 'Work';
      minutes = workMinutes;
      seconds = 0;
    }
    runningTimer = setInterval(countDown, 1000);
  } else if(seconds === 0){
    seconds = 59;
    minutes -= 1;
  } else {
    seconds -=1;
  }
  displayTime();
}

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(){
  runningTimer = setInterval(countDown, 1000);
});

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(){
  resetTimer();
});

var addBreakMinutesButton = document.getElementById('addBreakMinutesButton');
addBreakMinutesButton.addEventListener('click', function(){
  breakMinutes++;
  breakMinutesContainer.innerHTML = 'Break minutes: ' + breakMinutes;
  displayTime();
});

var subtractBreakMinutesButton = document.getElementById('subtractBreakMinutesButton');
subtractBreakMinutesButton.addEventListener('click', function(){
  if(breakMinutes !== 1){
    breakMinutes--;
    breakMinutesContainer.innerHTML = 'Break minutes: ' + breakMinutes;
    displayTime();
  }
});

var addWorkMinutesButton = document.getElementById('addWorkMinutesButton');
addWorkMinutesButton.addEventListener('click', function(){
  resetTimer();
  workMinutes++;
  minutes = workMinutes;
  workMinutesContainer.innerHTML = 'Work minutes: ' + workMinutes;
  displayTime();
});

var subtractWorkMinutesButton = document.getElementById('subtractWorkMinutesButton');
subtractWorkMinutesButton.addEventListener('click', function(){
  if(workMinutes !== 1){
    resetTimer();
    workMinutes--;
    minutes = workMinutes;
    workMinutesContainer.innerHTML = 'Work minutes: ' + workMinutes;
    displayTime();
  }
});
