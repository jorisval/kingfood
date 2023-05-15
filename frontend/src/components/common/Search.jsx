import { useContext } from "react";
import { useState } from "react";
import { HeaderContext } from "../utils/context";
import { Link } from "react-router-dom";
import { ItemSkeletonLoader } from "../styles/Layouts";

function Search() {
    const { favoriteItemIds, setFavoriteItemIds } = useContext(HeaderContext);
    const [isLoading, setIsloading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    
    const handleSearchContentCloseClick = () => {
        setSearchResults([]);
        setHasSearched(false);
        document.querySelector('.search-content').classList.remove('show');
        document.querySelector('.search .background').style.display = 'none';
    };

    async function handleSearchSubmit(event) {
        event.preventDefault();
        setIsloading(true);
        const searchText = event.target.query.value;
        const response = await fetch(`http://localhost:3000/api/catalog/search?q=${searchText}`);
        const products = await response.json();
        setSearchResults(products);
        setIsloading(false);
        // Set hasSearched to true after a search is made
        setHasSearched(true);
    }

    const handleAddFavoriteClick = (itemId) => {
        if (favoriteItemIds.includes(itemId)) {
            // Remove itemId from array
            setFavoriteItemIds(favoriteItemIds.filter(id => id !== itemId));
        } else {
            // Add itemId to array
            setFavoriteItemIds([...favoriteItemIds, itemId]);
        }
    };

    const searchList = 
    <div className="search-content__products">
        {isLoading ? (Array.from({ length : 2 }).map((_, i) => <ItemSkeletonLoader key={i} />))
        : hasSearched 
            ? (searchResults.length > 0 
                ? searchResults.map((item, index) => {
                    return(
                        <div className="service" key={index}>
                            <div className="add-favorite" onClick={() => handleAddFavoriteClick(item._id)}>
                                <span className={`bi ${favoriteItemIds.includes(item._id) ? 'bi-heart-fill' : 'bi-heart'}`}></span>
                            </div>
                            <Link to={`/product/${item._id}`} onClick={handleSearchContentCloseClick}>
                                <div className="service__content">
                                    <img src={item.images[0]} alt=""/>
                                    <div className="part-one">
                                        <p>{item.category}</p>
                                        <div className="star-icons">
                                            {Array.from({ length: 5 }).map((_, i) => {
                                                const starIndex = i + 1;
                                                return (
                                                <span 
                                                    key={starIndex} 
                                                    className={`bi bi-star${item.averageRating >= starIndex ? '-fill' : item.averageRating >= starIndex - 0.5 ? '-half' : ''}`}
                                                >
                                                </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <p>{item.name}</p>
                                    <span>PRICE  <span className="initial-price">${item.price}</span> ${item.discountedPrice}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })
                : <p className="no-result">No product corresponds to your search !</p>
            )
            : null
        }
    </div>;   

    return (
        <div className="search">
            <div className="background" onClick={handleSearchContentCloseClick}></div>
            <div className="search-content">
                <div className="search-content__header">
                    <span>Search</span>
                    <span className="bi bi-x" onClick={handleSearchContentCloseClick}></span>
                </div>
                <form onSubmit={handleSearchSubmit}>
                    <input type="search" id="search-text" name="query" placeholder="Search..."/>
                    <button type="submit"><span className="bi bi-search"></span></button>
                </form>
                {searchList}
            </div>
        </div>
    );
}

export default Search;