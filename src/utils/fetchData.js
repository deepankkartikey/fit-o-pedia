export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0cad7a7a0msh042b05628f1b60dp1afb74jsnbfa4ed287200',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);

	const data = await response.json();

	return data;
};
