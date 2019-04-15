import { combineReducers } from 'redux'

import users_reducer from './users_reducer'
import courses_reducer from './courses_reducer'

const rootReducer = combineReducers({
  user: users_reducer,
  courses: courses_reducer
})

export default rootReducer
