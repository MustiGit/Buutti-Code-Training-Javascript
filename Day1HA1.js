const price = 10; // Price in euros
const discount = 2; // Discount in euros
const discountedPrice = (price - discount);

console.log("The original price was " + price + " euros and current discount is " + discount + " euros.\nNew price is: " + discountedPrice + "euros.");

const distance = 200; // Distance in kilometers
const speed = 95; // Speed in kilometers per hour

const timeTotalHours = (distance/speed); // Total travel time in hours
const timeTotalMinutes = (timeTotalHours) * 60; // Total travel time in minutes

const timeHours = Math.floor(timeTotalHours); // Travel time's hours, rounded down
const timeMinutes = Math.floor((timeTotalMinutes - (timeHours * 60))); // Travel time's minutes

console.log("\nTravelling speed: " + speed + "km/h\nDistance: " + distance + "km\nTravel time: " + timeHours + " hours and " + timeMinutes + " minutes");

const days = 365;
const hours = 24; // Hours in a day
const seconds = 3600 // Seconds in a hour
const secondsInYear = ((seconds * hours) * 365); // Seconds in a year

console.log("\nThere's " + secondsInYear + " seconds in a year of 365 days.");