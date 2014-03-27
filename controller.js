var diff,
	totalGrids;

EventUtil.addHandler(window,"load",init);

function init () {

	var startButton = document.getElementById("start");
	EventUtil.addHandler(startButton,"click",startGame);
}

var board = document.getElementById("board");

EventUtil.addHandler(board,"click",function(event) {

		var target = EventUtil.getTarget(event);

		if(target.tagName.toUpperCase() === "TD") {
			processGridClick(target);
		}

});

function startGame() {

	diff = getDifficultyLevel();

	if(diff) {
		totalGrids = diff * diff;
		board.makeBoard(diff);
		var numbers = game.getNumbers(totalGrids);
		board.placeNumbers(numbers);	
	}
	
}

function getDifficultyLevel() {

	var elements = document.getElementsByName("difficulty"),
		length = elements.length,
		difficultyLevel = null;

	for (var i=0; i < length; i++) {
            if (elements[i].checked) {
            	difficultyLevel = parseInt(elements[i].value,10);
            }
    }

    return difficultyLevel;

}


function processGridClick(target) {

	var clickedBox = target;

	if(target.id === "empty") {
		return;
	}

	var isMovable = game.isMovable(clickedBox);

	if(isMovable) {
		board.moveCells(clickedBox);
		game.checkGameEnd();
	} 
	else{
		board.onMovableFalse(clickedBox);
	}
}



