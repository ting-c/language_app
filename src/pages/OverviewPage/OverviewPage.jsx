import React, { useContext } from 'react';
import './OverviewPage.styles.scss';
import OverviewIcon from "../../components/Overview-Icon/Overview-Icon";
import { ProgressContext } from "../../providers/progress_provider";

const OverviewPage = () => {
	const { allNumberCompleted, allAlphabetCompleted } = useContext(ProgressContext);
	
	return (
	<div className="OverviewPage">
		<div className="overview-map">
			<OverviewIcon
				className="overview-Icon"
				title="Alphabet"
				link='/alphabet'
				completed={allAlphabetCompleted}
			/>
			<OverviewIcon
				className="overview-Icon"
				title="Number"
				link='/number'
				completed={allNumberCompleted}
			/>
		</div>
	</div>
)};

export default OverviewPage;
