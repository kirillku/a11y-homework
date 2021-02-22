import * as React from "react";
import styled from "styled-components";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Button from "./components/Button";
import theme from "./theme";

const StyledDialog = styled(Dialog)`
  border-radius: 8px;
  padding: 80px 150px;
  width: 800px;
`;

const StyledForm = styled.form`
  > * {
    display: block;
    margin-top: 60px;
    width: 100%;
  }
`;

const Field = styled.div`
  width: 100%;
  font-size: 1.5em;

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    background: ${theme.inputBg};
    border: 1px solid ${theme.secondary};
    border-radius: 50px;
    border-radius: 8px;
    padding: 0.75em;
    width: 100%;
  }
`;

const LoginDialog = ({ open, onClose }) => (
  <StyledDialog isOpen={open} onDismiss={onClose} aria-labelledby="login">
    <h2 id="login">Вход</h2>
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Field>
        <label htmlFor="login">Логин</label>
        <input name="login" id="login" required />
      </Field>
      <Field>
        <label htmlFor="password">Пароль</label>
        <input name="password" id="password" required type="password" />
      </Field>
      <Button type="submit">Вход</Button>
    </StyledForm>
  </StyledDialog>
);

export default LoginDialog;
