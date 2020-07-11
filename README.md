# Jamming

It uses Spotify's API to search for songs, albuns or artists, and create your own playlist.

Test it live at: https://jammingcode-app.surge.sh/ 

## Getting Started

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

### Prerequisites

1. You will need to generate a Client ID at https://developer.spotify.com/ 
2. If you want to deploy, you will need to change the redirectUri in Spotify.js file to your own domain. To just test it locally, change to localhost:3000. You will also need to add your domain in the Spotify settings of your app, under Redirect URIs, in order to work correctly.

## Built With

* [React](https://reactjs.org/)
* [Surge](https://surge.sh/) - Used to deploy
* [React Spinners](https://github.com/davidhu2000/react-spinners) - Used for loading effects
* [SweetAlert](https://sweetalert.js.org/) - Used for alert box
