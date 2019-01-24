var box1 = document.getElementById('box1');
box1.addEventListener("touchstart", on_touch_start);
var startx = 0;
var statusdiv = document.getElementById('statusdiv');
function on_touch_start(e){
	var touches = e.changedTouches;
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
        statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px';
        e.preventDefault();
	
	
	
	

	
	
}