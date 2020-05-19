import React from 'react';
import './LessonContainer.styles.scss';
import number_sino from './../../data-store/lesson-data/number_sino';

const LessonContainer = () => {
  const { introduction, number_list} = number_sino;

  return (    
    <div className='LessonContainer'>
      <div className='introduction' >
        { introduction }
      </div>
      <div className='card-group'>
      { number_list.map( number => {
        const { numeral, korean_char, romanization } = number
        return (
          <div className='card'>
            <div>{numeral}</div>
            <div>{korean_char}</div>
            <div>{romanization}</div>
          </div>
        )})}
        </div>
    </div>
  )
};

export default LessonContainer;