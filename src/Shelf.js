import React from 'react';
import Book from './Book';

const Shelf = (props) => {
	return(
		<div className='bookshelf'>
          <h2 className='bookshelf-title'>{props.title}</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
            	{props.books
            		.filter(book => book.shelf === props.shelf)
            		.map(book => (
	                    <li key={book.id}>
							<Book
								book={book}
								sortBooks={props.sortBooks}
								currentShelf={book.shelf}
							/>
	                    </li>
            		))
            	}
            </ol>
          </div>
        </div>
	)
}

export default Shelf;