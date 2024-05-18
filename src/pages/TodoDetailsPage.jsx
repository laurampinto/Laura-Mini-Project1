import { useParams } from "react-router-dom";

function TodoDetailsPage(props) {
  const { tasks } = props;

  const { id } = useParams();

  //Convert the id to an integer
  const taskId = parseInt(id, 10);

  const selectedTask = tasks.find((task) => task.id === taskId);

  if (!selectedTask) {
    return <p>Task not found</p>;
  }
  return (
    <div>
      <h2>Task Details</h2>
      <p>
        <b>Task:</b> {selectedTask.task}
      </p>
      <p>{selectedTask.completed ? "Completed ✅" : "Pending ❌"}</p>
    </div>
  );
}
export default TodoDetailsPage;
