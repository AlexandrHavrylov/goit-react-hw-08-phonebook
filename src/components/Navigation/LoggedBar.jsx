import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperation";

const LoggedBar = () => {
  const name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Привет {name} </span>
      <button onClick={() => dispatch(logOut())} type="submit">
        Выйти
      </button>
    </div>
  );
};

export default LoggedBar;
