this.onmessage = function(e){
	
		var result = fibonacci(e.data);
		this.postMessage(result);
		
	
	
}

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}