import styled from "styled-components";
import { HeaderTitle } from "../header/headerElements";

export const FooterWrapper = styled.div`
  margin-top: 10%;
  padding: 1rem 1rem 0.25rem 3rem;
  background: var(--lightest-blue);

  @media (max-width: 720px) {
    margin-top: 15%;
    padding: 1rem 0.5rem 0.25rem 1.5rem;
  }
`;

export const FooterTitle = styled(HeaderTitle)`
  font-size: 2.5rem;
  margin-left: 0;

  @media (max-width: 720px) {
    font-size: 2rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMessage = styled.p`
  width: 40%;
  font-size: 1.7rem;
  font-family: "Caveat";
  margin-top: 1%;

  @media (max-width: 720px) {
    font-size: 1.35rem;
    width: 35%;
  }
`;

export const SubContainerWrapper = styled.div`
  display: flex;
`;

export const SubContainer = styled.div`
  width: 15rem;
  margin-right: 10%;

  @media (max-width: 720px) {
    width: 8.5rem;
    margin-right: 2%;
  }
`;

export const FooterItem = styled.p`
  font-size: 1.25rem;
  font-family: "Teko";
  margin-top: 3%;
  cursor: pointer;
  
  @media (max-width: 720px) {
    font-size: 1.1rem;
    margin-top: 1%;
  }
`;

export const Credits = styled.p`
  font-size: 0.7rem;
  font-family: "Roboto Slab";
`;
