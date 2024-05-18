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
  const [tasks, setTasks] = useState(tasksJSON);

  const addNewTask = (newTask) => {
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const copyTask = structuredClone(tasks);
    const updateTasks = copyTask.filter((task, index) => index !== taskId);
    setTasks(updateTasks);
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
