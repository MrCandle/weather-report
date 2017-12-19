import axios from 'axios';

class BoardApi {

	static fetchBoards() {
		return axios.get(`${window.location.origin}/api/boards`)
			.then(res => {
				return res.data;
			});
	}

	static addBoard(name) {
		// create body for post
		return axios.post(`${window.location.origin}/api/boards`, { name: name })
			.then(res => {
				return res.data;
			});
	}

	static editBoard(board) {
		// create body for put
		return axios.put(`${window.location.origin}/api/boards/${board.id}`, { board: board })
			.then(res => {
				return res.data;
			});
	}

	static removeBoard(id) {
		return axios.delete(`${window.location.origin}/api/boards/${id}`)
			.then(res => {
				return res.data;
			});
	}

	static getBoard(id) {
		return axios.get(`${window.location.origin}/api/boards/${id}`)
			.then(res => {
				return res.data;
			});
	}

}

export default BoardApi;