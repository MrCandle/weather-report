import initialState from './initialState';

const boards = (state = initialState.boards, action) => {
	switch (action.type) {
		case 'FETCH_BOARDS_SUCCESS':
			return action.boards	
		case 'ADD_BOARD':
			return [
				...state,
				{
					id: action.id,
					name: action.name
				}
			]
		case 'EDIT_BOARD':
			return state.map(board =>
				(board.id === action.id) ? { ...board,
					name: action.name
				} :
				board
			)
		default:
			return state
	}
}

export default boards