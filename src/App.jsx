import { useEffect, useState } from "react";
import ToDoWrapper from "./components/ToDoWrapper/ToDoWrapper.jsx";
import TopDashBoard from "./components/TopDashBoard/TopDashBoard.jsx";
import style from "./App.module.scss";
import Task from "./components/Task/Task.jsx";
import NewTaskEntry from "./components/NewTaskEntry/NewTaskEntry.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import BottomDashBoard from "./components/BottomDashBoard/BottomDashBoard.jsx";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("toDoTheme") || "dark"
  );
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filteredTasks, setFilteredTasks] = useState();
  const categories = ["Personal", "Work"];

  // useEffect(() => {
  //   let dataCopy = [...tasks];
  // }, [tasks]);
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <main className={style.main} id={theme}>
      <ToDoWrapper>
        <TopDashBoard
          title={"to do"}
          theme={theme}
          handleToggleTheme={handleToggleTheme}
        ></TopDashBoard>
        <NewTaskEntry
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
        ></NewTaskEntry>
        <TasksList tasks={tasks} setTasks={setTasks} categories={categories}>
          <BottomDashBoard tasks={tasks} setTasks={setTasks}></BottomDashBoard>
        </TasksList>
      </ToDoWrapper>
    </main>
  );
}

export default App;
