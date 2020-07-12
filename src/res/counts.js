window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131?source=jhu&timelines=true")
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population = data.location.country_population;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}
