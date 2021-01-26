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
  componentDidMount(props) {
    this.getArtists();
    this.getSongs();
    this.getUser();
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

  getUser = async() => {
    var profile = []; 
    if (this.props.token) {
      await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.props.token,
        }
      }).then(results => results.json()).then(results => profile = results);
    }
    this.setState({profile: profile})
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
      return(
        <div className="flexRow">
          <div className="flexColumn">  
            <h2>Top Artists</h2>
            <ol className="leftAlign">
            {this.state.artists.length !== 0 ? this.state.artists.map((x) => (
              <li>{x.name}</li>
            )): <p>No artists yet, please log in</p>}
            </ol>

          </div>
          <div className="flexColumn">
            <h2>Top Songs</h2>
            <ol className="leftAlign">
              {this.state.songs.length !== 0 ? this.state.songs.map((x) => (
                <li>{x.name}</li>
              )): <p>No Songs, please log in</p>}
            </ol>
          </div>
          <div className="flexColumn">
            <h2>User Info</h2>
            <form className="leftAlign">
              <label>
                Location:  
                <input type="text" name="name" />
              </label>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )
    }

}

export default SpotifyInformation;
