import React, { useState, useEffect } from 'react';
import './style.css';
import { Book } from '../../services/models/book';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as API from '../../services/axios';
// import { debounce } from 'throttle-debounce';
import Loader from '../shared/loader';
import { getBookById, listBooks} from '../../services/redux/actions';

function ListBooks() {
  let history = useHistory();
  let dispatch = useDispatch();
  let books: Book[] = useSelector((state: any) => state.getBooks || []);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>('');



  function getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async function getBooks(query: string = '') {
    let res: any = await API.getAllBooks(query);
    dispatch(listBooks(res));
    setLoading(false)
  }

  let handleSearch = (value: string) => {
    if (value) {
      getBooks('?keyword=' + value);
    } else {
      getBooks('')
    }
  }

  useEffect(() => {
    getBooks('');
  }, [])

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="layout">
      <div>
        <input type="text" value={keyword} onChange={(event: any) => {
          setKeyword(event.target.value)
          // debounce(500, handleSearch(event.target.value));
          handleSearch(event.target.value)
        }} placeholder="Search by book name & author" />
        <span className="clear" onClick={() => {
          getBooks('');
          setKeyword('')
        }}>Clear</span>
      </div>
      <div className="row">
        {
          books.map((book: Book, index: number) =>
            <div className="book-card" key={index} onClick={() => {
              dispatch(getBookById(book))
              history.push('/books/' + book.id)
            }}>
              <div className="cover" style={{ backgroundColor: getRandomColor(), color: '#fff' }}>
                {book.name.slice(0, 1)}
              </div>
              <p className="title">{book.name}</p>
              <p className="author">{book.author}</p>
              <p className="qty">{book.count} Qty</p>
            </div>
          )
        }
        {
          books.length === 0 && <p style={{ textAlign: 'center', width: '100%' }}>No Books Found</p>
        }
      </div>
      <button type="button" className="fab" onClick={() => {
        history.push('/books/add');
      }}>+</button>
    </div>
  );
}

export default ListBooks;
