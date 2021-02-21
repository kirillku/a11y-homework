import styled from "styled-components";
import { buttonStyles } from "./Button";

const SkipLink = styled.a`
  ${buttonStyles}

  position: absolute;
  top: -200px;
  left: 2px;
  transition: top 0.2s;

  :focus {
    top: 20px;
  }
`;

export default SkipLink;
