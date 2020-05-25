import React from 'react';
import './OverviewButton.styles.scss';
import { Link } from 'react-router-dom';

const OverviewButtonContainer = () => (
	<div className="overview-button">
		<Link to="/overview">
			<button className="overview-button">Overview</button>
		</Link>
	</div>
);

export default OverviewButtonContainer;