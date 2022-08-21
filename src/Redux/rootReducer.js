import { combineReducers } from 'redux'
import containReducer from './contain/containReducer'
import imageReducer from './image/imageReducer'
import newsReducer from './news/newsReducer'
import videoReducer from './video/videoReducer'
const rootReducer = combineReducers({
  contain: containReducer,
  image : imageReducer,
  news : newsReducer,
  video : videoReducer
})

export default rootReducer