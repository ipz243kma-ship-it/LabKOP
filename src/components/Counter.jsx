
import { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h2>Repository Counter</h2>

      <div className="counter-value">{count}</div>

      <div className="counter-buttons">
        <button onClick={decrement}>
          <Minus size={18} />
        </button>

        <button onClick={reset}>
          <RotateCcw size={18} />
        </button>

        <button onClick={increment}>
          <Plus size={18} />
        </button>
      </div>

      <p>Track your repository activity</p>
    </div>
  );
}

export default Counter;
