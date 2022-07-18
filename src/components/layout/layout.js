import styled from "styled-components";
import Header from "../header/header";
import Footer from '../footer/footer'

const Content = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
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
