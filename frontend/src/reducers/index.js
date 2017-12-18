import { combineReducers } from 'redux';
import CategoriesReducer from "./categoriesReducer";
import PostsReducer from "./postsReducer";
import CommentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
