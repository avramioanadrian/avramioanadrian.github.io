function getWeather(){


var apiCall='http://api.openweathermap.org/data/2.5/weather?q=Alba,RO&units=metric&appid=4958d89f553396c8856d8d504d251b95';


	$.getJSON(apiCall,weather);
	function weather(e){
	document.getElementById('cityname').innerHTML='City Name: '+e.name;
	document.getElementById('country').innerHTML ='Country Name: '+e.sys.country;
	document.getElementById('temperature').innerHTML ='Temperature: '+ e.main.temp+' C';
	document.getElementById('humidity').innerHTML = 'Humidity: '+e.main.humidity+' %';

	}
}
