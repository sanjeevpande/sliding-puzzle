var puzzleApp = window.puzzleApp || {};

puzzleApp.board = (function() {

	var makeBoard = function(dimension) {

		var	i,j,row,col,fragment;

		fragment = document.createDocumentFragment();	

		for(i = 0; i < dimension; i++) {

			row = document.createElement("tr");

			for(j = 0; j < dimension; j++) {
				col = document.createElement("td");
				row.appendChild(col);
			}

			fragment.appendChild(row);

		}

		this.showBoard();
		var board = document.getElementById("board");
		board.appendChild(fragment);

	};

	var placeNumbers = function(numbers) {

		var tempArray = [],
			board = document.getElementById("board"),
			length = numbers.length,
			rowNum,
			tdElements = board.getElementsByTagName('td');

		
		var cell,number;

		for(var i = 0; i < length; i++){

			number = numbers[i];
			cell = tdElements[i];
			cell.className = "cell";

			if(numbers[i] === length) {
				cell.id = "empty";
				continue;
			}

			cell.innerHTML = number;
			cell.setAttribute("data-value",number);
			
		};

	};

	var moveCells = function(clickedCell) {

		var emptyCell = document.getElementById("empty"),
			number = clickedCell.getAttribute("data-value");

		emptyCell.innerHTML = number;
		emptyCell.setAttribute("data-value",number);
		emptyCell.id = "";

		clickedCell.id = "empty";
		clickedCell.innerHTML = "";

	};

	var showBoard = function() {
		document.getElementById("index").className = "hide";
		document.getElementById("header").className = "hide";
		document.getElementById("boardDiv").className = "";	
	};

	var showIndex = function() {

		document.getElementById("boardDiv").className = "hide";
		document.getElementById("index").className = "";	
		document.getElementById("header").className = "";
	};

	var onMovableFalse = function(clickedCell) {

		var presentClasses = clickedCell.className;
		if(!(presentClasses.indexOf("animate") >= 0)) {
			clickedCell.className =presentClasses + " animate";
			setTimeout(function(){
				clickedCell.className = presentClasses;
			}, 150);	
		}
	};

	return {
		makeBoard : makeBoard,
		placeNumbers : placeNumbers,
		moveCells : moveCells,
		showBoard : showBoard,
		showIndex :showIndex,
		onMovableFalse : onMovableFalse
	};

})();