this.onmessage = function(e){
	
		var result = numarPar(e.data);
		this.postMessage(result);
		
	
	
}
function fibonacci(number) {
var result = '';
	if (number % 2 == 0){
		result = 'Par';
	}else{
		result = 'Impar';
	}
	return result;

}