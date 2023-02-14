import { useEffect, useState } from "react";
import ToDoWrapper from "./components/ToDoWrapper/ToDoWrapper.jsx";
import TopDashBoard from "./components/TopDashBoard/TopDashBoard.jsx";
import style from "./App.module.scss";
import Task from "./components/Task/Task.jsx";
import NewTaskWrapper from "./components/NewTaskWrapper/NewTaskWrapper.jsx";
import TasksWrapper from "./components/TasksWrapper/TasksWrapper.jsx";
import BottomDashBoard from "./components/BottomDashBoard/BottomDashBoard.jsx";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("toDoTheme") || "dark"
  );
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filteredTasks, setFilteredTasks] = useState();
  const categories = ["personal", "work"];

  // useEffect(() => {
  //   let dataCopy = [...tasks];
  // }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <main className={style.main} id={theme}>
      <ToDoWrapper>
        <TopDashBoard title={"to do"} theme={theme}></TopDashBoard>
        <NewTaskWrapper
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
        ></NewTaskWrapper>
        <TasksWrapper tasks={tasks} setTasks={setTasks} categories={categories}>
          <BottomDashBoard tasks={tasks} setTasks={setTasks}></BottomDashBoard>
        </TasksWrapper>
      </ToDoWrapper>
    </main>
  );
}

export default App;
