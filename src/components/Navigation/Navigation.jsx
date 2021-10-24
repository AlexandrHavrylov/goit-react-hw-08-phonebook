import { Header, StyledNavLink } from "styles/Navigation.styled";

const Navigation = () => {
  return (
    <Header>
      <nav>
        <StyledNavLink to="/" exact>
          Home
        </StyledNavLink>
        <StyledNavLink to="/register"> Регистрация </StyledNavLink>
        <StyledNavLink to="/login"> Логин </StyledNavLink>
      </nav>
    </Header>
  );
};

export default Navigation;
