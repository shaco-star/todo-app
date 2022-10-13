import React from "react";
import checkImage from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";

function Item({ id, completeState, todo, handleComplete, handleDelete }) {
  console.log(completeState);
  return (
    <div className="items">
      <div className="item__wrapper">
        <div
          className={
            !completeState ? "complete check__complete" : "check__complete"
          }
          onClick={() => handleComplete(id)}
        >
          <img src={checkImage} alt="check complete icon" />
        </div>
        <p className="item">{todo}</p>
        <img
          src={crossIcon}
          alt="delete todo icon"
          className="cross"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}

export default Item;
