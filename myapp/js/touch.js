document.getElementById("demo").addEventListener("touchstart", on_touch_start);

function on_touch_start(e){
	var touches = e.changedTouches;

	
	for(var i = 0 ; i< touches.length; i++){
		var count = 0;

		document.getElementById("demo").innerHTML = ++count;
		
	}
	
	
}