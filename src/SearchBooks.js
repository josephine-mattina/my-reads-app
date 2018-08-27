import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
	// Search input settings
	state = {
		query:'',
		searchResults: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.updateSearchResults(query);
	}

	// Get books that match user search query
	updateSearchResults = (query) => {
		if (query) {
			BooksAPI.search(query).then((searchResults) => {
				// Handle errors if query is not found in SEARCH TERMS
				if (searchResults.error) {
					this.setState({ searchResults: [] });
				} else {
				    this.setState({ searchResults })
				}
		    })
		} else {
			this.setState({ searchResults: [] });
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
	            	{this.state.searchResults.map(searchResult => {
		            	// Set the default shelf of searched books. Based on study resource https://youtu.be/i6L2jLHV9j8
	            		let defaultShelf='none';
	            		this.props.books.map(book => (
	            			book.id === searchResult.id
	            			? defaultShelf = book.shelf
	            			: ''
	            		));

	            		return (
		            		<li key={searchResult.id}>
		            			<Book
		            				book={searchResult}
		            				sortBooks={this.props.sortBooks}
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