import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {

  state = {
    books: []
  }

  updateState = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }
  
  componentDidMount() {
    this.updateState();
  }

  sortBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() =>
      this.updateState()
    )
  }

  render() {
    // Filter the books into shelf catagories. Variables passed as props to the ListBooks component
    const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
    const read = this.state.books.filter(book => book.shelf === 'read');

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            sortBooks={this.sortBooks}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            sortBooks={this.sortBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;