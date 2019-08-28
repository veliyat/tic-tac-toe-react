import { combineReducers } from 'redux'

import { boardReducer } from './boardReducer'
import { playerReducer } from './playerReducer'

export default combineReducers({
  board: boardReducer,
  players: playerReducer
})