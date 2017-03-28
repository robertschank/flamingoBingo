console.log("game time");

//square constructor
function Square() {
	this.marked = false;
	this.value = value;
}

//Player Constructor
function Player(name){
	this.name = name;
	this.score = null;
}

// instantiate players and game
player1 = new Player("Player 1");
player2 = new Player("Player 2");

//game constructor
function Game() {
	this.currentPlayer = "player1";
	this.winner;
	this.over = false;
	this.switchPlayer = false;
	this.currentStrokes = 0;
}

let game = new Game();

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
	// create checker pattern
	if (i%2 === 0) {squares[i].style.backgroundColor = "#dbeeff";}
	else {squares[i].style.backgroundColor = "#c9e5ff"; }
}
// set free space
squares[12].textContent = "Free!";

// create a random array for "calling" the balls
let ballOrder = randomArray(1,75);
console.log(ballOrder);

let gridWidth = 5;
// set counters, account for free space
let rowCount = [0,0,1,0,0];
let colCount = [0,0,1,0,0];
let backslash = 1;
let forwardslash = 1;

squares.forEach(function(square) {
	square.addEventListener("click", function() {
		//if (square.textContent === document.getElementById("current-ball").textContent) {
			console.log(square);
			let indy = square.dataset.index;
			console.log("indy" + indy);
			square.style.backgroundColor = "white";

			let markedCol = indy%gridWidth;
			colCount[markedCol]++;
			if (colCount[markedCol] >= gridWidth) {game.switchPlayer = true;}

			let markedRow = Math.floor(indy/gridWidth);
			rowCount[markedRow]++;
			if (rowCount[markedRow] >= gridWidth) {
				game.switchPlayer = true;
			}
			let x = (colCount - gridWidth);
			console.log("subtraction: " + x);
			console.log(gridWidth);
			console.log(colCount);
			console.log('rowCount: ' + rowCount);
			console.log('colCount: ' + colCount);
			if (indy%(gridWidth+1) === 0) { backslash++; }
			if (backslash >= gridWidth) {game.switchPlayer = true;}
			if (indy == 4 || indy == 8 || indy == 16 || indy == 20) { forwardslash++; }
			if (forwardslash >= gridWidth) {game.switchPlayer = true;}
			console.log("forwardslash: " + forwardslash);
			console.log("backslash: " + backslash);

			if (game.switchPlayer) {
				alert('nice job ' + game.currentPlayer + '!');
				game.currentPlayer.score = game.currentPlayer.strokeCount;
				document.getElementById(game.currentPlayer + "Strokes").textContent = game.currentStrokes;
				console.log(game.currentPlayer.name + ' score ' + game.currentPlayer.score);
			}

		//}
	});
});

let ballNumber = -1;
function nextBall() {
	game.currentStrokes++;
	ballNumber++; //for first ball, sets ballNumber to 0, increments by one every time after
	let currentBall = document.getElementById("current-ball");
	currentBall.textContent = ballOrder[ballNumber];
	if (ballNumber >= 74) {ballNumber = -1;}

}

function startCounter() {

	nextBall(); // call once to start immediately, then through setInterval()
	setInterval(function() {
		console.log('Hey! Hey!');
		nextBall();
	}, 2300);

}
startCounter();







