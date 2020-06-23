import { combineReducers } from 'redux';
import { isLoggedIn, token, uid } from './auth';
import { getBooks, getBookById, updateBook, addBook } from './api';


const allReducers = combineReducers({
  isLoggedIn,
  token,
  uid,
  getBooks,
  getBookById,
  updateBook,
  addBook
});
export default allReducers;