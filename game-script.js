console.log("game time");

// grab each square in the table
var squares = document.querySelectorAll("td");
console.log(squares);

// assign each square a random number between 1 and 75, no repeats



// for each integer either push() to the end of the array,
// or unshift() to the front, depending on a random number generator.

let sortedArray = [];
for (let i = 1; i < 76; i++) {
	sortedArray.push(i);
}
console.log(sortedArray);
let randomArray = [];
for (let i = 1; i < 76; i++) {

	let randomIndex = Math.floor(Math.random()*(sortedArray.length-1));

// return Math.floor(Math.random() * (max - min)) + min;

	console.log("randomIndex" + randomIndex);
	let random = sortedArray[randomIndex];
	sortedArray.splice(randomIndex, 1);
	randomArray.push(random);

}

console.log(randomArray);