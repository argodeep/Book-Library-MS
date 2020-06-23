import { listBooks, getBookById, editBook, addBook } from "../redux/actions";
import axios from "axios";
import { Book } from "../models/book";

const API = {
  backend: "REPLACE_WITH_BACKEND_API",
};

const token = localStorage.getItem('token');
const uid = localStorage.getItem('uid');

const config = {
  headers: {
    "x-access-token": token,
    "x-access-uid": uid
  }
}

function getAllBooks(query: string) {
  return (dispatch: any) => {
    axios.get(API.backend + '/list' + query, config)
      .then((response: any) => {
        dispatch(listBooks(response.data.data));
      })
      .catch((error) => {
        dispatch(listBooks([]));
      });
  };
}

function fetchBookById(id: string) {
  return (dispatch: any) => {
    axios.get(API.backend + '/books/' + id, config)
      .then((response: any) => {
        dispatch(getBookById(response.data.data));
      })
      .catch((error) => {
        dispatch(getBookById(error));
      });
  };
}

function updateBook(book: Book) {
  return (dispatch: any) => {
    axios.put(API.backend + '/books/' + book.id, book, config)
      .then((response: any) => {
        dispatch(editBook(response.data.data));
        dispatch(getBookById(response.data.data));
      })
      .catch((err: any) => {
        dispatch(editBook('Not Saved'));
      });
  };
}

function addNewBook(book: Book) {
  return (dispatch: any) => {
    axios.post(API.backend + '/books/add', book, config)
      .then((response: any) => {
        dispatch(addBook(response.data.data));
        dispatch(getBookById(response.data.data));
      })
      .catch((err: any) => {
        dispatch(addBook('Not Added'));
      });
  };
}

export { getAllBooks, fetchBookById, updateBook, addNewBook }