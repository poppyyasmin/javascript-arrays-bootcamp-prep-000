var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningofArray(chocolateBars, candyString){
return chocolateBars.unshift(candyString);
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, ]
}