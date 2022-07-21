import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding-left: 2rem;
  @media (max-width: 720px) {
    padding-left: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-family: "Teko";
  color: var(--strong-blue);
  margin-left: 0.5%;
  letter-spacing: 1px;
  -webkit-text-stroke: 0.001rem black;
  
  @media (max-width: 720px) {
    font-size: 2.25rem;
    -webkit-text-stroke: 0.1rem black;
    letter-spacing: 2px;
    margin-top: 1.5%;
  }
`;
