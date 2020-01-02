/* eslint-disable no-console */
'use strict';

function stringReturns(words) {
  return words;
}

console.log(stringReturns('hello'));

// create a function that takes a number argument
// and returns that value plus 5.
// print the result to the console.

function addFive(num) {
  return num + 5;
}

console.log(addFive(3));

// loop through an array and print the index and the value
// to the console
function arrayLooper() {
  const myArray = ['apple', 'orange', 'cat'];

  for(let i=0; i < myArray.length; i++) {
    console.log(`Index: ${i} Value: ${myArray[i]}`);
  }
}

arrayLooper();

// Create a javascript object and access a value in the object 

const myObj = {
  name: 'The Object',
  age: 22,
  hair: 'Perfect'
}

console.log(myObj.hair);

// Loop through a javascript object and print the key and value to the console

function objectLooper(anything) {
  const objectSize = Object.keys(anything);
  for(let i=0; i < objectSize; i++) {
    console.log(`Key: ${objectSize} Value: ${objectSize[i]}`)
  }
}

objectLooper(myObj);

// OR

Object.keys(myObj).forEach(key => console.log(`${key}: ${myObj[key]}`));

// Write a function that accepts a "searchName" argument. Loop through an array of Objects
// and return the object that matches against the "name" key

const myData = [
  {
    name: 'Tom',
    age: 22,
    favoriteFood: 'pizza'
  },
  {
    name: 'Jane',
    age: 42,
    favoriteFood: 'sushi'
  },
  {
    name: 'Fred',
    age: 34,
    favoriteFood: 'lettuce'
  }
];

function findByName(searchName) {
  for(let i = 0; i < myData.length; i++) {
    if(searchName === myData[i].name) {
      return myData[i];
    }
  }
}

const person = findByName('Fred');
console.log(person);

// declare a function named "amountPassed" that accepts an array of test scores
// as an argument. The function should return the amount of test scores that
// are 80 or higher (<=)

function amountPassed(tests) {
  // iterate through array of test scores
  // have "total" variable to keep track of scores that pass
  // return "total"
  let totals = 0;

  for(let i=0; i < tests.length; i++) {
    if(tests[i] <= 80) {
      totals++; // can use totals += 1 or totals++
    }
  }
  return totals;
}

const testScores = [84, 82, 88, 0, 90, 24, 55, 77, 99, 100, 4, 32, 0, 0, 22];

const passed = amountPassed(testScores);
console.log('Tests that passed: ' + passed);

function holdMyError(item) {
  try {
    // This will raise an error because nonExistent
    // variable is undefined
    nonExistent += 'foo';
  }
  catch(e) {
    // this block runs if the try block fails
    // 'e' is an object representing the error
    console.log('Something went horribly wrong!');
    console.dir(e);
  }
  finally {
    // The finally block will always run afterwards 
    // and is entirely optional
    console.log('This happens in both success and failure cases.');
  }
}

// make a function called makeOrder. It should take a table number,
// an array of order items, and an order status as arguments. 
// It should return an object with keys: tableNumbers, order, and status
// and their associated values.

function makeOrder(table, items, orderStatus) {
  const foodOrder = {};

  // Objects can be address using dot notation: foodOrder.order = whatever;
  // Or with bracket notation: foodOrder['order'] = whatever. 
  // bracket notation is normally used when you have a property name with a space
  // such as 'table numbers'.
  foodOrder.tableNumbers = table;
  foodOrder.order = items;
  foodOrder.status = orderStatus;

  return foodOrder;
}

const foodOutput = makeOrder(2, ['Pizza', 'Coke', 'Hot dog'], 'Complete');
console.log(foodOutput);

// write a function called enrollInSummerSchool that takes a 
// single argument "students". Students is an array of objects
// with each object representing a student. 
// enrollInSummerSchool should return an array of objects. 
// For each object from the original array, it should return
// the original name and course, but it should update the
// status to "In Summer School".

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer School');

  return students;
}

// write a function called findByID. This function takes 2 arguments
// "items" and "idNum". items is an array of objects. idNum is 
// the id we're trying to find in items. The function should
// look for an item with the id 'idNum' in the array items.
// If found, it should RETURN that item.

const data = [
  {id: 1,
    foo: 'bar'},
  {id: 2,
    foo: 'bizz'},
  {id: 3,
    foo: 'buzz'},
  {id: 4,
    foo: 'bang'},
];

function findById(items, idNum) {
  for(let i = 0; i < items.length; i++) {
    if(items[i].id === idNum) {
      return items[i];
    }
  }
}

const output3 = findById(data, 3);
console.log(output3);