"use script"

let greetingsInApp = "Nice to meet you in my First \"JS\" app!";

alert(greetingsInApp);

let userName = prompt("So what's your name?");

let lastName = prompt("Please, print your last name.");

let templateString = `You're ${userName} ${lastName}!`;

alert(templateString);

let userAge = prompt('Wha`s your age?');

let templateAge = `${templateString} Your age is ${userAge}!`;

alert(templateAge);