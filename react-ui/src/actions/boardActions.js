import boardApi from '../api/boardApi';

function fetchBoardsSuccess(boards) {
	return {
		type: 'FETCH_BOARDS_SUCCESS',
		boards
	}
}

export function fetchBoards() {
	return function (dispatch) {
		return boardApi.fetchBoards().then(boards => {
			dispatch(fetchBoardsSuccess(boards));
		});
	}
}

export function addBoard(name) {
	return function (dispatch) {
		return boardApi.addBoard(name).then(response => {
			return fetchBoards();
		});
	}
}

export function editBoard(id, name) {
	return function (dispatch) {
		return boardApi.editBoard(id, name).then(response => {
			return fetchBoards();
		});
	}
}

export function removeBoard(id) {
	return function (dispatch) {
		return boardApi.removeBoard(id).then(response => {
			return fetchBoards();
		});
	}
}