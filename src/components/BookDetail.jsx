import imageNotFound from '../images/img-not-found.png';

let BookDetail = ({book}) => {
    return (
        <div className="books-details">
            {Object.keys(book).length === 0 ? (
                <>Nothing selected</>
            ) : (
                <>
                <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : imageNotFound} alt="book thumbnail" />
                <div className="book-details-data">
                    <div className="book-title">{book.volumeInfo.title}</div>
                    <div className="book-author">{book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Peter Parker"}</div>
                    <div className="book-des">{book.volumeInfo.description ? book.volumeInfo.description.substring(0, 250) + "..." : "Description Not Found..."}</div>
                    <div className="book-rating">
                        Avg Rating : {book.volumeInfo.averageRating} | Rating Count : {book.volumeInfo.ratingsCount} | Publisher : {book.volumeInfo.publisher} | Language : {book.volumeInfo.language}
                    </div>
                    <div className="book-btns">
                        <a target="_blank" rel="noreferrer" href={book.volumeInfo.previewLink}><button className="btn">Now Read!</button></a>
                        <a target="_blank" rel="noreferrer" href={book.volumeInfo.infoLink}><button className="btn">More Info!</button></a>
                    </div>
                    <div className="book-published">Published On : {book.volumeInfo.publishedDate}</div>
                </div>
                </>
            )}
        </div>
    )
}

export default BookDetail;