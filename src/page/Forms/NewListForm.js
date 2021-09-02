import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function NewListForm(props) {
  const titleRef = useRef();
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    
    const name = titleRef.current.value;
    
    axios
      .post(`http://localhost:8011/list/`, {
        name,
      })
      .then(() => {
        history.replace("/");
      });
  };

  return (
    <div className="d-flex flex-nowrap bd-highlight justify-content-center">
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body bg-light">
          <h4 className="text-black-50 mt-3 mb-3 ">ADD NEW LIST</h4>
          <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
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
      </div>
    </div>
  );
}

export default NewListForm;
