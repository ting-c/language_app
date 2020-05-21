import React from 'react';
import './Overview-Icon.styles.scss';
import { Link } from 'react-router-dom';
import OverviewIconImageGrey from "./../../img/overview-icon-grey.png";

const OverviewIcon = ({ title, id }) => (
	<div className="OverviewIcon">
		<Link to={`skill/${id}`}>
			<img
				className="overview-icon-image-grey"
				src={OverviewIconImageGrey}
				alt="overview icon incomplete"
			/>
			<div className="overview-icon-title">{title}</div>
		</Link>
	</div>
);

export default OverviewIcon;