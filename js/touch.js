var number = document.getElementById('number');
var demo = document.getElementById('demo');
var myWorker = null;
function fib() {
 		if(myWorker == null){
		
		myWorker = new Worker('myWorker.js');
		myWorker.postMessage(5);
		
		
		myWorker.onmessage = function (e){
			var res = e.data;
			
			if(res == 'Par'){
				
			demo.innerHTML = 'Numarul este:'+res;
			
			}else{
				
			demo.innerHTML = 'Numarul este:'+res;
				
	}
	}
}

	
		

        
       
		




