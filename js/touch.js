document.getElementById("id_logic_version").innerHTML = "Logic Version = 2018.12.14.0";
document.getElementById("id_canvas").addEventListener("touchstart", on_touch_start);

function on_touch_start(e){
	var touches = e.changedTouches;
	var canvas = document.getElementById("id_canvas");
	var rect = canvas.getBoundingClientRect();
	var context = canvas.getContext("2d");
	
	for(var i = 0 ; i< touches.length; i++){

		context.beginPage();
		context.arc(touches[i].pageX, touches[i].pageY, 20 , 0 , 2*Math.PI);
		context.stroke();
		
	}
	
	
}