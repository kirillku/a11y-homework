import styled from "styled-components";
import theme from "../theme";

const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  :hover {
    color: ${theme.primary};
  }
`;

export default IconButton;
