import boardApi from '../api/boardApi';

export const addBoard = (name) => ({
	type: 'ADD_BOARD',
	name
})

export const editBoard = (name) => ({
	type: 'EDIT_BOARD',
	name
})

export const removeBoard = (id) => ({
	type: 'REMOVE_TODO',
	id
})

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

// export function addBoard(name) {
// 	return function (dispatch) {
// 		return boardApi.addBoard(name).then(response => {
// 			return fetchBoards();
// 		});
// 	}
// }

// export function editBoard() {
// 	return function (dispatch) {
// 		return boardApi.fetchBoards().then(boards => {
// 			dispatch(fetchBoardsSuccess(boards));
// 		});
// 	}
// }

// export function removeBoard() {
// 	return function (dispatch) {
// 		return boardApi.fetchBoards().then(boards => {
// 			dispatch(fetchBoardsSuccess(boards));
// 		});
// 	}
// }