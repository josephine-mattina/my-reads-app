import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
  };

  render() {

    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          shelfChange={this.shelfChange}
        />
      </div>
    )
  }
}

export default BooksApp
