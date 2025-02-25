import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
  // Get count from Redux store
  const count = useSelector((state) => state.counter.count);

  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h2>Redux Counter</h2>
      <h1 style={styles.count}>{count}</h1>
      <div>
        <button style={styles.button} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button style={styles.button} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button style={styles.button} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  count: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
  },
};

export default Counter;
