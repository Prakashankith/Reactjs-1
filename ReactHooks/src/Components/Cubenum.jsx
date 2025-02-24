import React, { useMemo, useState } from "react";

function Cubenum() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  function cubenum() {
    console.log("caluclation done");
    return Math.pow(number, 3);
  }

  let result = useMemo(() => cubenum(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>cube of the number{result}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clickme
      </button>
      <h1>count:{count}</h1>
    </>
  );
}

export default Cubenum;
