import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistTracks, onRemove, onNameChange, onSave }) {

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <h2>Playlist</h2><br />
      <p>Enter a playlist name, then save to your Spotify account:</p><br />
      <input onChange={handleNameChange} placeholder={'Playlist name'} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;