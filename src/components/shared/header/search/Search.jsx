import "./Search.css";
const Search = () => {
  return (
    <>
      <div className="search-input-section">
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search for items..."
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
};

export default Search;
