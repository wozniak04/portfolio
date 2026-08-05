import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      hello world
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </>
  );
}

export default App;
