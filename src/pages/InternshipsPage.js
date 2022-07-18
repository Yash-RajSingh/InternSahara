import { useParams } from "react-router-dom";
import InternshipDetails from "../components/internshipDetails/internshipDetail";
import { Layout } from "../components/layout/layout";

const InterShipsPage = () => {
  let stream = useParams();
  return (
    <>
      <Layout>
        <InternshipDetails title={stream.alias} />
      </Layout>
    </>
  );
};

export default InterShipsPage;
