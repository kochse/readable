import { combineReducers } from 'redux';
import PostsReducer from "./postsReducer";

const rootReducer = combineReducers({
  categories: {},
  posts: PostsReducer,
  comments: {},
});

export default rootReducer;
