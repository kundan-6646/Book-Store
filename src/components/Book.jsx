import imageNotFound from '../images/img-not-found.png';

let Book = ({book, openBook}) => {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }

    return (
        <div className="book-card" onClick={() => {
            openBook(book);
            scrollToTop();
        }} title="see more">
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : imageNotFound} alt={book.volumeInfo.title} />
        </div>
    )
}

export default Book;