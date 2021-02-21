import styled, { css } from "styled-components";
import { readableColor } from "polished";
import theme from "../theme";

const buttonBgColor = (props) =>
  props.variant === "primary" ? theme.primary : theme.secondary;

const buttonColor = (props) => readableColor(buttonBgColor(props));

export const buttonStyles = css`
  font-size: 1.5rem;
  text-decoration: none;
  background: ${buttonBgColor};
  border: 1px solid ${buttonBgColor};
  color: ${buttonColor};
  border-radius: 8px;
  padding: ${(props) => (props.compact ? "0.75em" : "0.75em 2em")};
`;

const Button = styled.button`
  ${buttonStyles}
`;

export default Button;
