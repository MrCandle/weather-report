import boardApi from '../api/boardApi';

function fetchBoardsSuccess(boards) {
	return {
		type: 'FETCH_BOARDS_SUCCESS',
		boards
	}
}

export function fetchBoards(username) {
	return function (dispatch) {
		return boardApi.fetchBoards(username).then(boards => {
			dispatch(fetchBoardsSuccess(boards));
		});
	}
}

export function addBoard(username, name) {
	return function (dispatch) {
		return boardApi.addBoard(username, 	name).then(response => {
			return boardApi.fetchBoards(username).then(boards => {
				dispatch(fetchBoardsSuccess(boards));
			});
		});
	}
}

export function removeBoard(username, id) {
	return function (dispatch) {
		return boardApi.removeBoard(id).then(response => {
			return boardApi.fetchBoards(username).then(boards => {
				dispatch(fetchBoardsSuccess(boards));
			});
		});
	}
}