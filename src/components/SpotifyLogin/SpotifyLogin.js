import React from 'react';
import PropTypes from 'prop-types';
import './SpotifyLogin.css';
import {SpotifyAuth, Scopes} from 'react-spotify-auth';

export function SpotifyLogin(props) {
  return(
    <div className="SpotifyLogin" data-testid="SpotifyLogin">
      <SpotifyAuth
        redirectUri='http://localhost:3000/callback'
        clientID='ba923a6b16df4daa9f48a991e9df37a3'
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail, Scopes.userTopRead]}
      />
    </div>
  );

}

SpotifyLogin.propTypes = {};

SpotifyLogin.defaultProps = {};

export default SpotifyLogin;
