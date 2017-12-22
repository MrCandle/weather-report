import boardApi from '../api/boardApi';

function fetchBoardSuccess(board){
	return {
		type: 'FETCH_BOARD_SUCCESS',
		board
	}
}

export function fetchBoard(username, id) {
	return function (dispatch) {
		return boardApi.getBoard(username, id).then(board => {
			dispatch(fetchBoardSuccess(board));
		});
	}
}

export function editBoard(username, board) {
	return function (dispatch) {
		return boardApi.editBoard(username, board).then(response => {
			return boardApi.getBoard(username, board.id).then(board => {
				dispatch(fetchBoardSuccess(board));
			});
		});
	}
}
