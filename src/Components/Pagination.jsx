import React from "react";
import "./Pagination.module.css";

export const Pagination = ({ curPage, lastPage, pageBtn }) => {
  const buttons = [];
  for (let i = 1; i <= lastPage; i++) {
    buttons.push(
      <li key={i} className={"page-item" + (curPage === i ? " active" : "")}>
        <button className="page-link" onClick={() => pageBtn(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <div>
      <ul className="pagination"> {buttons} </ul>
    </div>
  );
};
