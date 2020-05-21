import React from 'react';
import './LessonContainer.styles.scss';
import CardGroup from './../CardGroup/CardGroup';

const LessonContainer = ({lesson, listName, cardProps}) => {

  const introduction = lesson.introduction;
  const list = lesson[listName]

  return (    
    <div className='LessonContainer'>
      <div className='introduction' >
        { introduction }
      </div>
      <CardGroup {...{list}} {...cardProps}/>
    </div>
  )
};

export default LessonContainer;