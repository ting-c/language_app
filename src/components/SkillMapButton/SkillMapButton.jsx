import React from 'react';
import './SkillMapButton.styles.scss';
import { Link } from 'react-router-dom';

const SkillMapButton = () => (
  <Link to="/learn">
    <button className="SkillMapButton">Skill Map</button>
  </Link>
);

export default SkillMapButton;