var game = (function () {
	
	var getNumbers = function(totalGrids) {

		var tempArray = [],
			randomN;

		while(tempArray.length !== totalGrids) {

			var randomN = Math.floor((Math.random() * totalGrids) + 1);

			if(tempArray.indexOf(randomN) === -1){
				tempArray.push(randomN);
			}
		}

		return tempArray;
	};

	var _getChildrenAsArray = function(elem) {
		return Array.prototype.slice.call( elem.children, 0);
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

			if(clickedColumnIndex + 1 < diff) {
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

			if(clickedRowIndex < diff - 1) {

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