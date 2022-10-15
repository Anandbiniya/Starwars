import React from "react";
import "../App.css";
export const Pagination = ({ curPage, lastPage, pageBtn }) => {
  const buttons = [];
  for (let i = 1; i <= lastPage; i++) {
    buttons.push(
      <li key={i} className={"page-item" + (curPage === i ? "-active" : "")}>
        <button className="page-link" onClick={() => pageBtn(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <div>
      <ul
        className="pagination"
        style={{ justifyContent: "center", marginTop: "8px" }}
      >
        {" "}
        {buttons}{" "}
      </ul>
    </div>
  );
};
