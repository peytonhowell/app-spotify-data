import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SpotifyLogin from './SpotifyLogin';

describe('<SpotifyLogin />', () => {
  test('it should mount', () => {
    render(<SpotifyLogin />);
    
    const spotifyLogin = screen.getByTestId('SpotifyLogin');

    expect(spotifyLogin).toBeInTheDocument();
  });
});