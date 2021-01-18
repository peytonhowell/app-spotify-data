import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SpotifyInformation from './SpotifyInformation';

describe('<SpotifyInformation />', () => {
  test('it should mount', () => {
    render(<SpotifyInformation />);
    
    const spotifyInformation = screen.getByTestId('SpotifyInformation');

    expect(spotifyInformation).toBeInTheDocument();
  });
});