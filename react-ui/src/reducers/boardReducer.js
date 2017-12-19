import initialState from './initialState';

const board = (state = initialState.board, action) => {
	switch (action.type) {
		case 'FETCH_BOARD_SUCCESS':
			return action.board
		default:
			return state
	}
}

export default board