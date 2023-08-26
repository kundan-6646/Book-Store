import './App.css';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import { useEffect, useState } from 'react';

let App = () => {
    const [harryPotterBooks, setHarryPotterBooks] = useState([]);
    const [sherlockHolmesBooks, setSherlockHolmesBooks] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    //Fetching harry+potter and Sherlock+Holmes
    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
          .then(response => response.json())
          .then(data => {
            setHarryPotterBooks(data.items || []);
          })
          .catch(error => {
            console.error('An error occurred while fetching Harry Potter books:', error);
          });
    
        fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
          .then(response => response.json())
          .then(data => {
            setSherlockHolmesBooks(data.items || []);
          })
          .catch(error => {
            console.error('An error occurred while fetching Sherlock Holmes books:', error);
          });
    }, []);
    
    //search books func
    const handleSearch = async (searchTerm) => {
        if (searchTerm.trim() !== '') {
          try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.items || []);
          } catch (error) {
            console.error('An error occurred while fetching search results:', error);
          }
        }
    };

    return (
        <>
            <NavBar searchBooks={handleSearch} />
            <BookList harryPotterBooks={harryPotterBooks}
             sherlockHolmesBooks={sherlockHolmesBooks} 
             searchResults={searchResults}   
             />
        </>
    )
}

export default App;