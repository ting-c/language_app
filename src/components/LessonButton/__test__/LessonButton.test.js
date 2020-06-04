import React from 'react';
import LessonButton from '../LessonButton';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Lesson Button', () => {
  afterEach(() => {
    cleanup()
  });

  it('renders Lesson button', () => {
    const { getByTestId } = render(<LessonButton />);
    expect(getByTestId('lesson-button')).toBeTruthy();
  });


  it('fires toggleDisplayChallenge function only once when clicked', () => {
    const toggleDisplayChallenge = jest.fn();
    const { getByRole } = render(<LessonButton {...{ toggleDisplayChallenge }} />);
    fireEvent.click(getByRole('button'));
    expect(toggleDisplayChallenge).toHaveBeenCalledTimes(1);
  });

});