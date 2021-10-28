import { useSelector } from "react-redux";
import { Nav } from "styles/Navigation.styled";
import { Header } from "styles/Navigation.styled";
import LoggedBar from "./LoggedBar";
import UnloggedBar from "./UnLoggedBar";

const Navigation = () => {
  const isLogIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Header>
      <Nav>{isLogIn ? <LoggedBar /> : <UnloggedBar />}</Nav>
    </Header>
  );
};

export default Navigation;
