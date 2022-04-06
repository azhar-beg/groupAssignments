const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const doesIncludes = function (array, element) {
  if (!Array.isArray(element)) {
    return array.includes(element);
  }

  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (array) {
  const unique = [];
  for (let index = 0; index < array.length; index++) {
    if (!doesIncludes(unique, array[index])) {
      unique.push(array[index]);
    }
  }
  return unique;
};

const elementFrequency = function (array, element) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index])) {
      count++;
    }
  }
  return [element, count]
};

const elementsFrequency = function (array) {
  const unique = uniqueElements(array);
  const frequency = [];
  for (let index = 0; index < unique.length; index++) {
    frequency.push(elementFrequency(array, unique[index]));
  }
  return frequency;
}

const testElementsFrequency = function (array, expected, message) {
  const actual = elementsFrequency(array);
  console.log(actual);
  console.log(expected);
  assert(actual, expected, message);
};

const elementsFrequencyTestCases = function () {
  testElementsFrequency([1], [[1, 1]], 'A single element');
  testElementsFrequency([[1]], [[[1], 1]], 'A single element as array');
  testElementsFrequency([1, [1], [1]], [[1, 1], [[1], 2]], 'An array with numbers and an array');
};

elementsFrequencyTestCases();