import BrandImage from '../images/brand.png';
import heartIcon from '../images/heart-icon.png';
import diamondIcon from '../images/diamond-icon.png';
import userIcon from '../images/user.png';
import notificationIcon from '../images/notification-icon.png';
import { useState } from 'react';


let NavBar = (props) => {
    let placeholderText = 'Search for the book you want and read it now... Sherlock Holmes, Harry Pot...';
    let [searchValue, setSearchValue] = useState('');

    function handleInput(e) {
        setSearchValue(e.target.value);
    }
    return (
        <nav>
            <div className="nav-item navbar-brand">
                <img src={BrandImage} alt="brand" />
                <span className="brand-name">KeazoN<span className="light">BOOKS</span></span>
            </div>

            <div className="nav-item search-bar-parent">
                <div className='search-bar'>
                    <span className="material-icons">search</span>
                    <input type='text' placeholder={placeholderText} onChange={handleInput} value={searchValue} />
                </div>
                
                <button className='btn' onClick={() => {
                    props.searchBooks(searchValue);
                }}>Search</button>
            </div>

            <div className="nav-item nav-icons">
                <img src={heartIcon} alt='heart' />
                <img src={notificationIcon} alt='notifications' />
                <img src={diamondIcon} alt='diamond' />
                <img src={userIcon} alt='user' />
            </div>
        </nav>
    )
}

export default NavBar;