import * as React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import UserIcon from "./components/UserIcon";
import LoginDialog from "./LoginDialog";
import theme from "./theme";

const StyledHeader = styled.header`
  margin: 40px auto;
  max-width: 1000px;
`;

const TopHeader = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  a {
    margin-right: 40px;
    color: black;
    text-decoration: none;

    :hover,
    :focus {
      color: ${theme.primary};
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledHeader>
      <TopHeader>
        <div style={{ width: 300, height: 50, background: "pink" }}>LOGO</div>
        <Button compact>RU</Button>
        <Button compact>EN</Button>
        <IconButton onClick={() => setOpen(true)}>
          <UserIcon aria-label="Аккаунт" />
        </IconButton>
        <LoginDialog open={open} onClose={() => setOpen(false)} />
      </TopHeader>

      <StyledNav>
        <a href="#about">Музей</a>
        <a href="#visitors">Посетителям</a>
        <a href="#events">Выставки и события</a>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
