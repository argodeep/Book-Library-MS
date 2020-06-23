import { IS_LOGGEDIN, SAVE_TOKEN, USER_ID, LIST_BOOKS, ADD_BOOK, EDIT_BOOK, GET_SINGLE_BOOK } from './types';
import { Book } from '../../models/book';

export const isLoggedIn = (data: boolean) => {
  return {
    type: IS_LOGGEDIN,
    payload: data
  };
}

export const token = (data: string|null) => {
  return {
    type: SAVE_TOKEN,
    payload: data
  };
}


export const uid = (data: string|null) => {
  return {
    type: USER_ID,
    payload: data
  };
}


export const listBooks = (data: Book[]) => {
  return {
    type: LIST_BOOKS,
    payload: data
  };
}

export const addBook = (data: Book|string|null) => {
  return {
    type: ADD_BOOK,
    payload: data
  };
}

export const editBook = (data: Book|string|null) => {
  return {
    type: EDIT_BOOK,
    payload: data
  };
}

export const getBookById = (data: Book|null) => {
  return {
    type: GET_SINGLE_BOOK,
    payload: data
  };
}


