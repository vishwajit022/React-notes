//Before we could proceed further we need to grab up some topics

//array objects
//destructuing objects
//import and export
//map filter reduce
//arrow function
//spread operator

//#ARRAY

//in other languages
//the array stores only those elements which are of same type
//[1,2,3,4]

//in JS
//the array can store different elements which are of different types
var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop();
//arr [1,2,3]
//arr2 [1,2,3]
//Here both of the values becomes 123
//it gets passed as a reference so it
//if we made any changes in arr2 it will be
//reflected in arr as well

//We can copy that data to another array using destructuring

var state = [1, 2, 3, 4];
var copy = [...state];
//These dot dot represents spread operator
copy.pop();

//# OBJECTS

var obj = { name: "Vishu", age: 23 };
obj.name = "Vishwajit";
//This method can be used in JS however react won't entertain it

var obj1 = {
  name: "Vishu",
  age: 23,
};
var copy = { ...obj1 };
copy.name = "VIshwajit";
obj1 = copy;
//This what we would need to do in React

//#DESTRUCTURING ( Kheech ke nikal )

var obj2 = { name: "Vishu", age: 24, email: "lallalala@gmail.com" };
//alternative to obj.name we could pull out that particular information using destructuring
const { email } = obj;
const { age } = obj;
//we used curly braces here because it is an object
var obj3 = {
  name: "Vish",
  age: 23,
  social: {
    facebook: {
      first: "hehehe",
      second: "hihihi",
    },
  },
};
// So imagine if I had to access first so everytime
//I had to access it I would need to go with this
obj3.social.facebook.first;
//How about we could make it easier to access
const { second } = obj3.social.facebook;

var arr3 = [12, function () {}, 13];
let [fi, sec] = arr3;
//Here we used [] because it is an array
let [chacha, , halua] = arr3;
//Here it will skip second one and extract third directly

//#IMPORT EXPORT
//import to add a component inside the component
//export to export a component

//#FAT ARROW FUNCTION

const abcd = () => {
  console.log("abcd");
};
abcd();
const abcd2 = (va) => {
  console.log(va);
};
abcd2(2);
//fat arrow with implicit return
const abcd3 = () => 20;
console.log(abcd3());
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const abcd4 = () => {
  name: "Vishwajit";
};

console.log(abcd4());
//It wil return undefined as it doesn't consider it as an object but a body
const abcd5 = () => ({
  name: "Vishwajit",
  age: 34,
});
//Now it will consider it an object as we have enclosed it with round bracket
console.log(abcd5());

//#MAP #FILTER #REDUCE
//All of them work on array and return an array

//Map:- Harr elem pe kuch perform karke new array mein rakho

var arr4 = [1, 2, 3, 4];
const ans1 = arr4.map((val) => {
  return val * 2;
});
const ans = arr4.map((val) => val * 2);
const numbers = [1, 2, 3, 4, 5];
var state2 = [2, 3, 4, 5];
const v = state2.map((val) => val + 1);
const num = [10, 2, 30, 1, 34];
const ans2 = num.map((v) => (v > 5 ? v * 2 : v));
// [20, 2, 60, 1, 68]
//This is a ternary oeprator condition ? true : false

//Filter:- Jaisa ki naam khud bolta hai ye filter out karega

var num2 = [1, 2, 3, 45, 62, 41, 435, 6646];
var ans4 = num2.filter((e) => true);
//This will copy the exact array
var ans5 = num2.filter((e) => e > 100);
//(2) [435, 6646]

var person = [
  { name: "VIshwajit", sex: "male" },
  { name: "Samiksha", sex: "female" },
  { name: "Diksha", sex: "female" },
];
var ans6 = person.filter((e) => e.sex === "female");

// Calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
//reduce method is used to reduce an array to a single value.
//It iterates over the array, applying a callback function
// to each element and accumulating the result.

console.log(sum); // Output: 15
