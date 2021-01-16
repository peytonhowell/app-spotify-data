import './App.css';
import {SpotifyAuth, Scopes} from 'react-spotify-auth';
import React from 'react';
import Cookies from 'js-cookie'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: Cookies.get('spotifyAuthToken'),
    }
  }

  componentDidMount() {
    this.getArtists();
  }
  getArtists = async() => {
    var artists = []; 
    if (this.state.token) {
      await fetch('https://api.spotify.com/v1/me/top/artists', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.state.token,
        }
      }).then(results => results.json()).then(results => artists = results.items);
    }
    this.setState({artists: artists})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Spotify ML App</h1>
        </header>
        <body className="App-body">
          {this.state.token == null ?
          <SpotifyAuth
            redirectUri='http://localhost:3000/callback'
            clientID='ba923a6b16df4daa9f48a991e9df37a3'
            scopes={[Scopes.userReadPrivate, Scopes.userReadEmail, Scopes.userTopRead]}
          />: 'Authenticated with key ' + this.state.token}
          <br></br>
          <h2>Top Artists</h2>
          {this.state.artists!=null ? this.state.artists.map((x) => (
            <p>{x.name}</p>
          )): <p>No artists</p>}
        </body>
      </div>
    );
  }
}
export default App;