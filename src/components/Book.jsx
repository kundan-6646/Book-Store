
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
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
    )
}

export default Book;