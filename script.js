// Store time
var workMinutes = 1;
var breakMinutes = 5;
var minutes = workMinutes;
var seconds = 0;
var displayedTime = null;
var sessionType = 'Work'; // work or break

function changeDisplayedTime(){
  if(seconds.toString().length === 1){
    displayedTime = minutes + ':0' + seconds; // Add 0 in front of single digit seconds
  } else {
    displayedTime = minutes + ':' + seconds;
  }
}

function displayTime(){
  var timerContainer = document.getElementById('timerContainer');
  changeDisplayedTime();
  timerContainer.innerHTML = sessionType + ': ' + displayedTime;
}

function changeBreakMinutesDisplayed(){
  breakMinutesContainer.innerHTML = 'Break minutes: ' + breakMinutes;
}

function changeWorkMinutesDisplayed(){
  workMinutesContainer.innerHTML = 'Work minutes: ' + workMinutes;
}

// Show work and break minutes
var workMinutesContainer = document.getElementById('workMinutesContainer');
var breakMinutesContainer = document.getElementById('breakMinutesContainer');
workMinutesContainer.innerHTML = 'Work minutes: ' + workMinutes;
breakMinutesContainer.innerHTML = 'Break minutes: ' + breakMinutes;

// Run initial page
displayTime();

// Count down timer
function countDown(){
  // Switch between work and break when session ends
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
    // Count down every second
  } else if(seconds === 0){ // Count down every second
    seconds = 59;
    minutes -= 1;
  } else {
    seconds -=1;
  }

  //changeDisplayedTime();
  displayTime();
}

// Continuous countdown timer
var runningTimer = null;
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(){
  runningTimer = setInterval(countDown, 1000);
});

function resetTimer(){
  clearInterval(runningTimer);
  minutes = workMinutes;
  seconds = 0;
  sessionType = 'Work';
  changeDisplayedTime();
  displayTime();
}

// Stop clock when reset
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(){
  resetTimer();
});

var addBreakMinutesButton = document.getElementById('addBreakMinutesButton');
addBreakMinutesButton.addEventListener('click', function(){
  breakMinutes++;
  changeBreakMinutesDisplayed();
  displayTime();
});

var subtractBreakMinutesButton = document.getElementById('subtractBreakMinutesButton');
subtractBreakMinutesButton.addEventListener('click', function(){
  if(breakMinutes !== 1){
    breakMinutes--;
    changeBreakMinutesDisplayed();
    displayTime();
  }
});

var addWorkMinutesButton = document.getElementById('addWorkMinutesButton');
addWorkMinutesButton.addEventListener('click', function(){
  resetTimer();
  workMinutes++;
  minutes = workMinutes;
  changeWorkMinutesDisplayed();
  displayTime();
});

var subtractWorkMinutesButton = document.getElementById('subtractWorkMinutesButton');
subtractWorkMinutesButton.addEventListener('click', function(){
  if(workMinutes !== 1){
    resetTimer();
    workMinutes--;
    minutes = workMinutes;
    changeWorkMinutesDisplayed();
    displayTime();
  }
});
