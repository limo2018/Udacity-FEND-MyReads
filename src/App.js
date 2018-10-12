import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
//fetch books
  state = {
    booklists: []
  }
//Fetch books from the BooksAPI
  componentDidMount(){
    BooksAPI.getAll().then((booklists) => {
      this.setState({ booklists: booklists })
    })
  }

  //Update shelf for books
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(booklists => {
      this.setState({ booklists: booklists })
    })
  }
//Render mainPage and searchPage
  render() {
    return (
     <div className="app">
       <Route exact path="/" render={() => (
         <MainPage booklists={this.state.booklists}
          updateShelf={this.updateShelf}
         />
       )} />

       <Route exact path="/search" render={() => (
         <SearchPage
          updateShelf={this.updateShelf}
          booklists={this.state.booklists}
         />
       )} />
      </div>
    )
  }
}

export default BooksApp
