export function SearchBar({ search, setSearch, favOnly, setFavOnly }) {
    return (
        <div className="search-container">
            <div className="search-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search here" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="fav-btn-wrapper">
                <button 
                    onClick={() => setFavOnly(!favOnly)}
                    className="fav-btn"
                    style={{ fontWeight: favOnly ? "bold" : "normal" }}
                >
                    Favorites
                </button>
            </div>
        </div>
    );
}
