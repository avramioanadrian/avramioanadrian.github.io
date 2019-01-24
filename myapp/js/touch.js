var box1 = document.getElementById('box1');
box1.addEventListener("touchstart", on_touch_start);
var startx = 0;
var statusdiv = document.getElementById('statusdiv');
var count = 0;
function on_touch_start(e){
	count = count + 1;

        statusdiv.innerHTML = 'Counter:' + count ;
        e.preventDefault();
	
	
	
	

	
	
}