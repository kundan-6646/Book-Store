import Book from "./Book";

let MoreBooks = ({harryPotterBooks, sherlockHolmesBooks, searchResults, openBook}) => {
    return (
        <>
            <h2>More Books Like This</h2>
            <div className="books-list">
                {searchResults.map((book) => {
                    return (<Book openBook={openBook} book={book} key={book.id} />)
                })}

                {harryPotterBooks.map((book) => {
                    return (<Book openBook={openBook} book={book} key={book.id} />)
                })}

                {sherlockHolmesBooks.map((book) => {
                    return (<Book openBook={openBook} book={book} key={book.id} />)
                })}
            </div>
        </>
    )
}


export default MoreBooks;