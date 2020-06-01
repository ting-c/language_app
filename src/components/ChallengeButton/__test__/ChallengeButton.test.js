import React from 'react';
import ChallengeButton from '../ChallengeButton';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Challenge Button', () => {
  afterEach(() => {
    cleanup()
  });

  it('renders challenge button', () => {
    const { getByTestId } = render(<ChallengeButton />);
    expect(getByTestId('challenge-button')).toBeTruthy();
  });


  it('fires toggleDisplayChallenge function only once when clicked', () => {
    const toggleDisplayChallenge = jest.fn();
    const { getByRole } = render(<ChallengeButton {...{ toggleDisplayChallenge }}/>);
    fireEvent.click(getByRole('button'));
    expect(toggleDisplayChallenge).toHaveBeenCalledTimes(1);
  });
  
});