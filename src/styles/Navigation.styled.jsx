import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  border-bottom: 1px black solid;
  padding: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 5px;
  }
  &.active {
    color: blue;
  }
`;

export const Nav = styled.nav`
  text-align: right;
`;

// LogedBar

export const LoggedContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const ExitBtn = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  padding: 0;

  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
