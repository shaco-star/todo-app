import React from "react";
import Nav from "./Nav";

function BottomContainer({left,active,showComplete,showAll,showActive,clearCompleted}) {
  
  return (
    <div className="bottom__wrapper">
      <div>{left} items left</div>
      <Nav active={active}
      showAll={showAll}
      showActive={showActive}
      showComplete={showComplete}
      />
      <div className="clear" onClick={clearCompleted}>Clear Completed</div>
    </div>
  );
}

export default BottomContainer;
