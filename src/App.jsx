import { useState } from "react";
import "./App.css";
import { TodoListPage } from "./pages/TodoListPage";
import { ItemDetailsPage } from "./pages/MoreInfo";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import tasksJSON from "./tasks.json";
import TodoDetailsPage from "./pages/TodoDetailsPage";

function App() {
  //Inicialize state with tasks from JSON
  const [tasks, setTasks] = useState(tasksJSON);

  //Function to add a new task
  const addNewTask = (newTask) => {
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
  };

  //Function to delete a task based on ID
  const handleDeleteTask = (taskId) => {
    const copyTask = structuredClone(tasks); //Create a copy of the tasks
    const updateTasks = copyTask.filter((task, index) => index !== taskId); //Filter out the task with the given ID
    setTasks(updateTasks); //Update the state with the filtered task list
  };

  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route
          path="/"
          element={
            <TodoListPage
              tasks={tasks}
              addNewTask={addNewTask}
              handleDeleteTask={handleDeleteTask}
            />
          }
        />
        <Route path="/todos/:id" element={<TodoDetailsPage tasks={tasks} />} />
        <Route path="/more-info" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
