import axios from 'axios';

class BoardApi {

	static fetchBoards() {
		console.log('fetch board api');
		return axios.get(`${window.location.origin}/api/boards`)
			.then(res => {
				console.log('response: ', res.data);
				return res.data;
			});
	}

	static addBoard(name) {
		// create body for post
		return axios.post(`${window.location.origin}/api/boards`)
			.then(res => {
				return res.data;
			});
	}

	static editBoard(id, name) {
		// create body for put
		return axios.put(`${window.location.origin}/api/board/${id}`)
		.then(res => {
			return res.data;
		});
	}

	static removeBoard(id) {
		return axios.delete(`${window.location.origin}/api/board/${id}`)
		.then(res => {
			return res.data;
		});
	}
}

export default BoardApi;