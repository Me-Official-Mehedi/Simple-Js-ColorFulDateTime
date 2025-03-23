const chalk = require('chalk');  // Import chalk library

var DateVar = "2025-03-23T10:30:00"; // Example date-time string
var intDate = Date.parse(DateVar);

var MonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];

var timerID = 0;
var cnt = 0;

var Hours = 0;
var mins = 0;

function UpdateTimer() {
    cnt = cnt + 1;
    if (cnt == 2) {
        cnt = 0;
    }
    intDate = intDate + 1000;

    var tDate = new Date(intDate);
    var yr = tDate.getFullYear();

    Hours = tDate.getHours();
    mins = tDate.getMinutes();

    Hours = getFullNumber(Hours);
    mins = getFullNumber(mins);

    console.clear(); // Clear the console for live updating effect
    
    console.log(
        chalk.cyan(getDayName(tDate.getDay())) + ", " + 
        chalk.green(getFullNumber(tDate.getDate())) + " " +
        chalk.yellow(MonthName[parseInt(tDate.getMonth())]) + ", " + 
        chalk.blue(yr) + " " +
        chalk.magenta(Hours + ":" + mins + ":" + getFullNumber(tDate.getSeconds())) + 
        chalk.red(" BST")
    );

    timerID = setTimeout(UpdateTimer, 1000);
}

function Start() {
    var tStart = new Date(intDate);
    var yr = tStart.getFullYear();

    Hours = tStart.getHours();
    mins = tStart.getMinutes();

    Hours = getFullNumber(Hours);
    mins = getFullNumber(mins);

    console.log(
        chalk.cyan(getDayName(tStart.getDay())) + ", " + 
        chalk.green(getFullNumber(tStart.getDate())) + " " +
        chalk.yellow(MonthName[parseInt(tStart.getMonth())]) + ", " + 
        chalk.blue(yr) + " " +
        chalk.magenta(Hours + ":" + mins + ":" + getFullNumber(tStart.getSeconds())) + 
        chalk.red(" BST")
    );

    timerID = setTimeout(UpdateTimer, 1000);
}

function getDayName(dayCount) {
    switch (dayCount) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

function getFullNumber(number) {
    return number < 10 ? '0' + number : number;
}

Start();