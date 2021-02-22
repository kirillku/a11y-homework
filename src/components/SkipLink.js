import styled from "styled-components";
import { buttonStyles } from "./Button";

const SkipLink = styled.a`
  ${buttonStyles}

  position: absolute;
  top: -200px;
  left: calc(50% - 500px);
  transition: top 0.2s;

  :focus {
    top: 40px;
  }
`;

export default SkipLink;
