import boardApi from '../api/boardApi';

function fetchBoardSuccess(board){
	return {
		type: 'FETCH_BOARD_SUCCESS',
		board
	}
}

export function fetchBoard(id) {
	return function (dispatch) {
		return boardApi.getBoard(id).then(board => {
			dispatch(fetchBoardSuccess(board));
		});
	}
}

export function editBoard(board) {
	return function (dispatch) {
		return boardApi.editBoard(board).then(response => {
			return boardApi.getBoard(board.id).then(board => {
				dispatch(fetchBoardSuccess(board));
			});
		});
	}
}
