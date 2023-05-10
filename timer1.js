// implement alarm clock that will beep after a specified amount of time has passed

// Get the command-line arguments starting from the third one (the first two are "node" and the script name)
let alarms = process.argv.slice(2).map(Number);

// Sort the alarms in ascending order
alarms.sort((a, b) => a - b); // if a-b is negative, b is bigger than a so swap places, if a-b is positive, keep places

// Loop through each alarm and set a timeout for it
for (let i in alarms) {
  let time = alarms[i];

  // Check if the alarm is a valid number greater than zero
  if (!isNaN(time) && time > 0) { // edge cases if input isANumber and time MUST be greater than 0

    // Set a timeout for the alarm, and log a message when it goes off
    setTimeout(() => {
      console.log('Beep!');
    }, time * 1000); // time is in miliseconds so convert to seconds
  }
}
