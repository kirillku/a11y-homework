import * as React from "react";
import styled from "styled-components";
import theme from "../theme";

const IconButton = styled.button`
  border: none;
  background: none;

  :hover {
    color: ${theme.primary};
  }
`;

export default IconButton;
