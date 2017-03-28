console.log("game time");

//square constructor
function Square() {
	this.marked = false;
	this.value = value;
}
// grab each square in the table
var squares = document.querySelectorAll("td");

//create random array of ints from min to max
function randomArray(min, max) { 

	// create sortedArray between min and max
	let sortedArray = [];
	for (let i = min; i < (max + 1); i++) {
		sortedArray.push(i);
	}

	let randomArray = [];
	for (let i = 1; i < 76; i++) {
		// pick an integer from sortedArray at a random index,
		let randomIndex = Math.floor(Math.random()*(sortedArray.length));
		let random = sortedArray[randomIndex];

		// remove the element so there are no repeats
		sortedArray.splice(randomIndex, 1);

		// add random int to randomArray
		randomArray.push(random);
	}
	return randomArray;
}

let squareValues = randomArray(1,75);

console.log(squareValues);
// Assign each square their random value
for (let i = 0; i < 25; i++) {
	squares[i].textContent = squareValues[i];
	// assign each square an index
	squares[i].dataset.index = i;
}

// create a random array for "calling" the balls
let ballOrder = randomArray(1,75);
console.log(ballOrder);

function callBall() {
	document.getElementById("current-ball").textContent = ballOrder[0];

}
callBall();

let rowCount = [0,0,0,0];
let colCount = [0,0,0,0];

squares.forEach(function(square) {
	square.addEventListener("click", function() {
		//if (square.textContent === document.getElementById("current-ball").textContent) {
			console.log(square);
			let indy = square.dataset.index;
			console.log(indy);
			square.style.backgroundColor = "black";
			rowCount[indy%5]++;
			colCount[Math.floor(ind/5)];
			console.log('rowCount: ' + rowCount);
			console.log('colCount: ' + colCount);

		//}
	});
});

let ind = 20;
console.log(ind%5);
console.log();



