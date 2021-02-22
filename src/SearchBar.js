import * as React from "react";
import styled from "styled-components";
import SearchIcon from "./components/SearchIcon";
import theme from "./theme";

const SearchForm = styled.form`
  position: relative;
  min-width: 300px;
`;

const SubmitButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

  :hover {
    color: ${theme.primary};
  }
`;

const SearchInput = styled.input`
  background: ${theme.inputBg};
  border: 1px solid ${theme.secondary};
  border-radius: 50px;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
`;

const SearchBar = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const q = searchParams.get("q");

  return (
    <SearchForm
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
      }}
    >
      <label className="visually-hidden" htmlFor="q">
        Поиск по сайту
      </label>
      <SearchInput name="q" id="q" defaultValue={q} />
      <SubmitButton>
        <SearchIcon aria-label="Искать" />
      </SubmitButton>
    </SearchForm>
  );
};

export default SearchBar;
