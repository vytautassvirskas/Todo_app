import { useState } from "react";
import Home from "./pages/Home";
import style from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={style.main}>
      <Home></Home>
    </main>
  );
}

export default App;
