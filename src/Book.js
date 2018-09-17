import React from 'react';

const Book = (props) => {
	const book = props.book;
	//Handle books with no cover image
	const bookCover = book.imageLinks
			? book.imageLinks.thumbnail
			: '';

	return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
            	style={{
            		width: 128,
            		height: 193, 
            		backgroundImage:`url('${bookCover}')`
            	}}
            ></div>
            <div className="book-shelf-changer">
	            <select
	            	// e.target.value is the new shelf
					onChange={(e) => props.sortBooks(book, e.target.value)}
					// Set the current shelf of a book. Based on study resource https://youtu.be/i6L2jLHV9j8
					value={props.currentShelf}
	            >
	                <option value="move" disabled>Move to...</option>
	                <option value="currentlyReading">Currently Reading</option>
	                <option value="wantToRead">Want to Read</option>
	                <option value="read">Read</option>
	                <option value="none">None</option>
            	</select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
	);
}

export default Book;