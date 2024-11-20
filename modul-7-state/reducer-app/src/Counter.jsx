import { ReduxContext } from "./ReduxProvider";
import { useContext } from "react";

export const Counter = () => {
  const context = useContext(ReduxContext);
  const increment = () => {};
  const decrement = () => {};
  const reset = () => {};

  return (
    <div>
      <h1>Counter: {context}</h1>
      <button onClick={increment}>Zwiększ</button>
      <button onClick={decrement}>Zmniejsz</button>
      <button onClick={reset}>Resetuj</button>
    </div>
  );
};
