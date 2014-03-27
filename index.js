var tempArray = [],
	tdElements = document.getElementsByTagName('td');

while(tempArray.length !== 9){

	var randomN = Math.floor((Math.random()*9)+1),
		element;

	if(tempArray.indexOf(randomN) === -1){
		tempArray.push(randomN);
	}


}

var tempObj;

for(var i = 0; i < tdElements.length; i++){

	var s = document.createElement('span');
	s.className = tempArray[i];
	s.innerHTML = tempArray[i]
	if(tempArray[i] === 9){
		tdElements[i].addEventListener('click', clickHandler, false);
		tdElements[i].id = "empty";
		continue;
	}
	tdElements[i].appendChild(s);
	tdElements[i].addEventListener('click', clickHandler, false);
}

function clickHandler(){
	
	var clickedBox = this;
	
	if(!clickedBox.childNodes[0]){
		return;
	}

	var rowList = Array.prototype.slice.call( clickedBox.parentNode.parentNode.children, 0 ),
		indexOfClickedRow = rowList.indexOf(clickedBox.parentNode);

		var clickedBoxList = Array.prototype.slice.call( rowList[indexOfClickedRow].children, 0);

		if(rowList[indexOfClickedRow - 1]){
			var upperBoxList = Array.prototype.slice.call( rowList[indexOfClickedRow - 1].children, 0);
		}
		
		if(rowList[indexOfClickedRow + 1]){
			var lowerBoxList = Array.prototype.slice.call( rowList[indexOfClickedRow + 1].children, 0);
		}

		
		var indexOfClickedBox = clickedBoxList.indexOf(clickedBox),
			prevBox = clickedBoxList[indexOfClickedBox - 1],
			nextBox = clickedBoxList[indexOfClickedBox + 1];

			if(upperBoxList){
				upperBox = upperBoxList[indexOfClickedBox];
			}
			if(lowerBoxList){
				lowerBox = lowerBoxList[indexOfClickedBox];
			}
		

	if((prevBox && prevBox.id === "empty") || (nextBox && nextBox.id === "empty") || (upperBox && upperBox.id === "empty") || (lowerBox && lowerBox.id === "empty")){
		var number = clickedBox.childNodes[0].innerHTML;
		var emptyBox = document.getElementById('empty');
		var s = document.createElement('span');
		s.innerHTML = number;
		emptyBox.appendChild(s);
		emptyBox.id = "";
		clickedBox.id = "empty";
		clickedBox.innerHTML="";
		prevBox = "";
		nextBox = "";
		upperBox = "";
		lowerBox = "";
	}
}


