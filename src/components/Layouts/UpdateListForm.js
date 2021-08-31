import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function UpdateListForm(props) {
  const titleRef = useRef();
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();

    const name = titleRef.current.value;
    // const id=props.id;
    const id = localStorage.getItem("ID");

    axios
      .patch(`http://localhost:8011/list/` + id, {
        name,
      })
      .then(() => {
        history.replace("/");
      });
  };

  return (
    <div
      className="card m-2 text-center d-flex justify-content-center"
      style={{ width: "30rem" }}
    >
      <h4>Update List</h4>
      <form onSubmit={submitHandler}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="ListName"
            aria-label="Username"
            ref={titleRef}
          ></input>
        </div>
        <button className="btn btn-outline-success" type="submit">
          Add List
        </button>
      </form>
    </div>
  );
}

export default UpdateListForm;
