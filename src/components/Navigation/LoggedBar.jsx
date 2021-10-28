import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperation";
import { ExitBtn } from "styles/Navigation.styled";
import { GiExitDoor } from "react-icons/gi";
import { LoggedContainer } from "styles/Navigation.styled";

const LoggedBar = () => {
  const name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <LoggedContainer>
      <span>
        Привет, <b>{name}</b>
      </span>
      <ExitBtn onClick={() => dispatch(logOut())} type="submit">
        <GiExitDoor title="Выйти" />
      </ExitBtn>
    </LoggedContainer>
  );
};

export default LoggedBar;
