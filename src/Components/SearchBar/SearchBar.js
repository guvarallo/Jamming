import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {

  function handleTermChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}

export default SearchBar;