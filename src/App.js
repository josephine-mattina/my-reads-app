import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {

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

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            shelfChange={this.shelfChange}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.props.books}
            shelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
