import { useState } from "react";
import BookDetail from "./BookDetail";
import MoreBooks from "./MoreBooks";

let BookList = ({searchedTerm, searchResults}) => {
    let [currentlyOpenBook, setCurrentlyOpenBook] = useState({});

    return (
        <div className="books-container">
            <BookDetail book={currentlyOpenBook} />
            <MoreBooks openBook={setCurrentlyOpenBook}
             searchedTerm={searchedTerm}
             searchResults={searchResults} />
        </div>
    )
}

export default BookList;