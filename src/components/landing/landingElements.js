import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Motto = styled.h3`
  margin-top: 10%;
  font-size: 3.5rem;
  font-family: "Caveat";
`;

export const LandingImage = styled.img`
  width: 40%;
  margin-right: 3%;
`;

export const LandingMessageContainer = styled.div`
  width: max-content;
  margin: 3% 5%;
`;

export const LandingMessage = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto Slab";
  margin: 5% 0 0 1%;
  width: 70%;
`;

export const Button = styled.button`
  background: var(--strong-blue);
  color: white;
  margin: 5% 15%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-family: 'Teko';
  letter-spacing: 1.5px;
  border: 1px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
`