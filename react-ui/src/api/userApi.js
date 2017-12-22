import axios from 'axios';

class UserApi {

	static login(username, password) {
		return axios.post(`${window.location.origin}/api/user`, {
				username: username,
				password: password
			})
			.then(res => {
				return res.data;
			});
	}

	static register(username, password, email) {
		return axios.post(`${window.location.origin}/api/user/register`, {
				username: username,
				password: password,
				email: email
			})
			.then(res => {
				return res.data;
			});
	}

}

export default UserApi;