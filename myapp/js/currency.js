function getCurrency(){
var apiCall='http://data.fixer.io/api/latest?access_key=01b22eb4ebea205f5d6dad1d80e4c1d7';


	$.getJSON(apiCall,weather);
	function weather(e){
		document.getElementById('usd').innerHTML='USD : '+e.rates.USD;
	document.getElementById('eur').innerHTML ='EUR : '+e.rates.EUR;
	document.getElementById('gbp').innerHTML ='GBP : '+ e.rates.GBP;
	document.getElementById('ron').innerHTML = 'RON : '+e.rates.RON;
console.log(e)

	}
}