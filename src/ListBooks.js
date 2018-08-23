import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf';

class ListBooks extends Component {
	render() {
		console.log(this.props.books)
		return (
	        <div className='list-books'>
	            <div className='list-books-title'>
	              <h1>MyReads</h1>
	            </div>
	            <div className='list-books-content'>
		            <div>
		            	<Shelf 
		            		title='Currently Reading'
		            		shelf='currentlyReading'
		            		books={ this.props.currentlyReading }
		            		shelfChange={ this.props.shelfChange }
		            	/>
		            	<Shelf 
		            		title='Want to Read'
		            		shelf='wantToRead'
		            		books={ this.props.wantToRead }
		            		shelfChange={ this.props.shelfChange }
		            	/>
		            	<Shelf 
		            		title='Read'
		            		shelf='read'
		            		books={ this.props.read }
		            		shelfChange={ this.props.shelfChange }
		            	/>
		            </div>
	            </div>
	            <div className='open-search'>
	              <Link to='/search' className='book-search'>Add a book</Link>
	            </div>
	        </div>
		);
	}
}

export default ListBooks;