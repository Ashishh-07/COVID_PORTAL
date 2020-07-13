window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch("https://api.covid19india.org/data.json")
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let active = data.statewise[0].active;
		let confirmedCases = data.statewise[0].confirmed;
		let deaths = data.statewise[0].deaths;
		let recovered = data.statewise[0].recovered;
		let new_cases = data.statewise[0].deltaconfirmed;
		let new_recovered = data.statewise[0].deltarecovered;
		let new_deaths = data.statewise[0].deltadeaths;
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('active').innerHTML = active.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('recover').innerHTML = recovered.toLocaleString('en');
		document.getElementById('new_cases').innerHTML = "+"+new_cases.toLocaleString('en');
		document.getElementById('new_recover').innerHTML = "+"+new_recovered.toLocaleString('en');
		document.getElementById('new_deaths').innerHTML = "+"+new_deaths.toLocaleString('en');


	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}
