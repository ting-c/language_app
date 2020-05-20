import React from 'react';
import './LessonContainer.styles.scss';
import CardGroup from './../CardGroup/CardGroup';

const LessonContainer = ({lesson}) => {
  const { introduction, number_list} = lesson;

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