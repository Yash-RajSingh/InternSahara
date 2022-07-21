import { Layout } from "../components/layout/layout";
import Landing from "../components/landing/landing";
import Selector from "../components/selector/selector";
import { useEffect } from "react";
import Message from "../components/Message/message";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Layout>
        <Landing />
        <Selector />
        <Message />
      </Layout>
    </>
  );
};
export default HomePage;
