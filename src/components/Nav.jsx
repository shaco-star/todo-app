import React from "react";

function Nav({ active, showAll, showActive, showComplete }) {
  return (
    <div className="nav">
      <ul>
        <li className={active === "all" ? "active" : ""} onClick={showAll}>
          All
        </li>
        <li
          className={active === "active" ? "active" : ""}
          onClick={showActive}
        >
          Active
        </li>
        <li
          className={active === "complete" ? "active" : ""}
          onClick={showComplete}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}

export default Nav;
