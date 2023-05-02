
function Search() {
    
    const handleSearchContentCloseClick = () => {
        document.querySelector('.search-content').classList.remove('show');
        document.querySelector('.search .background').style.display = 'none';
    };
    
    const handleSearchBackgroundClick = () => {
        document.querySelector('.search-content').classList.remove('show');
        document.querySelector('.search .background').style.display = 'none';
    };

    async function handleSearchSubmit(event) {
        event.preventDefault();
    }
    
    const searchList = "";

    return (
        <div className="search">
            <div className="background" onClick={handleSearchBackgroundClick}></div>
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