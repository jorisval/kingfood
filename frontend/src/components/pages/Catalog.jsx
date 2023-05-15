import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { CatalogContainer, SkeletonLoader } from "../styles/Catalog";

function Catalog() {
    const { setActivePage, favoriteItemIds, setFavoriteItemIds  } = useContext(HeaderContext);
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);
    const [selectedCategoryData, setSelectedCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
    const categories = [
        "ALL CATEGORIES",
        "BURGER",
        "PIZZA",
        "BLUEBERRY SHAKE",
        "CHIKKEN COUP",
        "ICE CREAM",
        "DRUNK"
    ];

    const[showCount, setShowCount] = useState(6);
    const handleClick = () => {
        setShowCount(showCount + 6);
    }
    
    useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
            if (selectedCategory === "ALL CATEGORIES") {
            setCatalogViewData(data.slice(0, showCount));
            setSelectedCategoryData(data)
        } else {
            const filteredData = data.filter(product => product.category === selectedCategory);
            setSelectedCategoryData(filteredData);
            setCatalogViewData(filteredData.slice(0, showCount));
        }
    }
    }, [data, selectedCategory, showCount]);


    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);
    
    const handleAddFavoriteClick = (itemId) => {
        if (favoriteItemIds.includes(itemId)) {
            // Remove itemId from array
            setFavoriteItemIds(favoriteItemIds.filter(id => id !== itemId));
        } else {
            // Add itemId to array
            setFavoriteItemIds([...favoriteItemIds, itemId]);
        }
    };

    return(
        <CatalogContainer className="catalog">
            <div className="services-section__header">
                <p className="subtitle">Choose and Try</p>
                <h2>FROM OUR MENU</h2>
                <div className="category-buttons">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`cta-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => {setSelectedCategory(category); setShowCount(6)}}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="services-section catalog-services">
                <div className="services">
                    {dataIsLoading
                        ? Array.from({ length: showCount }).map((_, i) => <SkeletonLoader key={i} />)
                        : catalogViewData.length > 0 ? (catalogViewData.map((product, index) => {
                                return(
                                    <div className="service" 
                                    key={index}
                                    >
                                        <div className="add-favorite" onClick={() => handleAddFavoriteClick(product._id)}>
                                            <span className={`bi ${favoriteItemIds.includes(product._id) ? 'bi-heart-fill' : 'bi-heart'}`}></span>
                                        </div>
                                        <Link to={`/product/${product._id}`}>
                                            <div className="service__content">
                                                <img src={product.images[0]} alt=""/>
                                                <div className="part-one">
                                                    <p>{product.category}</p>
                                                    <div className="star-icons">
                                                        {Array.from({ length: 5 }).map((_, i) => {
                                                            const starIndex = i + 1;
                                                            return (
                                                            <span 
                                                                key={starIndex} 
                                                                className={`bi bi-star${product.averageRating >= starIndex ? '-fill' : product.averageRating >= starIndex - 0.5 ? '-half' : ''}`}
                                                            >
                                                            </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <p>{product.name}</p>
                                                <span>PRICE  <span className="initial-price">${product.price}</span> ${product.discountedPrice}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        })) : (
                            <div className="not-found">
                                <h3>No menu available right now in the selected category!</h3>
                            </div>
                        )
                    }
                </div>
                {showCount < selectedCategoryData?.length && (
                    <button className="cta-button" onClick={handleClick}>Show More</button>
                )}
            </div>
        </CatalogContainer>
    );
}

export default Catalog;