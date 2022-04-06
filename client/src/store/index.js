import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from './reducers/PostReducer'

const store = createStore(
  combineReducers({
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
