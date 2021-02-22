import * as React from "react";
import styled from "styled-components";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Button from "./components/Button";
import Input from "./components/Input";

const StyledDialog = styled(Dialog)`
  border-radius: 8px;
  padding: 80px 150px;
  max-width: 800px;
`;

const StyledForm = styled.form`
  > * {
    display: block;
    margin-top: 60px;
    width: 100%;
  }
`;

const LoginDialog = ({ open, onClose }) => (
  <StyledDialog isOpen={open} onDismiss={onClose} aria-labelledby="login">
    <h1 id="login">Вход</h1>
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Input name="login" />
      <Input name="password" type="password" />
      <Button type="submit">Вход</Button>
    </StyledForm>
  </StyledDialog>
);

export default LoginDialog;
