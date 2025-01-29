import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const firebaseUrl = 'https://testtt-58b94-default-rtdb.firebaseio.com/Books.json';

    const fetchData = async () => {
      try {
        const response = await axios.get(firebaseUrl);
        // تحويل Object إلى Array
        const booksArray = response.data ? Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key]
        })) : [];
        setData(booksArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>حدث خطأ: {error}</div>;
  if (!data) return null;

  return (
    <main>
      <h2>Book List</h2>
      <div className="book-list">
        {data.map((book) => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;