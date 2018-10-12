import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
//state for searching
  state = {
    query: '',
    searchBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateBookSearch(query);
  }

  updateBookSearch = (query) => {
    if (query){
      BooksAPI.search(query).then(searchBooks => {
        if (searchBooks.error){
          this.setState({ searchBook: [] });
        } else {
          this.setState({ searchBooks: searchBooks })
        }
     })
   } else {
     this.setState({ searchBook: [] });
   }
  }
      render () {

        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
               to="/"
              className="close-search"
              >Close</Link>

              <div className="search-books-input-wrapper">

                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={e => this.updateQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 {
                   this.state.searchBooks.map(searchBook => {
                     let shelf = "none";

                     this.props.booklists.map(
                       book => (book.id === searchBook.id ?
                       shelf = book.shelf : ''
                      ));

                     return (
                       <li key={searchBook.id}>
                       <Book
                        book={searchBook}
                        updateShelf={this.props.updateShelf}
                        updateBooks={shelf}
                       />
                       </li>
                    );
                   })
                 }
              </ol>
            </div>
          </div>
        );
      }
}

export default SearchPage;
