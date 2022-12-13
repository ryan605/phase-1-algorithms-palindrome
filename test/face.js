const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21b12f990amsh5e740a5393b2ccdp1db4f2jsn99cc3bdfcb4e',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

fetch('https://api-football-beta.p.rapidapi.com/trophies?player=276', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));