import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const ListBooks = (props) => {
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
	            		books={props.currentlyReading}
	            		sortBooks={props.sortBooks}
	            	/>
	            	<Shelf
	            		title='Want to Read'
	            		shelf='wantToRead'
	            		books={props.wantToRead}
	            		sortBooks={props.sortBooks}
	            	/>
	            	<Shelf
	            		title='Read'
	            		shelf='read'
	            		books={props.read}
	            		sortBooks={props.sortBooks}
	            	/>
	            </div>
            </div>
            <div className='open-search'>
              <Link to='/search' className='book-search'>Add a book</Link>
            </div>
        </div>
	);
}

export default ListBooks;