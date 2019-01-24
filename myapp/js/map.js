		
	document.getElementById("get_location").onclick = function(){
		
	if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
		
		}
	
	return false;
	}

  
  function showPosition(position) {
	  
	var lat=position.coords.latitude;
	var log=position.coords.longitude;
	document.getElementById("google_maps").setAttribute("src", "https://embed.waze.com/iframe?zoom=15&lat="+lat+"&lon="+log+"");

}