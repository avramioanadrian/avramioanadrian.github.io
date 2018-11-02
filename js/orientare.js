document.getElementById("id_business_version").innerHTML = "Bussiness version: 2018.11.02 - 01";
window.addEventListener("deviceorientation", on_device_orinetation);

function on_device_orinetation(e){
	document.getElementById("id_x").innerHTML = e.alpha;
	document.getElementById("id_y").innerHTML = e.beta;
	document.getElementById("id_z").innerHTML = e.gama;

}