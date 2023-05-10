// implement alarm clock that will beep after a specified amount of time has passed
let alarms = process.argv.slice(2); //cmd line arguments ignoring the first 2 as it is path and file name

for (let i in alarms) { // for every value in the arguments
  setTimeout(() => {
    // process.stdout.write('\x07'); doesnt make a sound so I have decided to use console.log to indicate pings
    console.log('Beep!');
  }, i * 1000); //convert miliseconds to seconds
}