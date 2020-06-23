import React, { useState, useEffect } from 'react';
import './style.css';
import { Book } from '../../../services/models/book';

function BookModify(props: any) {
  const [name, setName] = useState<string>(props.name);
  const [description, setDescription] = useState<string>(props.description);
  const [author, setAuthor] = useState<string>(props.author);
  const [count, setCount] = useState<number | any>(props.count);
  const [errorText, setErrorText] = useState<string>('');
  const id = props.id || null;

  function submit(event: any) {
    event.preventDefault();
    if (name && description && author && count) {
      const date: any = new Date();
      props.onSubmit({
        name, description, author, count: count, id, date
      })
    } else {
      setErrorText('Pleas enter all the details');
    }
  }

  useEffect(() => {
     
  }, [id])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
      }}
    >
      <form onSubmit={(event) => submit(event)}>
        <label>Name*</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter book name" />
        <label>Author*</label>
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Enter author name" />
        <label>Decription*</label>
        <textarea rows={12} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Enter book description" ></textarea>
        <label>Count*</label>
        <input type="number" value={count} onChange={(event) => setCount(Number(event.target.value))} placeholder="Enter book count" />
        <p style={{ textAlign: "center", color: ' red', margin: '0px 0px 8x 0px' }}>{errorText}</p>
        <button type="submit">{id ? 'Save' : 'Add this book'}</button>
      </form>
    </div>
  );
}

export default BookModify;
