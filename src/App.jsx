import { useState } from "react";
import ToDoWrapper from "./components/ToDoWrapper/ToDoWrapper.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import style from "./App.module.scss";
import Task from "./components/Task/Task.jsx";
import NewTaskWrapper from "./components/NewTaskWrapper/NewTaskWrapper.jsx";
import TasksWrapper from "./components/TasksWrapper/TasksWrapper.jsx";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("toDoTheme") || "dark"
  );
  const [tasks, setTasks] = useState([
    { task: "go for a walk", isCompleted: false },
    { task: "go for to gym", isCompleted: false },
    { task: "read a book", isCompleted: true },
  ]);
  return (
    <main className={style.main} id={theme}>
      <ToDoWrapper>
        <DashBoard title={"to do"} theme={theme}></DashBoard>
        <NewTaskWrapper></NewTaskWrapper>
        <TasksWrapper tasks={tasks}></TasksWrapper>
      </ToDoWrapper>
    </main>
  );
}

export default App;
