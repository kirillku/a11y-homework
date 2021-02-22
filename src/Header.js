import * as React from "react";
import styled from "styled-components";
import IconButton from "./components/IconButton";
import UserIcon from "./components/UserIcon";
import LanguageSwith from "./LanguageSwitch";
import LoginDialog from "./LoginDialog";
import SearchBar from "./SearchBar";
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

const Controls = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  justify-content: flex-end;
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
        <img
          src="logo_gmii.svg"
          alt="Государственный музей изобразительных искусств имени А.С. Пушкина"
        />
        <Controls>
          <SearchBar />
          <LanguageSwith />
          <IconButton onClick={() => setOpen(true)}>
            <UserIcon aria-label="Аккаунт" />
          </IconButton>
          <LoginDialog open={open} onClose={() => setOpen(false)} />
        </Controls>
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
