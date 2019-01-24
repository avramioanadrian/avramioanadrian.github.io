var number = 55;
var demo = document.getElementById('demo');
var myWorker = null;
function fib() {
 		if(myWorker == null){
		
		myWorker = new Worker('myWorker.js');
		myWorker.postMessage(number);
		
		
		myWorker.onmessage = function (e){
			var res = e.data;
			
			if(res == 0){
				
			demo.innerHTML = 'Numarul '+ number +' este Par!!';
			
			}else{
				
			demo.innerHTML = 'Numarul '+ number +' este Impar!';
				
	}
	}
}

	
		

        
       
		




