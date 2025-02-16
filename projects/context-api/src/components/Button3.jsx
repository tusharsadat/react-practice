import { useContext } from "react";
import CountContext from "../store/CountStore";
import PostLists from "./PostLists";
const Button3 = () => {
  const count = useContext(CountContext);
  return (
    <div>
      <PostLists />
      <button>count is ---{count}</button>
    </div>
  );
};

export default Button3;
