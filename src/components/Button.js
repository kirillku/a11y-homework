import styled, { css } from "styled-components";
import { readableColor } from "polished";

const ButtonColor = {
  secondary: "#c7d2e9",
  primary: "#5D16D5",
};

const buttonBgColor = (props) =>
  props.variant === "primary" ? ButtonColor.primary : ButtonColor.secondary;

const buttonColor = (props) => readableColor(buttonBgColor(props));

export const buttonStyles = css`
  font-size: 1.5rem;
  text-decoration: none;
  background: ${buttonBgColor};
  border: 1px solid ${buttonBgColor};
  color: ${buttonColor};
  border-radius: 8px;
  padding: 0.75em 2em;
`;

const Button = styled.button`
  ${buttonStyles}
`;

export default Button;
