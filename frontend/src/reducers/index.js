import { combineReducers } from 'redux';
import PostsReducer from "./postsReducer";
import CommentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  categories: {},
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
