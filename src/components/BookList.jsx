import { useState } from "react";
import BookDetail from "./BookDetail";
import MoreBooks from "./MoreBooks";

let BookList = ({harryPotterBooks, sherlockHolmesBooks, searchResults}) => {
    let [currentlyOpenBook, setCurrentlyOpenBook] = useState({});

    return (
        <div className="books-container">
            <BookDetail book={currentlyOpenBook} />
            <MoreBooks openBook={setCurrentlyOpenBook}
             harryPotterBooks={harryPotterBooks}
             sherlockHolmesBooks={sherlockHolmesBooks} 
             searchResults={searchResults} />
        </div>
    )
}

export default BookList;