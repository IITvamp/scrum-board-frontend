import ListView from "../Views/Listview";
import "bootstrap/dist/css/bootstrap.min.css";

function ListItem(props) {
  return (
    <div className="row">
      {props.lists.map((list) => {
        return (
          <ListView id={list._id} title={list.name} cardarray={list.cards} />
        );
      })}
    </div>
  );
}

export default ListItem;
