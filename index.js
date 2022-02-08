// Set constants
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// returnFirstTwoDrivers() - Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = function () {
  // The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function.
const returnLastTwoDrivers = function () {
  // The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
  return drivers.slice(-2);
};

// selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer
function createFareMultiplier(multiplierInt) {
  // ...and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
  return function fareMultiplier(fare) {
    return fare * multiplierInt;
  };
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareDoubler = function (num) {
  // Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
  return createFareMultiplier(2)(num);
};

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareTripler = function (num) {
  //Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
  return createFareMultiplier(3)(num);
};

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  //Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
  return returnFirstTwoDrivers();
}
