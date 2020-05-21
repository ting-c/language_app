import React from "react";
import "./CardGroup.styles.scss";

const CardGroup = ({ list, top, middle, bottom }) => {

	return (
		<div className="CardGroup">
			{list.map((item) => {
				return (
					<div className="card" key={item.id}>
						<div className="card-top">{item[top]}</div>
						<div className="card-middle">{item[middle]}</div>
						<div className="card-bottom">{item[bottom]}</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardGroup;
