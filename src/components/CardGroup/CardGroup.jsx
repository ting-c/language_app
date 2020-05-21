import React from "react";
import "./CardGroup.styles.scss";

const CardGroup = ({ list, top, middle, bottom }) => {

	return (
		<div className="card-group">
			{list.map((item) => {
				return (
					<div className="card" key={item.id}>
						<div>{item[top]}</div>
						<div>{item[middle]}</div>
						<div>{item[bottom]}</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardGroup;
