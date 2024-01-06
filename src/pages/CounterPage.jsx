import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";


const CounterPage = () => {
  const counter = useSelector((state) => state.counter.val);
  const dispatch = useDispatch();

  const incr = () => {
    dispatch(counterActions.increaseCounter(10));
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{counter}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={incr}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
