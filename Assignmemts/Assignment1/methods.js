// String methods
let myString = "  Hello, JavaScript World!  ";
console.log("Original String:", `"${myString}"`);

let trimmedString = myString.trim();
console.log("Trimmed String:", `"${trimmedString}"`);
console.log("Length:", trimmedString.length);

let upperCaseString = trimmedString.toUpperCase();
console.log("Uppercase:", `"${upperCaseString}"`);

let lowerCaseString = trimmedString.toLowerCase();
console.log("Lowercase:", `"${lowerCaseString}"`);

let indexOfJS = trimmedString.indexOf("JavaScript");
console.log("Index of 'JavaScript':", indexOfJS);

console.log("Includes 'World':", trimmedString.includes("World"));

let sliceExample = trimmedString.slice(0, 5);
console.log("Slice (0, 5):", `"${sliceExample}"`);

let substringExample = trimmedString.substring(7, 17);
console.log("Substring (7, 17):", `"${substringExample}"`);

let replacedString = trimmedString.replace("Hello", "Hi");
console.log("Replaced 'Hello' with 'Hi':", `"${replacedString}"`);

let splitString = trimmedString.split(" ");
console.log("Split by space:", splitString);

let repeatedString = "JS".repeat(3);
console.log("Repeated 'JS' 3 times:", `"${repeatedString}"`);

let paddedString = "5".padStart(3, "0");
console.log("PadStart example ('5' -> '005'):", `"${paddedString}"`);

console.log("Character at index 1:", `"${trimmedString.charAt(1)}"`);

let charArray = trimmedString.split("");
console.log("Split into individual characters:", charArray);

console.log("\n");

// Array methods
let myArray = [10, 20, 30, 40, 50];
console.log("Original Array:", myArray);
console.log("Array length:", myArray.length);

myArray.push(60);
console.log("After push(60):", myArray);

let poppedElement = myArray.pop();
console.log("After pop():", myArray, "| Popped Element:", poppedElement);

let shiftedElement = myArray.shift();
console.log("After shift():", myArray, "| Shifted Element:", shiftedElement);

myArray.unshift(5);
console.log("After unshift(5):", myArray);

let slicedArray = myArray.slice(1, 3);
console.log("Slice (1, 3):", slicedArray, "| Original Array:", myArray);

myArray.splice(2, 1, 25);
console.log("After splice(2,1,25):", myArray);

let indexOf25 = myArray.indexOf(25);
console.log("Index of 25:", indexOf25);

console.log("Includes 50:", myArray.includes(50));

let reversedArray = myArray.slice().reverse();
console.log("Reversed (copy):", reversedArray);

let sortedArray = myArray.slice().sort((a, b) => a - b);
console.log("Sorted (ascending):", sortedArray);

let mappedArray = myArray.map(num => num * 2);
console.log("Mapped (num * 2):", mappedArray);

let filteredArray = myArray.filter(num => num > 10);
console.log("Filtered (num > 10):", filteredArray);

let sumOfElements = myArray.reduce((acc, current) => acc + current, 0);
console.log("Reduced sum:", sumOfElements);

console.log("forEach example:");
myArray.forEach((element, index) => {
  console.log(`Index ${index} => ${element}`);
});

let anotherArray = [70, 80];
let concatenatedArray = myArray.concat(anotherArray);
console.log("Concatenated array:", concatenatedArray);

let joinedString = myArray.join(" - ");
console.log("Joined array:", joinedString);



// 
