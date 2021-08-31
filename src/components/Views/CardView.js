import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import axios from "axios";

function CardView(props) {
  const history = useHistory();
  const UpdateCardHandler = () => {
    let id = props.id;
    console.log(id);
    localStorage.setItem("ID", id);
    console.log(props);
    history.replace("/update-task-form");
  };
  const DeleteCardHandler = () => {
    let id = props.id;
    console.log(id);
    axios.delete("http://localhost:8011/list/" + id + "/delete-card");
    window.location.reload();
  };
  return (
    <div className="card m-2" style={{ width: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button
          className="btn btn-outline-success m-2"
          onClick={UpdateCardHandler}
        >
          Update
        </button>
        <button className="btn btn-outline-danger" onClick={DeleteCardHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default CardView;
