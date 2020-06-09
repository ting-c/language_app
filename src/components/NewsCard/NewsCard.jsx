import React from "react";
import "./NewsCard.styles.scss";

const NewsCard = ({ title, urlToImage, url }) => {
  return (
		<div className="news-card">
			<a href={url}>
				<img className='card-img' src={urlToImage} alt={title}/>
				<div className='card-title'>{title}</div>
			</a>
		</div>
	);
};

export default NewsCard;
