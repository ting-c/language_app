import React, { useContext } from 'react';
import './Avatar.styles.scss';
import avatar from "./../../img/avatar.png";
import avatar_circle from '../../img/avatar-circle.png';
import { UserContext } from '../../providers/user_provider';

const Avatar = () => {

  const { currentUser } = useContext(UserContext);
  const initial = currentUser ? currentUser.name.split('')[0] : null;

  return (    
    <div className='avatar'>
      { initial ? (
        <div className='avatar-container'>
          <img src={avatar_circle} alt='avatar-circle' className='avatar-circle' />
          <span className='initial'>{initial}</span>
        </div>
        ) : (
        <div className='avatar-container'>
          <img src={avatar} alt='avatar ' className='avatar' />
        </div>
        )
      }   
    </div>
  )
};

export default Avatar;