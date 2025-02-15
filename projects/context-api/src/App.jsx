import { useState } from "react";
import "./App.css";
import Button1 from "./components/Button1";
import CountContext from "./store/CountStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <h2>Example of useContext</h2>
      <Button1 />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </CountContext.Provider>
  );
}

export default App;
