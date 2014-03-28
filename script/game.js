var puzzleApp = window.puzzleApp || {};

puzzleApp.game = (function () {
	
	var getNumbers = function(totalCells) {

		var tempArray = [],
			randomN;

		while(tempArray.length !== totalCells) {

			var randomN = Math.floor((Math.random() * totalCells) + 1);

			if(tempArray.indexOf(randomN) === -1){
				tempArray.push(randomN);
			}
		}

		return tempArray;
	};

	var _getChildrenAsArray = function(elem) {

		var arr,
			children = elem.children;

		try {
			arr = Array.prototype.slice.call( children, 0);
		}
		catch(e) {

			var i, length = children.length;
			arr = [];

			for(i = 0; i < children.length; i++) {
				arr.push(children[i]);
			}
		}

		return arr;
		
	};

	var _getPrevBox = function(clickedRowChildren, clickedColumnIndex) {

			if(clickedColumnIndex - 1 >= 0) {
				return clickedRowChildren[clickedColumnIndex - 1];	
			}
			else {
				return null;
			}
			
	};	

	var _getNextBox = function(clickedRowChildren, clickedColumnIndex) {

			if(clickedColumnIndex + 1 < puzzleApp.boardDimension) {
				return clickedRowChildren[clickedColumnIndex + 1];	
			}
			else {
				return null;
			}
			
	};	

	var _getUpperBox = function(rowList,clickedRowIndex,clickedColumnIndex) {

			if(clickedRowIndex > 0) {

				var upperRow = rowList[clickedRowIndex - 1],
					upperRowChildren = _getChildrenAsArray(upperRow);

				return upperRowChildren[clickedColumnIndex];
				
			}
			else {
				return null;
			}
			
	};	

	var _getLowerBox = function(rowList,clickedRowIndex,clickedColumnIndex) {

			if(clickedRowIndex < puzzleApp.boardDimension - 1) {

				var lowerRow = rowList[clickedRowIndex + 1],
					lowerRowChildren = _getChildrenAsArray(lowerRow);

				return lowerRowChildren[clickedColumnIndex];
				
			}
			else {
				return null;
			}
			
	};	

	var _isEmptyCell = function(cell) {

		var isEmptyCell = (cell && cell.id === "empty") ? true : false;
		return isEmptyCell;
	};


	var isMovable = function(clickedBox) {

		var board = document.getElementById("board"),
			rowList =  _getChildrenAsArray(board),
			clickedRow = clickedBox.parentNode,
			clickedRowIndex = rowList.indexOf(clickedRow),
			clickedRowChildren = _getChildrenAsArray(clickedRow), 
			clickedColumnIndex = clickedRowChildren.indexOf(clickedBox);

		var prevBox = _getPrevBox(clickedRowChildren, clickedColumnIndex),
			nextBox = _getNextBox(clickedRowChildren, clickedColumnIndex),
			upperBox = _getUpperBox(rowList,clickedRowIndex,clickedColumnIndex),
			lowerBox = _getLowerBox(rowList,clickedRowIndex,clickedColumnIndex);

		if( _isEmptyCell(prevBox) || _isEmptyCell(nextBox) || _isEmptyCell(upperBox) || _isEmptyCell(lowerBox)) {
			return true;
		}
		else {
			return false;
		}	
	};

	var checkGameEnd = function() {

		var board = document.getElementById("board"),
			cells = board.getElementsByTagName("td"),
			length = cells.length,
			i,cell,gameEnd = true;

		if(!(cells[0].id === "empty" || cells[length - 1].id === "empty")) {
			return;
		}	

		if(cells[0].id === "empty") {
			startIndex = 1;
			endIndex = length - 1;
		}
		else {
			startIndex = 0;
			endIndex = length - 2;
		}

		for(i = startIndex ; i < endIndex; i++) {

			cellValue =  parseInt(cells[i].getAttribute("data-value"),10);
			nextCellValue = parseInt(cells[i+1].getAttribute("data-value"),10);

			if(cellValue > nextCellValue) {
				gameEnd = false;
				break;
			}
		}

		if(gameEnd) {
			alert("You have won the Game");
		}
	};

	

	return {
		getNumbers : getNumbers,
		isMovable : isMovable,
		checkGameEnd : checkGameEnd
	};


})();