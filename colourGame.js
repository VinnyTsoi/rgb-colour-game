var numberOfSquares = 6;
var colors = createColorsArray(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[getRandomInt(0, (numberOfSquares - 1))];
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');


//click listener added to easy button
easyBtn.addEventListener('click',function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numberOfSquares = 3;
	colors = createColorsArray(numberOfSquares);
	pickedColor = colors[getRandomInt(0, (numberOfSquares - 1))];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = 'steelblue';
	
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

//click listener added to hard button
hardBtn.addEventListener('click',function(){
	numberOfSquares = 6;
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	colors = createColorsArray(numberOfSquares);
	pickedColor = colors[getRandomInt(0, (numberOfSquares - 1))];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = 'steelblue';
	
	for(var i = 0; i < squares.length; i++){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;

//loop through the squares
for (var i = 0; i < squares.length; i++) {
	//add initial colours to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare colour to pickedColor
		if (clickedColor === pickedColor){
			message.textContent = 'Correct!';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "PLAY AGAIN?"

		} else {
			this.style.background = 'steelblue';
			message.textContent = 'Try Again!';


		}
	});
}


reset.addEventListener('click', function(){
	//Generate new colors
	colors = createColorsArray(numberOfSquares);
	//pick a new random color
	pickedColor = colors[getRandomInt(0, (numberOfSquares - 1))];
	//show new rgb color details
	colorDisplay.textContent = pickedColor;
	//reset background color
	h1.style.background = 'steelblue';
	//reset button text
	reset.textContent = "NEW COLOURS"

	for (var i = 0; i < squares.length; i++) {
	//add initial colours to squares
	squares[i].style.backgroundColor = colors[i];
	} 
});


function changeColors(color){
	for (var  i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createColorsArray(num){
	colorsArray = [];
	for(var i = 0; i < num; i++){
		colorsArray.push(createColor());
	}
	return colorsArray;
}

function createColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}