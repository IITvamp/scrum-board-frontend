import CardItem from "../Items/CardItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import FetchCard from "../Items/FetchCard";

function ListView(props) {
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
    <div class="col-sm m-5 text-center ">
      <h5>{props.title}</h5>
      <hr />

      <FetchCard cardarray={props.cardarray}></FetchCard>
      <button className="btn btn-outline-success m-2" onClick={NewTaskHandler}>
        Add New Task
      </button>

      <button className="btn btn-outline-success m-2" onClick={UpdateListHandler}>
        Update List
      </button>

      <button className="btn btn-outline-success m-2" onClick={DeleteListHandler}>
        Delete List
      </button>
    </div>
  );
}

export default ListView;
