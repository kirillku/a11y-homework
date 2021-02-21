import * as React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import UserIcon from "./components/UserIcon";

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;
  max-width: 1000px;
`;

const Nav = () => (
  <NavWrapper>
    <div style={{ width: 300, height: 150, background: "pink" }}>LOGO</div>
    <Button compact>RU</Button>
    <Button compact>EN</Button>
    <IconButton>
      <UserIcon aria-label="Аккаунт" />
    </IconButton>
  </NavWrapper>
);

export default Nav;
