import React from 'react';
import Avatar from '../Avatar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserContext } from '../../../providers/user_provider';

describe('Avatar', () => {

  it('render avatar-no-user when CurrentUser is null', () => {
    const { getByTestId } = render (
      <UserContext.Provider value={{currentUser: null}}>
        <Avatar />
      </UserContext.Provider>
    );
    expect(getByTestId('avatar-no-user')).toBeTruthy();
  });

  it('render avatar-has-user when CurrentUser is not null', () => {
    const { getByTestId } = render (
      <UserContext.Provider value={{currentUser: {name: 'testing'} }}>
        <Avatar />
      </UserContext.Provider>
    );
    expect(getByTestId('avatar-has-user')).toBeTruthy();
  });

  it('Avatar displays the initial span when currentUser is not null', () => {
    const { getByTestId } = render (
      <UserContext.Provider value={{currentUser: {name: 'testing'} }}>
        <Avatar />
      </UserContext.Provider>
    );
    expect(getByTestId('initial')).toBeTruthy();
  });

  it('Avatar displays the correct initial of currentUser', () => {
    const { getByText } = render (
      <UserContext.Provider value={{currentUser: {name: 'testing'} }}>
        <Avatar />
      </UserContext.Provider>
    );
    expect(getByText('t')).toBeTruthy();
  });

});