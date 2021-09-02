import { Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NewListForm from "./page/Forms/NewListForm";
import NewTaskForm from "./page/Forms/NewTaskForm";
import UpdateListForm from "./page/Forms/UpdateListForm";
import UpdateTaskForm from "./page/Forms/UpdateTaskForm";

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
      <Route path="/update-task-form">
        <UpdateTaskForm />
      </Route>
    </div>
  );
}

export default App;
