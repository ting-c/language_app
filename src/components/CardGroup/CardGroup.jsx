import React from "react";
import "./CardGroup.styles.scss";
import UIfx from "uifx";


const CardGroup = ({ list, skill_id, top, middle, bottom }) => {
	return (
		<div className="CardGroup">
			{ list.map((item) => {
					const item_id = item.id;
					
					const handleClick =  async (skill_id, item_id) => {
						const noSound = ['basic_consonants'];
						if (noSound.includes(skill_id)) return;

						const soundFile = await import(`../../data-store/audio/${skill_id}/${item_id}.wav`);
						const pronunciation = new UIfx(soundFile.default, {
							volume: 1,
						});
						pronunciation.play();
					}

					return (
						<div className="card" key={item.id} onClick={() => handleClick(skill_id, item_id)}>
							<div className="card-top">{item[top]}</div>
							<div className="card-middle">{item[middle]}</div>
							<div className="card-bottom">{item[bottom]}</div>
						</div>
					)
			})}
		</div>
	);
};

export default CardGroup;
