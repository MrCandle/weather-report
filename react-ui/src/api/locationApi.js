import axios from 'axios';
const url = 'https://query.yahooapis.com/v1/public/yql';

class LocationApi {

	// This return an array of items used for the dropdown list.
	static getLocationsByText(text) {
		var query = `
				select woeid, name, country.content 
				from geo.places(5) 
				where text = '${text}'`;
		return axios.get(`${url}/?q=${query}&format=json`)
			.then(res => {
				return res.data.query.results.place.map(x => {
					return {
						value: x.woeid,
						label: `${x.name}, ${x.country}`
					}
				});
			});
	}

	// This gets the detailed weather for a location by woeid.
	static getLocationById(woeid) {
		var query =
			`select item 
				from weather.forecast 
				where woeid = ${woeid} and u='c'`;
		return axios.get(`${url}/?q=${query}&format=json`)
			.then(res => {
				var item = res.data.query.results.channel.item
				return {
					woeid: woeid,
					title: item.title,
					condition: item.condition,
					forecast: item.forecast
				}
			});
	}
}

export default LocationApi;