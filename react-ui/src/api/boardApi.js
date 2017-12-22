import axios from 'axios';

class BoardApi {

	static fetchBoards(username) {
		return axios.get(`${window.location.origin}/api/boards/${username}`)
			.then(res => {
				return res.data;
			});
	}

	static addBoard(username, name) {
		return axios.post(`${window.location.origin}/api/boards/${username}`, { name: name })
			.then(res => {
				return res.data;
			});
	}

	static editBoard(username, board) {
		return axios.put(`${window.location.origin}/api/boards/${username}/${board.id}`, { board: board })
			.then(res => {
				return res.data;
			});
	}

	static removeBoard(username, id) {
		return axios.delete(`${window.location.origin}/api/boards/${username}/${id}`)
			.then(res => {
				return res.data;
			});
	}

	static getBoard(username, id) {
		return axios.get(`${window.location.origin}/api/boards/${username}/${id}`)
			.then(res => {
				return res.data;
			});
	}

}

export default BoardApi;