var workMinutes = 25;
var breakMinutes = 5;
var minutes = workMinutes;
var seconds = 0;
var displayedTime = null;
var sessionType = 'work'; // work or break
var runningTimer = null;

var workMinutesContainer = document.getElementById('workMinutesContainer');
var breakMinutesContainer = document.getElementById('breakMinutesContainer');
workMinutesContainer.innerHTML = workMinutes + '<br><span>work length</span>';
breakMinutesContainer.innerHTML = breakMinutes + '<br><span>break length</span>';

// Show initial timer
displayTime();

function displayTime(){
  var timerContainer = document.getElementById('timerContainer');

  if(seconds.toString().length === 1){
    displayedTime = minutes + ':0' + seconds;
  } else {
    displayedTime = minutes + ':' + seconds;
  }

  timerContainer.innerHTML = sessionType + '<br><span>' + displayedTime + '</span>';
}

function resetTimer(){
  clearInterval(runningTimer);
  minutes = workMinutes;
  seconds = 0;
  sessionType = 'work';
  startButton.textContent = 'start';
  displayTime();
}

function countDown(){
  if(displayedTime === '0:00'){
    clearInterval(runningTimer);
    if(sessionType === 'work'){
      sessionType = 'break';
      minutes = breakMinutes;
      seconds = 0;
    } else {
      sessionType = 'work';
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
  if(startButton.textContent === 'start' || startButton.textContent === 'resume'){
    runningTimer = setInterval(countDown, 1000);
    startButton.textContent = 'pause';
  } else {
    clearInterval(runningTimer);
    startButton.textContent = 'resume';
  }
});

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(){
  resetTimer();
});

var addBreakMinutesButton = document.getElementById('addBreakMinutesButton');
addBreakMinutesButton.addEventListener('click', function(){
  breakMinutes++;
  breakMinutesContainer.innerHTML = breakMinutes + '<br><span>break length</span>';
  displayTime();
});

var subtractBreakMinutesButton = document.getElementById('subtractBreakMinutesButton');
subtractBreakMinutesButton.addEventListener('click', function(){
  if(breakMinutes > 1){
    breakMinutes--;
    breakMinutesContainer.innerHTML = breakMinutes + '<br><span>break length</span>';
    displayTime();
  }
});

var addWorkMinutesButton = document.getElementById('addWorkMinutesButton');
addWorkMinutesButton.addEventListener('click', function(){
  resetTimer();
  workMinutes++;
  minutes = workMinutes;
  workMinutesContainer.innerHTML = workMinutes + '<br><span>work length</span>';
  displayTime();
});

var subtractWorkMinutesButton = document.getElementById('subtractWorkMinutesButton');
subtractWorkMinutesButton.addEventListener('click', function(){
  if(workMinutes > 1){
    resetTimer();
    workMinutes--;
    minutes = workMinutes;
    workMinutesContainer.innerHTML = workMinutes + '<br><span>work length</span>';
    displayTime();
  }
});
