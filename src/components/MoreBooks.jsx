import Book from "./Book";

let MoreBooks = ({searchedTerm, searchResults, openBook}) => {
    return (
        <>
            <h2>Showing results for <span className="highlight">{searchedTerm}</span></h2>
            <div className="books-list">
                {searchResults.map((book) => {
                    return (<Book openBook={openBook} book={book} key={book.id} />)
                })}
            </div>
        </>
    )
}


export default MoreBooks;