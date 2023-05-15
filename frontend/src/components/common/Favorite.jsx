import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useContext, useState ,useEffect } from "react";
import { ItemSkeletonLoader } from "../styles/Layouts";
function Favorite() {
    const { favoriteItemIds, setFavoriteItemIds } = useContext(HeaderContext);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        if (favoriteItemIds.length > 0) {
            setIsloading(true);
            const fetchProducts = async () => {
                const requests = favoriteItemIds.map((id) =>
                fetch(`http://localhost:3000/api/catalog/${id}`).then((res) => res.json())
                );
                const products = await Promise.all(requests);
                setProducts(products);
                setIsloading(false);
            };
            fetchProducts();
        } else {
            setIsloading(false);
        }
    }, [favoriteItemIds]);

    const handleFavoriteContentCloseClick = () => {
        document.querySelector('.favorite-content').classList.remove('show');
        document.querySelector('.favorite .background').style.display = 'none';
    };
    
    const handleAddFavoriteClick = (itemId) => {
        if (favoriteItemIds.includes(itemId)) {
            // Remove itemId from array
            setFavoriteItemIds(favoriteItemIds.filter(id => id !== itemId));
        } else {
            // Add itemId to array
            setFavoriteItemIds([...favoriteItemIds, itemId]);
        }
    };
    
    const favoriteList = 
        <div className="favorite-content__products">
            {isLoading ? (Array.from({ length : 2 }).map((_, i) => <ItemSkeletonLoader key={i} />)
            ) : (
                products.map((item, index) => {
                    return(
                        <div className="service" 
                        key={index}
                        >   <div className="add-favorite" onClick={() => handleAddFavoriteClick(item._id)}>
                                <span className={`bi ${favoriteItemIds.includes(item._id) ? 'bi-heart-fill' : 'bi-heart'}`}></span>
                            </div>
                            <Link to={`/product/${item._id}`} onClick={handleFavoriteContentCloseClick}>
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
            )}
        </div>;

    return (
        <div className="favorite">
            <div className="background" onClick={handleFavoriteContentCloseClick}></div>
            <div className="favorite-content">
                <div className="favorite-content__header">
                    <span>Favorites</span>
                    <span className="bi bi-x" onClick={handleFavoriteContentCloseClick}></span>
                </div>
                {favoriteItemIds.length > 0 && favoriteList}
            </div>
        </div>
    );
}

export default Favorite;