import styled, { css } from "styled-components";
import { tint, readableColor } from "polished";
import theme from "../theme";

const getBgColor = (props) =>
  props.variant === "primary" ? theme.primary : theme.secondary;

export const buttonStyles = css`
  font-size: 1.5rem;
  text-decoration: none;
  background: ${getBgColor};
  border: 1px solid ${getBgColor};
  color: ${(props) => readableColor(getBgColor(props))};
  border-radius: 8px;
  padding: ${(props) => (props.compact ? "0.75em" : "0.75em 2em")};

  :hover {
    background: ${(props) => tint(0.1, getBgColor(props))};
  }
`;

const Button = styled.button`
  ${buttonStyles}
`;

export default Button;
