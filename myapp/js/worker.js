this.onmessage = function(e){
	
		var result = numarPar(e.data);
		this.postMessage(result);
		
	
	
}
function numarPar(number) {

	if (number % 2 == 0){
		return 0;
	}else{
		return 1;
	}

}