window.onload = function(){
	var aAllInput = document.querySelectorAll('.inputChoixNiveau');
	for (input of aAllInput){
		input.onchange = function(){
			this.parentElement.className = this.classList[0];
		}
	}
}
