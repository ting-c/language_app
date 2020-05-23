import React from 'react';
import './Overview-Icon.styles.scss';
import { Link } from 'react-router-dom';
import OverviewIconImageGrey from "./../../img/overview-icon-grey.png";
import OverviewIconImage from "./../../img/overview-icon.png";

const OverviewIcon = ({ title, link, completed }) => {
	const iconImage = completed ? OverviewIconImage : OverviewIconImageGrey;

	return (
	<div className="OverviewIcon">
		<Link to={link}>
			<img
				className="overview-icon-image"
				src={iconImage}
				alt="overview icon incomplete"
			/>
			<div className="overview-icon-title">{title}</div>
		</Link>
	</div>
)};

export default OverviewIcon;