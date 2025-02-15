import { useContext } from "react";
import CountContext from "../store/CountStore";
const Button3 = () => {
  const count = useContext(CountContext);
  return (
    <div>
      <button>count is ---{count}</button>
    </div>
  );
};

export default Button3;
