import { useState } from "react";
import { useHistory } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import Board from "../Views/Board";

const MainPage = () => {
  const history = useHistory();

  const NewListHandler = () => {
    history.replace("/new-list-form");
  };

  return (
    <div className="card m-2 ms-3 bg-light">
      <div className="card-body column">
        <h1 className="text-center bg-warning text-black-50">SCRUM BOARD</h1>

        <button className="btn btn-outline-success" onClick={NewListHandler}>
          Create new List
        </button>
        <Board></Board>
      </div>
    </div>
  );
};

export default MainPage;
