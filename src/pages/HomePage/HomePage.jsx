import React from "react";
import './HomePage.styles.scss';
import SkillIcon from './../../components/Skill-Icon/Skill-Icon';

const HomePage = () => (
  <div className="HomePage">
    <div className='SkillMap'>
      <SkillIcon title='Number 1'/>
      <SkillIcon title='Number 2'/>
      <SkillIcon title='Number 3'/>
    </div>
  </div>
);

export default HomePage;
