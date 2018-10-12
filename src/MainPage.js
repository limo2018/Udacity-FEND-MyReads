import React, { Component } from 'react';

import Shelf from './Shelf';

import { Link } from 'react-router-dom';

class MainPage extends Component {
  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              <Shelf
              title={"Currently Reading"}
              books={this.props.booklists.filter (
              book => book.shelf === "currentlyReading"
              )}
              updateShelf={this.props.updateShelf}
              />
              <Shelf
              title={"Want to Read"}
              books ={this.props.booklists.filter (
              book => book.shelf === "wantToRead"
              )}
              updateShelf={this.props.updateShelf}
              />
              <Shelf
              title={"Read"}
              books={this.props.booklists.filter (
              book => book.shelf === "read"
              )}
              updateShelf={this.props.updateShelf}
              />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    );
  }
  }


export default MainPage;
