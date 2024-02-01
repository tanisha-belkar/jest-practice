import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [arr, setarr] = useState(["item1", "item2", "item3"]);

  const addToArr = () => {
    let len = arr.length + 1;
    setarr([...arr, "item" + len]);
  };
  const removeFromArr = () => {
    setarr((prev) => prev.slice(0, -1));
  };
  return (
    <div data-testid="list">
      <List array={arr} />
      <button data-testid="add-button" onClick={addToArr}>
        Add item
      </button>
      <button data-testid="rem-button" onClick={removeFromArr}>
        Remove item
      </button>
    </div>
  );
}

export default App;
