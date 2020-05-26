import React from 'react';
import './LessonContainer.styles.scss';
import CardGroup from './../CardGroup/CardGroup';

const LessonContainer = ({lesson, skill_id , cardProps}) => {

  const introduction = lesson.introduction;
  const list = lesson.list

  return (    
    <div className='LessonContainer'>
      <div className='introduction' >
        { introduction }
      </div>
      <CardGroup {...{ list, skill_id }} {...cardProps} />
    </div>
  )
};

export default LessonContainer;