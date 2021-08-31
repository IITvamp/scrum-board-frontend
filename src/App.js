import { Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import NewList from "./page/NewList";
import NewTask from "./page/NewTask";
import "bootstrap/dist/css/bootstrap.min.css";
import NewListForm from "./components/Layouts/NewListForm";
import NewTaskForm from "./components/Layouts/NewTaskForm";
import UpdateListForm from "./components/Layouts/UpdateListForm";
import UpdateTaskForm from "./components/Layouts/UpdateTaskForm";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <div className="card">
          <MainPage></MainPage>
        </div>
      </Route>
      <Route path="/new-list-form">
        <div>
          <NewListForm></NewListForm>
        </div>
      </Route>
      <Route path="/update-list-form">
        <div>
          <UpdateListForm></UpdateListForm>
        </div>
      </Route>
      <Route path="/new-task-form">
        <div>
          <NewTaskForm></NewTaskForm>
        </div>
      </Route>
      <Route path="/update-task-form"><UpdateTaskForm/></Route>
    </div>
  );
}

export default App;
