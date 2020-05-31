import React from 'react';
import ReactDOM from 'react-dom';
import BackButton from '../BackButton';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('BackButton', () => {
  it('renders BackButton without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BackButton></BackButton>, div);
  });

  it('renders the correct button', () => {
    const {getByTestId } = render(<BackButton></BackButton>);
    expect(getByTestId('back-button')).toBeTruthy();
  });
})