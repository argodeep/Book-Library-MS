import axios from "axios";
import { Book } from "../models/book";

const API = {
  backend: "BACKEND_API", // Change here
};

let getAuthHeaders = async () => {
  const token = await localStorage.getItem('token');
  const uid = await localStorage.getItem('uid');

  const config = {
    headers: {
      "x-access-token": token,
      "x-access-uid": uid
    }
  }
  return config
}

let getAllBooks = async (query: string) => {
  const config = await getAuthHeaders();
  let res = await axios.get(API.backend + '/list' + query, config);
  if (res.status === 200) {
    return res.data.data
  }
  return []
}

let fetchBookById = async (id: string) => {
  const config = await getAuthHeaders();
  let res = await axios.get(API.backend + '/books/' + id, config);
  if (res.status === 200) {
    return res.data.data
  }
  return null
}

let updateBook = async (book: Book) => {
  const config = await getAuthHeaders();
  let res = await axios.put(API.backend + '/books/' + book.id, book, config)
  if (res.status === 200) {
    return res.data.data
  }
  return null
}

let addNewBook = async (book: Book) => {
  const config = await getAuthHeaders();
  let res = await axios.post(API.backend + '/books/add', book, config);
  if (res.status === 200) {
    return res.data.data
  }
  return null
}

export { getAllBooks, fetchBookById, updateBook, addNewBook }