import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory } from "react-router";
import axios from "axios";
import CardView from "./CardView";

function ListView(props) {
  console.log(props.cardarray);

  console.log(typeof props.cardarray);
  
  const history = useHistory();
  const NewTaskHandler = () => {
    let id = props.id;
    console.log(id);
    localStorage.setItem("ID", id);
    console.log(props);
    history.replace("/new-Task-form");
  };
  const UpdateListHandler = () => {
    let id = props.id;
    console.log(id);
    localStorage.setItem("ID", id);
    console.log(props);
    history.replace("/update-list-form");
  };
  const DeleteListHandler = () => {
    let id = props.id;
    console.log(id);
    axios.delete("http://localhost:8011/list/" + id);
    window.location.reload();
  };

  return (
    <div className="card m-2" style={{ width: "20rem" }}>
      <div className="card-body ">
        <h5 className="card-title text-center text-danger">{props.title}</h5>
        <hr />

        <div className="column row d-flex justify-content-center ">
          {props.cardarray.map((key) => {
            return (
              <CardView
                id={key._id}
                title={key.name}
                description={key.description}
              />
            );
          })}
        </div>
      </div>

      <button className="btn btn-outline-primary m-2" onClick={NewTaskHandler}>
        Add New Task
      </button>

      <button
        className="btn btn-outline-success m-2"
        onClick={UpdateListHandler}
      >
        Update List
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={DeleteListHandler}
      >
        Delete List
      </button>
    </div>
  );
}

export default ListView;
