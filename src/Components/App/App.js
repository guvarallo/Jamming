import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    
  })

  function addTrack(track) {
    if (playlistTracks.find(el => el.id === track.id)) {
      alert('Track already in the playlist');
      return;
    }
    setPlaylistTracks(playlist => [...playlist, track]);
  }

  function removeTrack(track) {
    let result = playlistTracks.filter(el => el.id !== track.id);
    setPlaylistTracks(result);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
    .then(setPlaylistName('New Playlist'))
    .then(setPlaylistTracks([]))
    .then(alert('Playlist successfully saved to your library!'));
  }

  function search(term) {
    Spotify.search(term).then(result => setSearchResults(result));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack} 
            onNameChange={updatePlaylistName} 
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
