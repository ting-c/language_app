import React from "react";
import "./ChallengeContent.styles.scss";

const ChallengeContent = ({ content, contentType }) => (
	<div className="ChallengeContent">
		<div>{content[contentType] }</div>
	</div>
);

export default ChallengeContent;
