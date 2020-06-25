import React, { useState } from 'react';
import './style.css';
import BookModify from '../shared/bookDetailsModify';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
import TransparentLoader from '../shared/TransparentLoader';
import { getBookById, addBook } from "../../services/redux/actions";

function AddBook(props: any) {
  let history = useHistory();
  let dispatch = useDispatch();
  let book: Book = useSelector((state: any) => state.getBookById || {});
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');


  async function updateBook(detail: Book) {
    let res = await API.addNewBook(detail);
    if (res) {
      dispatch(addBook(res));
      dispatch(getBookById(res));
      history.push('/books/' + book.id);
    } else {
      setSubmit(false)
    }
  }


  if (isSubmitting) {
    return (
      <TransparentLoader message={message} />
    )
  }

  return (
    <div>
      <h3>Add new Book</h3>
      <BookModify onSubmit={(detail: Book) => updateBook(detail)} name={''} description={''} author={''} count={''} />
    </div>
  );
}

export default AddBook
