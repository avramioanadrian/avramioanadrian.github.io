var box1 = document.getElementById('box1');
box1.addEventListener("touchstart", on_touch_start);
var statusdiv = document.getElementById('statusdiv');
var par = document.getElementById('par');
var count = 0;

	function on_touch_start(e){
	
		count = count + 1;

        statusdiv.innerHTML = 'Counter:' + count ;
        e.preventDefault();
		
		
			var myWorker = new Worker("worker.js");
			myWorker.postMessage(count);
		
			myWorker.onmessage = function (e){
				var res = e.data;
					if(res == 0){
						par.innerHTML = 'Numarul '+ number +' este Par!!';
					}else{
						par.innerHTML = 'Numarul '+ number +' este Impar!';
					}
		}
	}



