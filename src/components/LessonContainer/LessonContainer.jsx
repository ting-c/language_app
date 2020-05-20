import React from 'react';
import './LessonContainer.styles.scss';
import number_sino from '../../data-store/number_sino/number_sino';
import CardGroup from './../CardGroup/CardGroup';

const LessonContainer = () => {
  const { introduction, number_list} = number_sino;

  return (    
    <div className='LessonContainer'>
      <div className='introduction' >
        { introduction }
      </div>
      <CardGroup number_list={number_list}/>
    </div>
  )
};

export default LessonContainer;