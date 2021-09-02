import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";


function NewTaskForm(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const id = localStorage.getItem("ID");

    const name = titleRef.current.value;
    
    const description = descriptionRef.current.value;
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
    <div className="d-flex flex-nowrap bd-highlight justify-content-center">
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body bg-light">
          <h4 className="text-black-50 mt-3 mb-3 ">NEW TASK</h4>
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
        </div>
      </div>
    </div>
  );
}

export default NewTaskForm;
