var board = (function() {

	var makeBoard = function(dimension) {

		var totalGrids = dimension * dimension,
			i,j,row,col,fragment;

		document.getElementById("index").className = "hide";
		document.getElementById("boardDiv").className = "";	

		fragment = document.createDocumentFragment();	

		for(i = 0;i<dimension;i++) {

			row = document.createElement("tr");

			for(j = 0;j<dimension;j++) {
				col = document.createElement("td");
				row.appendChild(col);
			}

			fragment.appendChild(row);

		}

		var board = document.getElementById("board");
		board.innerHTML = "";
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

	var onMovableFalse = function(clickedCell) {

		var presentClasses = clickedCell.className;
		clickedCell.className += " animate";
		setTimeout(function(){
			clickedCell.className = presentClasses;
		}, 150);

	};

	return {
		makeBoard : makeBoard,
		placeNumbers : placeNumbers,
		moveCells : moveCells,
		onMovableFalse : onMovableFalse
	};

})();