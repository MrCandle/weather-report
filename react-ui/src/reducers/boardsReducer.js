import initialState from './initialState';

const boards = (state = initialState.boards, action) => {
	switch (action.type) {
		case 'FETCH_BOARDS_SUCCESS':
			return action.boards
		default:
			return state
	}
}

export default boards