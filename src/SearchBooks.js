import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
	// Search input settings
	state = {
		query:'',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.updateSearchedBooks(query);
	}

	// Get books that match user query
	updateSearchedBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then((searchedBooks) => {
				{/* Handle errors if query is not found in SEARCH TERMS */}
				if (searchedBooks.error) {
					this.setState({ searchedBooks: [] });
				} else {
				    this.setState({ searchedBooks })
				}
		    })
		} else {
			this.setState({ searchedBooks: [] });
		}
	}

	render() {
		return (
	        <div className='search-books'>
	            <div className='search-books-bar'>
	              <Link to='/' className='close-search'>Close</Link>
	              <div className='search-books-input-wrapper'>
	                <input
	                	className='search-books-input'
	                	type='text'
	                	placeholder='Search by title or author'
	                	value={this.state.query}
	                	onChange={(event) => this.updateQuery(event.target.value)}
	                />

	              </div>
	            </div>
	            <div className='search-books-results'>
	              <ol className='books-grid'>
	              	{/*  Display books that match user query */}
	            	{this.state.searchedBooks.map(searchedBook => {
	            		let defaultShelf='None';
	            	{/*  TODO - 2:37:58 check code */}
	            		this.props.books.map(book => (
	            			book.id === searchedBook.id
	            			? defaultShelf = book.shelf
	            			: ''
	            		));

	            		return (
		            		<li key={searchedBook.id}>
		            			<Book
		            				book={searchedBook}
		            				shelfChange={this.props.shelfChange}
		            				currentShelf={defaultShelf}
		            			/>
		            		</li>
	            		);
	            	})}
	              </ol>
	            </div>
	        </div>
		)
	}
}

export default SearchBooks;