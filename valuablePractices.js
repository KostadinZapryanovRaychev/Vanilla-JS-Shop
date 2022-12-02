//Write a JavaScript program to replace the names of multiple object keys with the values provided.

function changeObjectKeyNames(keysMap, obj) {
  const updatedKeysOfObj = Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
  return updatedKeysOfObj;
}
const humanBobo = { name: "Bobo", job: "Programmer", shoeSize: 1000 };

let newKeyNamesForBobo = { name: "firstaName", job: "profession" };

const humanBoboEvolved = changeObjectKeyNames(newKeyNamesForBobo, humanBobo);

//Write a JavaScript program to get every nth element in a given array.

function getEveryNthElement(arr, nth) {
  let result = arr.filter((e, i) => i % nth === nth - 1);
  return result;
}

const bigArrayOfNumbers = [
  1, 2, 3, 45, 3, 5, 2, 6, 3, 123, 54, 23, 54, 23, 83, 28, 19, 93, 56, 17, 22,
  54, 33, 37, 85, 164, 428, -5, 4, 27,
];

//Write a JavaScript program to filter out the non-unique values in an array.

function filterNonUniqueValues(arr) {
  let result = arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
  return result;
}

//Write a JavaScript program to get a random number in the specified range.

function getRandomNumberInRange(min, max) {
  let result = Math.random() * (max - min) + min;
  return result;
}

function getRandomNumberInRange1to0() {
  let result = Math.random() * (1 - 0) + 0;
  return result;
}

//Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

//Write a JavaScript program to create an array of key-value pair arrays from a given object.

function getKeyValuePairsArraysFromObject(obj) {
  let result = Object.keys(obj).map((k) => [k, obj[k]]);
  return result;
}

const collectInto =
  (fn) =>
  (...args) =>
    fn(args);

//Write a JavaScript program to get an object containing the parameters of the current URL.

const get_URL_Parameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

//Write a JavaScript program to check whether all elements in a given array are equal or not.

function allEqual(arr) {
  const result = arr.every((val) => val === arr[0]);
  return result;
}

// Write a JavaScript program to split values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to.
// If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group

const bifurcateBy = (arr, fn) =>
  arr.reduce(
    (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
    [[], []]
  );
console.log(bifurcateBy(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));

// Write a JavaScript program to chain asynchronous functions.
// Note: Loop through an array of functions containing asynchronous events,
// calling next when each asynchronous event has completed.

const chainAsync = (fns) => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};
chainAsync([
  (next) => {
    console.log("0 seconds");
    setTimeout(next, 1000);
  },
  (next) => {
    console.log("1 second");
  },
]);

//Write a JavaScript program to count the occurrences of a value in an array.

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

function areaAndVolumeCalculator(area, vol, input) {
  const data = JSON.parse(input);
  let result = data.map((cube) => {
    let cubeData = {
      area: area.call(cube),
      volume: vol.call(cube),
    };
    return cubeData;
  });
  return result;
}

areaAndVolumeCalculator(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solution(num) {
  function add(newNumber) {
    return Number(num) + Number(newNumber);
  }
  return add;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log("-----");
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

function filterEmployees(input, criteria) {
  let data = JSON.parse(input);
  let [keyCriterium, valueCriterium] = criteria.split("-");
  let result = data.filter((person) => person[keyCriterium] === valueCriterium);
  for (let i = 0; i < result.length; i++) {
    console.log(
      `${i}. ${result[i]["first_name"]} ${result[i]["last_name"]} - ${result[i]["email"]}`
    );
  }
}
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
console.log("-----------------");
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "last_name-Johnson"
);

function cars(input) {
  const data = {};

  const commands = {
    create: (name, inherits, parentName) => {
      data[name] = inherits ? Object.create(data[parentName]) : {};
    },
    set: (name, k, v) => (data[name][k] = v),
    print: (name) => {
      const entries = [];
      for (const key in data[name]) {
        entries.push(`${key}:${data[name][key]}`);
      }
      console.log(entries.join(","));
    },
  };

  input.forEach((x) => {
    const [command, name, k, v] = x.split(" ");
    commands[command](name, k, v);
  });
}

// taq funckqi da mi q obqsni nali ne returnva nishtu

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

function fibonacciNumbers(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2);
}

// Both JSON.stringify and JSON.parse support a second argument.
// replacer and reviver respectively. With replacer and reviver below
// it's possible to add support for native Map object, including deeply nested valu

//JSON stringify of maps
function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

//USAGE

const originalValue = new Map([["a", 1]]);
const str = JSON.stringify(originalValue, replacer);
const newValue = JSON.parse(str, reviver);
console.log(originalValue, newValue);

//Beatifull recursion

function randomUntilFive(result = 0, count = 0) {
  if (result === 5) {
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count++;
  randomUntilFive(result, count);
}

// if we get random number each time how many times it would be needed to reach some number
// in this case 5

function recursiveFunctionToExecuteRecursion(times) {
  if (times < 1) {
    return;
  }
  randomUntilFive();
  recursiveFunctionToExecuteRecursion(times - 1);
  times--;
}

// second recursive function defining how much times we will call the first one

function wrapperAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

function getSum(a, b) {
  return a + b;
}

// kuv e smisala na funkciq da vrushta definiciq na druga funkciq kato return value
