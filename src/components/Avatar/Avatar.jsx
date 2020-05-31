import React, { useContext } from 'react';
import './Avatar.styles.scss';
import avatar from "./../../img/avatar.png";
import avatar_circle from '../../img/avatar-circle.png';
import { UserContext } from '../../providers/user_provider';

const Avatar = () => {

  const { currentUser } = useContext(UserContext);
  const initial = currentUser ? currentUser.name.split('')[0] : null;

  return (    
    <div className='avatar' data-testid='avatar'>
      { initial ? (
        <div className='avatar-container' data-testid='avatar-has-user'>
          <img src={avatar_circle} alt='avatar-circle' className='avatar-circle' />
          <span className='initial' data-testid='initial'>{initial}</span>
        </div>
        ) : (
        <div className='avatar-container' data-testid='avatar-no-user'>
          <img src={avatar} alt='avatar ' className='avatar' />
        </div>
        )
      }   
    </div>
  )
};

export default Avatar;