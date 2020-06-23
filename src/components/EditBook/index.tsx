import React, { useState, useEffect } from 'react';
import './style.css';
import BookModify from '../shared/bookDetailsModify';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
import Loader from '../shared/loader';
import TransparentLoader from '../shared/TransparentLoader';

function EditBook(props: any) {
  const [id, setId] = useState(props.match.params.id);
  let history = useHistory();
  let dispatch = useDispatch();
  let book: Book = useSelector((state: any) => state.getBookById || {});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  function getBook(): void {
    if (!book.id) {
      dispatch(API.fetchBookById(id));
    }
  }

  function updateBook(detail: Book) {
    setSubmit(true);
    dispatch(API.updateBook(detail));
    setTimeout(() => {
      history.push('/books/' + book.id);
    }, 2000)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    getBook();
  }, [id])

  if (isSubmitting) {
    return (
      <TransparentLoader message={message} />
    )
  }

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <h3>Edit This Book</h3>
      {
        book.id && book.name &&
        <BookModify onSubmit={(detail: Book) => updateBook(detail)} id={id} name={book.name || ''} description={book.description || ''} author={book.author || ''} count={book.count || ''} />
      }
    </div>
  );
}

export default EditBook
