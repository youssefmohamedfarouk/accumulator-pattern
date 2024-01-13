/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // return rolls.every((roll) => typeof roll === typeof 1);
  // for (let i = 0; i < rolls.length; i++) {
  //   if (typeof rolls[i] !== "number") {
  //     return false;
  //   }
  // }
  // return true;
  // rolls = [1,2,3,"hello"]
  return rolls.reduce((acc, roll) => Number.isInteger(roll), true);
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let elem = null;

  for (let roll of rolls) {
    if (roll === value) {
      elem = value;
    }
  }
  return elem;

  // return rolls.includes(value) ? value : null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // const higherVal = [];
  // for (let i = 0; i < rolls.length; i++) {
  //   if (rolls[i] >= lowest) {
  //     higherVal.push(rolls[i]);
  //   }
  // }
  // return higherVal;
  return rolls.filter((roll) => roll >= lowest);
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  const rollCount = {};
  for (let roll of rolls) {
    // if (!rollCount[roll]) {
    //   rollCount[roll] = 1;
    // } else {
    //   rollCount[roll]++;
    // }
    !rollCount[roll] ? (rollCount[roll] = 1) : rollCount[roll]++;
  }

  return rollCount;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
