import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => (
                <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={this.props.updateShelf}
                  updateBooks={book.shelf}
                />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
