import NewTaskForm from "../components/Layouts/NewTaskForm";

function NewTask() {
  return (
    <div
      className="card m-2 text-center d-flex justify-content-center"
      style={{ width: "30rem" }}
    >
      <h4>Add New Task</h4>
      <NewTaskForm></NewTaskForm>
    </div>
  );
}

export default NewTask;
