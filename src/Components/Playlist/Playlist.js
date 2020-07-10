import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={'My Playlist'} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;