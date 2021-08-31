import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function NewTaskForm(props) {
  const id=props.getListId;
  const titleRef = useRef();
  const urlRef = useRef();
  const descriptionRef = useRef();
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const id = localStorage.getItem("ID");

    const name = titleRef.current.value;
    // const name = titleRef.current.value;
    const description = titleRef.current.value;
    axios
      .post(`http://localhost:8011/list/` +id+`/add-card`, {
        name,
        description,
      })
      .then(() => {
        history.replace("/");
      });
  };

  return (
    <form method="post" onSubmit={submitHandler}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="TaskName"
          aria-label="Username"
          ref={titleRef}
        ></input>
        <div class="input-group mb-3">
          <input
            type="url"
            class="form-control"
            placeholder="image url"
            aria-label="image-url"
            ref={urlRef}
          ></input>
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            aria-label="Description"
            ref={descriptionRef}
          ></input>
        </div>
      </div>
      <button className="btn btn-outline-success" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default NewTaskForm;
