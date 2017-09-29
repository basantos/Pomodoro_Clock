// Store time
var minutes = 25;
var seconds = 0;
var displayedTime = minutes + ':' + seconds;
var sessionType = 'Work'; // session or break

// Display time
console.log(displayedTime);

// Count down timer
function countDown(){
  if(seconds === 0){
    seconds = 59;
    minutes -= 1;
  } else {
    seconds -=1;
  }
  displayedTime = minutes + ':' + seconds;
}

// Continuous countdown timer
var runningTimer = setInterval(countDown, 1000);

// Stop clock when paused
clearInterval(runningTimer);

// Stop clock when time reaches 0
if(minutes === 0 && seconds === 0){
  clearInterval(runningTimer);
}

// Switch between session and break when timer reaches 0
if(sessionType === 'Work'){
  sessionType = 'Break';
  minutes = numOfBreakMinutes;
} else {
  sessionType = 'Work';
  minutes = numOfWorkMinutes;
}

// Increase session or break length
minutes +=1;

// Decrease session or break length
if(minutes!==1){ // Prevent user from making session or length 0
  minutes -= 1;
}
