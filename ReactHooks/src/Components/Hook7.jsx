import React, { useCallback } from "react";
import Header from "./Header";
import { useState } from "react";

function Hook7() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);
  return (
    <>
      <Header newFn={newFn} />
      <h1>Count:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>ClickHere</button>
    </>
  );
}

export default Hook7;
