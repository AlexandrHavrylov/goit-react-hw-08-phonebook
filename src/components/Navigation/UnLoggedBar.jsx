import { StyledNavLink } from "styles/Navigation.styled";

const UnloggedBar = () => {
  return (
    <div>
      <StyledNavLink to="/register"> Регистрация </StyledNavLink>
      <StyledNavLink to="/login"> Логин </StyledNavLink>
    </div>
  );
};

export default UnloggedBar;
