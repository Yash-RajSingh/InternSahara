import styled from "styled-components";

export const SelectorContainer = styled.div`
  margin-top: 10%;
  @media (max-width: 720px) {
    margin-top: 20%;
    width: 99%;
  }
`;

export const SelectorHeading = styled.p`
  font-size: 2rem;
  font-family: 'Roboto Slab';
  margin: 0 5%;
  font-weight: bold;
`

export const SelectorWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    margin-top: 3%;
  }
`;

export const SelectorItem = styled.div`
  width: 14rem;
  border-radius: 0.5rem;
  margin-top: 4%;
  padding: 1.25rem 1rem;
  background: var(--mild-blue);
  text-align: center;
  @media (max-width: 720px) {
    width: 12rem;
    margin-top: 5%;
  }
`;

export const SelectorIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-top: 3%;
  @media (max-width: 720px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const SelectorTitle = styled.p`
  margin-top: 3%;
  font-size: 1.8rem;
  font-family: "Teko";
`;
