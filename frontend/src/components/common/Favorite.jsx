
function Favorite() {
    
    const handleFavoriteContentCloseClick = () => {
        document.querySelector('.favorite-content').classList.remove('show');
        document.querySelector('.favorite .background').style.display = 'none';
    };
    
    const handleFavoriteBackgroundClick = () => {
        document.querySelector('.favorite-content').classList.remove('show');
        document.querySelector('.favorite .background').style.display = 'none';
    };   
    
    const favoriteList = "";

    return (
        <div className="favorite">
            <div className="background" onClick={handleFavoriteBackgroundClick}></div>
            <div className="favorite-content">
                <div className="favorite-content__header">
                    <span>Favorites</span>
                    <span className="bi bi-x" onClick={handleFavoriteContentCloseClick}></span>
                </div>
                {favoriteList}
            </div>
        </div>
    );
}

export default Favorite;