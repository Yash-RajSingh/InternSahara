import styled from "styled-components";
import { HeaderTitle } from "../header/headerElements";

export const FooterWrapper = styled.div`
  margin-top: 10%;
  padding: 1rem;
  padding-left: 3rem;
  background: var(--lightest-blue);
`;

export const FooterTitle = styled(HeaderTitle)`
  font-size: 2.5rem;
  margin-left: 0;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMessage = styled.p`
  width: 40%;
  font-size: 2rem;
  font-family: "Caveat";
  margin-top: 1%;
`;

export const SubContainerWrapper = styled.div`
  display: flex;
`;

export const SubContainer = styled.div`
  width: 15rem;
  margin-right: 10%;
`;

export const FooterItem = styled.p`
  font-size: 1.25rem;
  font-family: "Teko";
  margin-top: 3%;
  cursor: pointer;
`;
