import { useHistory } from "react-router";

import NewListForm from "../components/Layouts/NewListForm";

function NewList() {
  const history = useHistory();
  const addListHandler = (listDetails) => {
    fetch("http://localhost:8010/list/", {
      method: "POST",
      body: JSON.stringify(listDetails),
      headers: {
        "Content-Type": "applicaiton/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <div
      className="card m-2 text-center d-flex justify-content-center"
      style={{ width: "30rem" }}
    >
      <h4>Add New List</h4>
      <NewListForm onAddList={addListHandler}></NewListForm>
    </div>
  );
}

export default NewList;
