import React, { useState, useEffect } from 'react';
import './style.css';
import BookModify from '../shared/bookDetailsModify';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
import Loader from '../shared/loader';
import TransparentLoader from '../shared/TransparentLoader';

function AddBook(props: any) {
  let history = useHistory();
  let dispatch = useDispatch();
  let book: Book = useSelector((state: any) => state.getBookById || {});
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');


  function updateBook(detail: Book) {
    setSubmit(true);
    dispatch(API.addNewBook(detail));
    setTimeout(() => {
      history.push('/list');
    }, 2000)
  }


  if (isSubmitting) {
    return (
      <TransparentLoader message={message} />
    )
  }

  return (
    <div>
      <h3>Add new Book</h3>
      <BookModify onSubmit={(detail: Book) => updateBook(detail)} name={book.name || ''} description={book.description || ''} author={book.author || ''} count={book.count || ''} />
    </div>
  );
}

export default AddBook
