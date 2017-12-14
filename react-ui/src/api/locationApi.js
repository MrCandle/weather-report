import axios from 'axios';
const url = 'https://query.yahooapis.com/v1/public/yql';
//q=select woeid, name,country.content from geo.places(5) where text='no'

class LocationApi {

	// This return an array of items used for the dropdown list.
	static getLocationsByText(text) {
		var query = `select woeid, name, country.content from geo.places(5) where text = '${text}'`;
		return axios.get(`${url}/?q=${query}&format=json`)
			.then(res => {
				return res.data.query.results.place.map(x => { return { value: x.woeid, label: `${x.name}, ${x.country}` } });
			});
	}

}

export default LocationApi;