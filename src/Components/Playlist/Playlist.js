import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import ScaleLoader from "react-spinners/ScaleLoader";

function Playlist({ playlistTracks, onRemove, onNameChange, onSave, isLoading }) {

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      {isLoading ?
        <ScaleLoader
          color={"white"}
          height={50}
          width={10}
        />
      :
        <div>
          <p>Enter a playlist name, then save to your Spotify account:</p><br />
          <input onChange={handleNameChange} placeholder={'Playlist name'} />
          <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} /><br />
          <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      }
    </div>
  );
}

export default Playlist;