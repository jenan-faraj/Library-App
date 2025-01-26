import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <h2>Book List</h2>
        <div className="book-list">
          {this.props.books.map((book) => (
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
}

export default Main;
