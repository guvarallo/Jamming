import clientIdConfig from './ClientId';

const clientId = clientIdConfig.clientId;
const redirectUri = 'http://spurious-moon.surge.sh';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }))
      })
  },

  savePlaylist(name, uris) {
    if (!name || !uris.length) {
      return;
    }

    const token = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    let id;
    
    return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
            .then(response => response.json())
            .then(jsonResponse => {
              id = jsonResponse.id;
              return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
              }).then(response => response.json())
                .then(jsonResponse => {
                  const playlistId = jsonResponse.id;
                  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: uris})
                  })
                })
            });
  }
}

export default Spotify;