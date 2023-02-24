function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let firstElements = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = firstElements;
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const data = [
  { name: "Gago", age: 23, id: 1 },
  { name: "Arshak", age: 10, id: 2 },
  { name: "Vaxulik", age: 13, id: 3 },
  { name: "balik", age: 12, id: 4 },
  { name: "Stepan", age: 13, id: 5 },
  { name: "Seroh", age: 13, id: 6 },
  { name: "Saryan", age: 13, id: 7 },
  { name: "Beno", age: 13, id: 8 },
  { name: "Smbat", age: 13, id: 9 },
  { name: "Hovo", age: 13, id: 10 },
];

function getById (id){
  return data.filter(el => el.id === id)
}
console.log(getById(4));

function missingLetterInName (letter){
  return data.filter(el => !el.name.includes(letter))
}
console.log(missingLetterInName("a"));

function findByIndex (array,index){
return array.filter((el,i) => i !== index)
}
console.log(findByIndex([1,2,4,99],1));

function deletesElem(array, index) {
  array.splice(index, 1);
  return array;
}
console.log(deletesElem([1, 6, 5, 8, 43, 9, 8], 4));

function theMax(array) {
  let firstItem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstItem) {
      firstItem = array[i];
    }
  }
  return firstItem;
}
console.log(theMax([-1, 1, 2, 4, 99, 3, 4, 5, 6]));

function theMin(array) {
  let firstItem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < firstItem) {
      firstItem = array[i];
    }
  }
  return firstItem;
}
console.log(theMin([-1, 1, 2, 4, 99, 3, 4, 5, 6]));

function minMax(array, bool = undefined) {
  MaxMinEl = array[0];
  if (typeof bool === "undefined") {
    return "Give a boolean value";
  }
  for (i = 0; i < array.length; i++) {
    let condition = bool ? array[i] < MaxMinEl : array[i] > MaxMinEl;
    if (condition) {
      MaxMinEl = array[i];
    }
  }
  return MaxMinEl;
}

console.log(minMax([8, 2, 4, 99, 3, 4, 5, 6], true));

function calcTheArguments (){
  let count = 0;
  for(let i = 0; i < arguments.length; i++){
count += arguments[i]
  }
  return count
}
console.log(calcTheArguments(1,2,3,4,5,6,7,8));

function calcTheArguments (){
  let argArray = [...arguments];
 return argArray.reduce((acc,el)=> acc + el,0)
}
console.log(calcTheArguments(1,2,3,4,5,6,7,8));

const countCharacters = (str) => {
  const objectWithCharCount = {};
  for (const char of str) {
    objectWithCharCount[char] = isNaN(objectWithCharCount[char]) ? 1 : objectWithCharCount[char] + 1;
  }
  return objectWithCharCount;
};
console.log(countCharacters("ihaveabigdogandacat"));

function addItemPush(array, n) {
  array[array.length] = n;
  return array;
}
console.log(addItemPush([1, 4, 7, 89, 0, 4], 0));

function addItemUnshift(array, n) {
  arrayLength = array.length;
  for (let i = arrayLength; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = n;
  return array;
}
console.log(addItemUnshift([99,1, 2, 3,99], -81));

function palindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("asdfghhgfdsa"));

function percent (array,n){
  let count = 0;
  let arrayLengthPercent = 100;
  for(let i = 0; i < array.length; i++){
    if(array[i] === n){
      ++count
    }
  }
  return (count * arrayLengthPercent)/array.length
}
console.log(percent([1,2,4,7,4,9,0,4,5,8],4));

function percent (array,n){
let arrayPercent = 100;
return array.reduce((acc,el) => el === n ? acc +1 : acc,0) * arrayPercent/array.length
}
console.log(percent([1,2,4,7,4,9,0,4,5,8],4));

function percent (array,n){
let arraySumPercent = 100;
let arraySum = array.reduce((acc,el) => el + acc,0)
let nSum = array.reduce((acc,el)=> el === n ? acc + el : acc,0)
return (nSum * arraySumPercent)/arraySum
}
 console.log(percent([1,2,4,7,4,9,0,4,5,8],4));
