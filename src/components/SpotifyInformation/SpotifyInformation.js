import React from 'react';
import PropTypes from 'prop-types';
import './SpotifyInformation.css';

export class SpotifyInformation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      songs: []
    }
  }
  componentDidMount() {
    this.getArtists();
    this.getSongs();
  }
  getArtists = async() => {
    var artists = []; 
    if (this.props.token) {
      await fetch('https://api.spotify.com/v1/me/top/artists', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.props.token,
        }
      }).then(results => results.json()).then(results => artists = results.items);
    }
    this.setState({artists: artists})
  }

  getSongs = async() => {
    var songs = []; 
    if (this.props.token) {
      await fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.props.token,
        }
      }).then(results => results.json()).then(results => songs = results.items);
    }
    this.setState({songs: songs})
  }

  render() {
      return(
        <div className="flexRow">
          <div className="flexColumn">  
            <h2>Top Artists</h2>
            {this.state.artists.length !== 0 ? this.state.artists.map((x) => (
              <p>{x.name}</p>
            )): <p>No artists yet, please log in</p>}
          </div>
          <div className="flexColumn">
            <h2>Top Songs</h2>
            {this.state.songs.length !== 0 ? this.state.songs.map((x) => (
              <p>{x.name}</p>
            )): <p>No Songs, please log in</p>}
          </div>

        </div>
      )
    }

}

export default SpotifyInformation;
