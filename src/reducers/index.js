import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js'

//we're mapping our application state
const rootReducer = combineReducers({
books: BooksReducer
});

export default rootReducer;
