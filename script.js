function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format the time to ensure it always displays two digits
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    // Display the formatted time in the clock div
    const clockDiv = document.getElementById("clock");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }
  
  // Call updateTime function once to initialize the clock
  updateTime();
  
  // Update the clock every second using setInterval method
  setInterval(updateTime, 1000);
  