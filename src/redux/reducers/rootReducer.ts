import startReducer from './startReducer'
import { combineReducers } from "redux"
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
    startReducer,
    questionsReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer