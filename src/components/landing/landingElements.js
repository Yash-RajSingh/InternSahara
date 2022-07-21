import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

export const Motto = styled.h3`
  margin-top: 10%;
  font-size: 3.5rem;
  font-family: "Caveat";

  @media (max-width: 720px) {
    font-size: 3rem;
  }
`;

export const LandingImage = styled.img`
  width: 40%;
  margin-right: 3%;

  @media (max-width: 720px) {
    width: 70%;
    margin: 10% auto 0 auto;
  }
`;

export const LandingMessageContainer = styled.div`
  width: max-content;
  margin: 3% 5%;
  @media (max-width: 720px) {
    margin-top: 5%;
    width: fit-content;
  }
`;

export const LandingMessage = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto Slab";
  margin: 5% 0 0 1%;
  width: 70%;
  @media (max-width: 720px) {
    /* font-size: 3rem; */
    width: 90%;
    margin: 5% auto 0 auto;
  }
`;

export const Button = styled.button`
  background: var(--strong-blue);
  color: black;
  margin: 5% 15%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-family: 'Teko';
  letter-spacing: 1.5px;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0, 0.1);

  @media (max-width: 720px) {
    margin: 15% 0 0 35%;
  }
`