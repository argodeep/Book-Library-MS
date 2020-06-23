import React, { useState, useEffect } from 'react';
import './style.css';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
import Loader from '../shared/loader';
import { getBookById } from '../../services/redux/actions';

function ViewBook(props: any) {
  let history = useHistory();
  let dispatch = useDispatch();
  let book: Book = useSelector((state: any) => state.getBookById || {});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState(props.match.params.id)


  function getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async function getBook() {
    if (!book.id) {
      let res: any = await API.fetchBookById(id)
      dispatch(getBookById(res));
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBook();
  }, [id])

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="layout">
      {book.id &&
        <div className="row-book">
          <div className="col-33">
            <div className="book-card-view">
              <div className="cover" style={{ backgroundColor: getRandomColor(), color: '#fff' }}>
                {book.name?.slice(0, 1)}
              </div>
              <p className="title">{book.name}</p>
              <p className="author">{book.author}</p>
              <p className="qty">{book.count} Qty</p>
              <button type="button" onClick={() => history.push('/books/' + id + '/edit')} style={{ minWidth: 'fit-content', marginTop: 16, marginBottom: 16, marginLeft: 8, padding: 8 }}>Edit Book</button>
            </div>
          </div>
          <div className="col-67">
            <p className="description">{book.description}</p>
          </div>
        </div>
      }
      {
        !book.id && <p style={{ textAlign: 'center', width: '100%' }}>ERROR! This Book Not Available</p>
      }
    </div>
  );
}

export default ViewBook;
