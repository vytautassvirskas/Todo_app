import { useEffect, useState, useReducer } from "react";
import tasksReducer from "./utils/tasksReducer.js";
import ToDoWrapper from "./components/ToDoWrapper/ToDoWrapper.jsx";
import TopDashBoard from "./components/TopDashBoard/TopDashBoard.jsx";
import style from "./App.module.scss";
import NewTaskEntry from "./components/NewTaskEntry/NewTaskEntry.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import BottomDashBoard from "./components/BottomDashBoard/BottomDashBoard.jsx";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("toDoTheme") || "dark"
  );

  //get initial task from localStorage
  const [initialTasks, setInitialTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const categories = ["Personal", "Work"];

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    localStorage.setItem("toDoTheme", theme);
  };

  useEffect(() => {
    localStorage.setItem("toDoTheme", theme);
  }, [theme]);

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
          dispatch={dispatch}
          categories={categories}
        ></NewTaskEntry>
        <TasksList
          tasks={tasks}
          dispatch={dispatch}
          categories={categories}
          filterStatus={filterStatus}
          filterCategory={filterCategory}
        ></TasksList>
        <BottomDashBoard
          tasks={tasks}
          dispatch={dispatch}
          categories={categories}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        ></BottomDashBoard>

        <p className={style.dragging}>Drag and drop to reorder list</p>
      </ToDoWrapper>
    </main>
  );
}

export default App;
