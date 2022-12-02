
function printHelloWorld(arr) {
    console.log(`Hello World ${arr} !`);
}

for (let i = 0; i < 15; i++) {
    printHelloWorld(i);
}

const someRandomNumbers = [1, 2, 3, 4, 5, 6];

//Classical way
let classicalSumLoop = 0;
let forEachSumLoop = 0;

// Running the for loop
for (let i = 0; i < someRandomNumbers.length; i++) {
    classicalSumLoop += someRandomNumbers[i];
}

someRandomNumbers.forEach(individualArrayNumber => {
    forEachSumLoop += individualArrayNumber;
});

console.log(classicalSumLoop);

console.log(forEachSumLoop);

const sum = someRandomNumbers.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);

let sumWithLoop = 0;

for (let i = 0; i < someRandomNumbers.length; i++, sumWithLoop += i);
console.log(sumWithLoop);

function sumWithRecursion(arr) {
    return (arr.length === 0) ? 0 : arr[0] + sumWithRecursion(arr.slice(1));
}

const result = sumWithRecursion(someRandomNumbers);

console.log(result);

//The most elegant way

const getSum = arr => (arr.length === 1) ? arr[0] : arr.pop() + getSum(arr);
let theMostElegantSumResult = getSum(someRandomNumbers);
console.log(theMostElegantSumResult);

//https://theporkskewer.medium.com/recursive-function-calls-inside-a-javascript-for-loop-and-how-that-works-for-a-rock-paper-scissors-27a3b25f1ba6

const rockPaperScissors = function (rounds) {
    let outcomes = [];
    let plays = ["rock", "paper", "scissors"];
    let playedSoFar = [];
    // combos is the recursive function 
    const combos = function (roundsToGo) {
        if (roundsToGo === 0) {
            outcomes.push(playedSoFar.slice());
            return;
        }

        for (let i = 0; i < plays.length; i++) { playedSoFar.push(plays[i]); combos(roundsToGo - 1); playedSoFar.pop(); }
    };

    combos(rounds);
    return outcomes;
};


function getBackSeveralElements() {
    let koceto = "Koceto";
    let raychev = "Raychev";
    let age = 18;
    let humanKoceto = {};
    humanKoceto.firstName = koceto;
    humanKoceto.lastName = raychev;
    humanKoceto.age = age;
    return humanKoceto;
}

let resultFromFnHumanKoceto = getBackSeveralElements();


//IZVRATENA REKURSIQ

function a1() {
    b1();
}
function b1() {
    a1();
};

// a1();

let argumentOfFun1 = "We Don't Believe in humans";

function fun1() {
    let result;

    weBelieve = "But we believe";
    result = fun2() + weBelieve;
    return result;
}

function fun2() {

    let andThereIsWHy = "YOu will see that there is some sense";
    let lookingForMeaning;
    lookingForMeaning = fun3() + andThereIsWHy;
    return lookingForMeaning;
}
function fun3() {
    let butWeWill;
    // let whyWebelieve = fun4();
    let weWillFindWHy = "We will definitely find out why!"
    butWeWill = weWillFindWHy + fun4();
    return butWeWill;
}
function fun4() {
    let whyWebelieve = "We are not sure but why we believe";
    return whyWebelieve;
}


// recursion is evertwhere
//json parse
// json stringyfy
// getElementById()

//the callstack is the datastructure responsible for functions invokation


if (false) {} //false
if (null) {} //false
if (undefined) {} //false
if (0) {} //false
if (NaN) {} //false
if ('') {} //false
if ("") {} //false


//Truthy
if (true) {} //true
if ({}) {} //true
if ([]) {} //true
if (42) {} //true
if ("foo") {} //true
if (new Date()) {} //true
if (-42) {} //true
if (3.14) {} //true
if (-3.14) {} //true
if (Infinity) {} //true
if (-Infinity) {} //true
