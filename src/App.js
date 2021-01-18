import './App.css';
import {SpotifyAuth, Scopes} from 'react-spotify-auth';
import React from 'react';
import Cookies from 'js-cookie';
import SpotifyLogin from './components/SpotifyLogin/SpotifyLogin';
import SpotifyInformation from './components/SpotifyInformation/SpotifyInformation';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: Cookies.get('spotifyAuthToken'),
    }
  }
  componentDidMount() {
    this.setState({token: Cookies.get('spotifyAuthToken')});
    console.log(this.state.token + " token")

  }

  render() {
    let spotifyInformation;
    if (this.state.token != null && this.state.token.length > 20) {
      spotifyInformation = <SpotifyInformation token={this.state.token}/>;
    } else {
      spotifyInformation = <SpotifyLogin/>;

    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Spotify ML App</h1>
        </header>
        <body className="App-body">
          {spotifyInformation}
        </body>
      </div>
    );
  }
}
export default App;