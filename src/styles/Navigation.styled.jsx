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
  display: flex;
  justify-content: space-between;
`;
