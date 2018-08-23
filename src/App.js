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
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.updateState();
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.updateState();
  }

  render() {
    // Filter the books into shelf catagories to be passed as props to the ListBooks component
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
            shelfChange={this.shelfChange}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            shelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
