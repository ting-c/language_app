import React from "react";
import "./NewsCard.styles.scss";

const NewsCard = ({ title, imgUrl }) => {
  return (
		<div className="news-card">
			<img className='card-img' src={imgUrl} alt={title}/>
			<div className='card-title'>{title}</div>
		</div>
	);
};

export default NewsCard;
