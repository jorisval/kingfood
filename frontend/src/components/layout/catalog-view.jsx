import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";
function CatalogView() {
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);


    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
        setCatalogViewData(data.slice(0, 3));
        }
    }, [data]);

    return (
        <CatalogViewContainer className="services-section">
            <div className="services-section__header">
                <p className="subtitle">Choose and Try</p>
                <h2>FROM OUR MENU</h2>
                <div className="category-buttons">
                    <button className="cta-button">ALL CATEGORIES</button>
                    <button className="cta-button">BURGER</button>
                    <button className="cta-button">PIZZA</button>
                    <button className="cta-button">BLUEBERRY SHAKE</button>
                    <button className="cta-button">CHIKKEN COUP</button>
                    <button className="cta-button">ICE CREAM</button>
                    <button className="cta-button">DRUNK</button>
                </div>
            </div>
            <div className="services">
                { dataIsLoading ? 
                    Array.from({ length : 3 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (catalogViewData.map((product, index) => {
                        return(
                            <div className="service" 
                            key={index}
                            >
                                <Link to={`/product/${product._id}`}>
                                    <div className="service__content">
                                        <img src={product.images[0]} alt=""/>
                                        <div className="part-one">
                                            <p>{product.category}</p>
                                            <div className="star-icons">
                                                <span className="bi bi-star"></span>
                                                <span className="bi bi-star"></span>
                                                <span className="bi bi-star"></span>
                                                <span className="bi bi-star"></span>
                                                <span className="bi bi-star"></span>
                                            </div>
                                        </div>
                                        <p>{product.name}</p>
                                        <span>PRICE  <span className="initial-price">${product.price}</span> ${product.discountedPrice}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    }))
                }
            </div>
            <Link to='/catalog' className="cta-button">SEE ALL PRODUCTS</Link>
        </CatalogViewContainer>
    );
}

export default CatalogView;
