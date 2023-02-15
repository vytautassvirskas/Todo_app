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
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const categories = ["Personal", "Work"];

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    localStorage.setItem("toDoTheme", theme);
  };

  //check filterCategory state value
  useEffect(() => {
    console.log("filterCategory", filterCategory);
  }, [filterCategory]);

  //check theme state value
  useEffect(() => {
    localStorage.setItem("toDoTheme", theme);
  }, [theme]);

  //check tasks state value
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
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterCategory={filterCategory}
        >
          <BottomDashBoard
            tasks={tasks}
            setTasks={setTasks}
            categories={categories}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          ></BottomDashBoard>
        </TasksList>
      </ToDoWrapper>
    </main>
  );
}

export default App;
