import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <p>Click on the "+" sign to add songs to your playlist:</p><br />
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;