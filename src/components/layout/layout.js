import styled from "styled-components";
import Header from "../header/header";
import Footer from '../footer/footer'

const Content = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  @media (max-width: 720px) {
    padding: 1rem 0;
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
