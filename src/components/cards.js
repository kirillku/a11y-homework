import styled from "styled-components";

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
  padding: 0;
`;

export const Card = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h3`
  text-transform: ${(p) => p.uppercase && "uppercase"};
`;

export const CardDescription = styled.p`
  font-size: 1em;
`;
