import * as React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  margin-top: 2em;
`;

const EmailInput = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #000000;
  min-width: 300px;
  margin-bottom: 1em;
  margin-top: 0.5em;
  margin-right: 1em;
`;

const NewsletterForm = () => (
  <StyledForm
    onSubmit={(event) => {
      event.preventDefault();
      console.log(event);
    }}
  >
    <div>
      <label htmlFor="email">E-mail</label>
      <EmailInput name="email" id="email" type="email" required />
      <input name="consent" id="consent" type="checkbox" required />{" "}
      <label htmlFor="consent">Согласен на обработку персональных данных</label>
    </div>
    <Button type="submit" variant="primary" size="small">
      Подписаться
    </Button>
  </StyledForm>
);

export default NewsletterForm;
