import React from "react";
import "./ChallengeContent.styles.scss";

const ChallengeContent = ({ content }) => (
	<div className="ChallengeContent">
    <div>{content.numeral}</div>
	</div>
);

export default ChallengeContent;
