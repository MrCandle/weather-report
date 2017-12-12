import {combineReducers} from 'redux'
import boards from './boardsReducer'

const rootReducer = combineReducers({
	boards
})

export default rootReducer