// All things that i've learned im practicing it in here

// console.log(123);

// document.write(123);

// let a = 1;

// const b = 2;

// var c = 3;

// prompt("hey there!") + prompt("hey there!");

// a++;

// ++a;

// a--;

// --a;

// 1 + 1;

// 1 - 1;

// 2 * 2;

// 2 ** 2;

// 2 / 2;

// 2 % 2;

// 2 > 1;

// 1 < 2;

// 11 >= 11;

// 11 <= 11;

// 11 == 11;

// 11 === 11;

// 11 !== 11;

// true

// false

// confirm();

// if

// else

// else if

// ||

// &&

// typeof

// Arrays

// array.length

// array.includes()

// array.indexOf()

// array.pop()

// array.push()

// array.shift()

// array.unshift()

// array.splice()

// .concat

// .reverse()

// .join("")

// .slice()

// .toLowerCase()

// .toUpperCase()

// .split("")

// .sort

// for ( starting point,end point,changes) {   }

// document.querySelectorAll

// .className

// .src

// .value

// document.querySelector

// .innerHTML

// .href

// function

// .replace

// charAt

// /value/g

// Math.round

// Math.ceil

// Math.floor

// months.toSorted()

// months.toReversed()

// Math.max

// Math.min

// [...num1, ...num2];

// Math.random

// Math.random() * 6

// parseInt()

// parseFloat()

// isNaN

// .toString()

// .toFixed

// Number

// \n

// new Date()

// .getDay()

// .getMonth

// .getDate()

// .getFullYear()

// .getMilliseconds()


// .getTime()

// / 1000 / 60 / 60 / 24 / 365)

// .setDate(4)

// .setFullYear(2024)

// arguments

// return

// ``

// ${}

// object

// .warn

// .error

// hosting and hoisting

// undefined and not-defined

// primitive and reference

// .appendChild(newElement); //append in last

// .insertBefore(newElement, target); //insert before target elment

// .setAttribute(attrName, attrValue) // set attribute to element node

// .removeChild(target) // remove element node from parent node

// DOM

// finding children

// junk artifact / text / spaces and linebreak

// document.getElementsByTagName()   hamesha array lata he

// document.getElementsByClassName() hamesha array lata he

// document.getElementById()         hamesha element lata he

// document.querySelectorAll()       hamesha array lata he

// document.querySelector()          hamesha matching ka pehle element lata he

// console.log(document.childNodes[1].childNodes[2].parentNode.childNodes[0].childNodes[5].innerHTML);

// .childNodes[0]

// .parentNode

// object

// element

// array / nodelist / collection list

// document.previousSibling.previousSibling

// document.nextSibling.nextSibling

// document.firstChild

// document.lastChild

// document.nodeType returns 1  and 3

// document.nodeName returns tag name in capital

// let h1 =  document.querySelectorAll("h1")

// console.log(h1[0].id);

// let h1 =  document.querySelector("h1");

// turnery operator

// condition ? ifblock : elseblock

// functions key value pair

// switch statement 

// onmouseover=""

// onmouseout=""

// onblur="fillProvince()"

// onclick="divertUser(`https://www.google.com`)"

// href="JavaScript:void(0)"

// document.querySelectorAll();

// document.querySelector();

// document.getElementsByTagName();

// document.getElementsByClassName();

// document.getElementById();

// document.childNodes;

// document.parentNode;

// document.nextSibling;

// document.previousSibling;

// document.firstChild;

// document.lastChild;

// document.nodeType // 1 or 3

// document.nodeName // element name in upper case

/*
.appendChild(newElement); //append in last

.insertBefore(newElement, target); //insert before target elment

.setAttribute(attrName, attrValue) // set attribute to element node

.removeChild(target) // remove element node from parent node
*/

// let target = divEl.firstChild.nextSibling;
// divEl.removeChild(target);
// divEl.appendChild(h1El);


// let h1El = document.createElement("H1");

// let allKeys = Object.keys(human);

// let allValues = Object.values(human);


// let currentURL = location;

// console.log(currentURL.pathname);

// let allValues = Object.values(student1);

// console.log(allValues.includes("Haider"));

// stack

// heap

// Mutable & Immutable

// primitive types are IMMUTABLE

// string, number, boolean, undefined, null, bigint, symbol

// non primitive types are MUTABLE

// object, array, function

// copy values

// let user2 = Object.assign({}, user1);

// let favFruits = [...fruits];
 
// Promise

// let treat = new Promise(function (resolve, reject) {
//     let isNotesAvail = confirm('have you produced english notes');
//     if (isNotesAvail) {
//         let foodWish = prompt('what do you want to eat?');
//         resolve(foodWish);
//     }
//     else {
//         reject("ainda bat ni krna");
//     }
// });

// treat
//     .then(function (foodItem) {
//         console.log(`You are my true friend, ${foodItem} is due on me.`);
//     })
//     .catch(function (e) {
//         console.log('you are not my true friend.', e);
//     });

// const { userName: name, fathersName, rollNum, ...remainingProp } = student;

// let fruits = ['Apple', 'Banana', "Watermelon", 'Oranges', 'Mango'];

// const [fruit1, , , fruit2] = fruits;

// const [fruit1, , fruit2, , fruit3] = fruits;

// const [, , , , kingFruit] = fruits;

/*
arrow function

()=>{};

()=> "happy birthday";

const sum = (num1, num2) => `sum of ${num1} and ${num2} is ${num1 + num2}`;

userName => `Welcome ${userName}!`;

*/

// .forEach()

// .map()

// .filter()

// .includes()

// .reduce();

// .some()

// .every()

// "every" and "some" method returns bolean  

// "every" check  all 

// "some" check only one

// reduce method returns  

// function in object is called method

// arrow function dont have "this" keyword

// map is just like foreach but it always retuns a value and makes new array from existing array .

// this 

// destructuring of object

// rest operator

// spread operator

// destructuring of array

// arrow functions and dont have this keyword

// this is used for callback

// also you can name it

// arrow agar aik line ka hai or kuch return bi ho raha he to is tarh likhenge .this is called implicit return

// const greet = () => prompt("hello");

// agar aik parameter ho to is tarha function banate heen or return bhi karana ho to

// const makeGreeting = userName => `Welcome ${userName}`

// forEach loop this is only for array

// for In loop this is for object

// do while loop jab kam az kam aik bar chalana ho

//  imediately invoked function rxpression (IIFE)

// global scope ke pollutoion ko hatane keliyen use hota he aur forna baad call karne ke liyen

// khatam hone ke baad semicolon ";" zaroor lagana he end karne ke liyen

// named IIFE\
// (function code() {
//     console.log("hello");
// })();

// with arrow function 
// ((name) => {
//     console.log("hello " + name);
// })("uzair");

// arguments

// parameters

// try catch 

// callback hell

// async await

// how to use catch in async await

// fetch

// local storage

// localStorage.clear

// localStorage.key

// localStorage.getItem

// localStorage.setItem

// localStorage.removeItem

// localStorage.length

// Promise.all

// Promise.race

// promise chain

// JSON.parse()

// JSON.stringify()

// event loop 
// mainstack sidestack ke darmiyan ki baat cheet event loop karta he

// synchronous
// asynchronous

// synchronous code goes to mainstack 
// asynchronous code goes to sidestack and when mainstack will be empty then sidestack's code goes to main stack

// single threading and multi threading
