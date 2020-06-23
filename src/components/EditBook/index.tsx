import React, { useState, useEffect } from 'react';
import './style.css';
import BookModify from '../shared/bookDetailsModify';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
import Loader from '../shared/loader';
import TransparentLoader from '../shared/TransparentLoader';
import { getBookById, editBook } from "../../services/redux/actions";

function EditBook(props: any) {
  const [id, setId] = useState(props.match.params.id);
  let history = useHistory();
  let dispatch = useDispatch();
  let book: Book = useSelector((state: any) => state.getBookById || {});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  async function getBook() {
    if (!book.id) {
      let res: any = await API.fetchBookById(id)
      dispatch(getBookById(res));
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  async function updateBook(detail: Book) {
    setSubmit(true);
    let res = await API.updateBook(detail);
    if (res) {
      dispatch(editBook(res));
      dispatch(getBookById(res));
      history.push('/books/' + book.id);
    } else {
      setSubmit(false)
    }
  }

  useEffect(() => {
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
