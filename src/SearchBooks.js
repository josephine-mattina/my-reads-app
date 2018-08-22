import React, { Component } from 'react';
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
	              <a className='close-search' onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	              <div className='search-books-input-wrapper'>
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
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
	            	{this.state.searchedBooks.map(searchedBook => (
	            		<li key={searchedBook.id}>
	            			<Book
	            				book={searchedBook}
	            			/>
	            		</li>
	            	))}
	              </ol>
	            </div>
	        </div>
		);
	}
}

export default SearchBooks;