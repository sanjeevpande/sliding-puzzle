var puzzleApp = window.puzzleApp || {};

"use strict";

(function() {

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

		var app = puzzleApp,
			difficultyLevel = getDifficultyLevel(),
			boardDimension = difficultyLevel;

		app.boardDimension = boardDimension;

		if(difficultyLevel) {
			totalCells = boardDimension * boardDimension;
			app.board.makeBoard(boardDimension);
			var numbers = app.game.getNumbers(totalCells);
			app.board.placeNumbers(numbers);	
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

		var app = puzzleApp,
			clickedCell = target;

		if(target.id === "empty") {
			return;
		}

		var isMovable = app.game.isMovable(clickedCell);

		if(isMovable) {
			app.board.moveCells(clickedCell);
			app.game.checkGameEnd();
		} 
		else {
			app.board.onMovableFalse(clickedCell);
		}
	}

	var newGameButton = document.getElementById("newGame");
	EventUtil.addHandler(newGameButton,"click",startNewGame);

	function startNewGame() {

		var board = document.getElementById("board");
		while(board.childNodes[0]) {
			board.removeChild(board.childNodes[0]);
		}
		puzzleApp.board.showIndex();
	}

})();


