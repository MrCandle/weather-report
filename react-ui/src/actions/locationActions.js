import locationApi from '../api/locationApi';

function fetchLocationsSuccess(boards) {
	return {
		type: 'FETCH_LOCATIONS_SUCCESS',
		boards
	}
}

export function fetch() {
	return function (dispatch) {
		return boardApi.fetchBoards().then(boards => {
			dispatch(fetchBoardsSuccess(boards));
		});
	}
}

export function addBoard(name) {
	return function (dispatch) {
		return boardApi.addBoard(name).then(response => {
			return boardApi.fetchBoards().then(boards => {
				dispatch(fetchBoardsSuccess(boards));
			});
		});
	}
}

export function editBoard(id, name) {
	return function (dispatch) {
		return boardApi.editBoard(id, name).then(response => {
			return boardApi.fetchBoards().then(boards => {
				dispatch(fetchBoardsSuccess(boards));
			});
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