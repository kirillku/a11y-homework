import styled from "styled-components";
import theme from "../theme";

const Link = styled.a`
  color: inherit;

  :hover,
  :focus {
    color: ${theme.primary};
  }
`;

export default Link;
