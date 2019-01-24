var number = document.getElementById('number');
var demo = document.getElementById('demo');
var myWorker = null;
function fib() {
 		if(myWorker == null){
		
		myWorker = new Worker('myWorker.js');
		myWorker.postMessage(number);
		
		myWorker.onmessage = function (e){
			demo.innerHTML = 'Fibonacci:' + number+'is'+e.data;
	}
	}
}

	
		

        
       
		




