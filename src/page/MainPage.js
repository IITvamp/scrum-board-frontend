import { useState } from "react";
import { useHistory } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import Board from "../components/Items/Board";
import NewList from "./NewList";
import Backdrop from "../components/Items/BackDrop";

const MainPage = () => {
  const history = useHistory();
  const [isMainView, setMainView] = useState(true);

  const NewListHandler = () => {
    setMainView(false);
    history.replace("/new-list-form");
  };

  const closeModalHandler = () => {
    setMainView(true);
  };

  const submitNewListHandler = () => {
    setMainView(true);
  };

  return (
    <div>
      <div className="column">
        <h1 className="text-center">Scrum Board</h1>
        <button className="btn btn-outline-success" onClick={NewListHandler}>
          Create new List
        </button>
        <Board></Board>
        {!isMainView && <NewList onSubmit={submitNewListHandler} />}
        {!isMainView && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
};

export default MainPage;
