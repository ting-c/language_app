import React from 'react';
import './OverviewPage.styles.scss';
import OverviewIcon from "../../components/Overview-Icon/Overview-Icon";

const OverviewPage = () => (
	<div className="OverviewPage">
		<div className="overview-map">
			<OverviewIcon
				className="overview-Icon"
				title="Number"
				id="number"
			/>
		</div>
	</div>
);

export default OverviewPage;
