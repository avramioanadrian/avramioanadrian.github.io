	var video = document.getElementById("video");
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        
        video.srcObject = stream;
        video.play();
    });
}

document.getElementById("snap").addEventListener("click", function() {
canvas.width=video.clientWidth;
canvas.height=video.clientHeight;
	context.drawImage(video, 0, 0);
});