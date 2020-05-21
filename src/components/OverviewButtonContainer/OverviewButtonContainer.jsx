import React from 'react';
import './OverviewButtonContainer.styles.scss';
import { Link } from 'react-router-dom';

const OverviewButtonContainer = () => (
	<div className="OverviewButtonContainer">
		<Link to="/overview">
			<button className="overview-button">Overview</button>
		</Link>
	</div>
);

export default OverviewButtonContainer;