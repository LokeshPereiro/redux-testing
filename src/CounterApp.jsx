import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function CounterApp() {
  // De todos los posibles state de mi app, selecciono el counter
  const { counterValue } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        <i>Counter App</i>
      </h1>
      <hr />
      {/* --------------------------------------- */}
      <h3>{counterValue}</h3>
      <button
        className="btn btn-outline-success m-1"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-outline-danger m-1"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        className="btn btn-outline-info m-1"
        onClick={() => {
          dispatch(incrementBy(2));
        }}
      >
        IncrementBy
      </button>
    </>
  );
}

export default CounterApp;
