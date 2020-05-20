import React from "react";
import "./CardGroup.styles.scss";

const CardGroup = ({number_list}) => {
  return (
    <div className="card-group">
      {number_list.map((number) => {
        const { id, numeral, korean_char, romanization } = number;

        return (
          <div className="card" key={id}>
            <div>{numeral}</div>
            <div>{korean_char}</div>
            <div>{romanization}</div>
          </div>
        );
      })}
  </div>
  )
};

export default CardGroup;
